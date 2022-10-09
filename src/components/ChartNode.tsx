import { useEffect, useState } from 'react'
import './ChartNode.css'
import Node from './Node'
import { selectNodeService } from './service'

interface Props {
  datasource: CustomNodeType
}

const ChartNode: React.FC<Props> = (props) => {
  const { datasource } = props

  const [selected, setSelected] = useState(false)

  const nodeClass = ['oc-node', selected ? 'selected' : ''].filter((item) => item).join(' ')

  useEffect(() => {
    const subs = selectNodeService.getSelectedNodeInfo().subscribe((selectedNodeInfo) => {
      if (selectedNodeInfo) {
        setSelected(selectedNodeInfo.selectedNodeId === datasource.id)
      } else {
        setSelected(false)
      }
    })

    return () => {
      subs.unsubscribe()
    }
  }, [datasource])

  return (
    <li className="oc-hierarchy">
      <div id={datasource.id.toString()} key={datasource.id} className={nodeClass}>
        <Node nodeData={datasource} />
      </div>
      {datasource.children && datasource.children.length > 0 && (
        <ul>
          {datasource.children.map((node) => (
            <ChartNode datasource={node} key={node.id} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default ChartNode
