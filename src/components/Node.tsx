import './Node.css'

interface Props {
  nodeData: CustomNodeType
}

const Node: React.FC<Props> = (props) => {
  const { nodeData } = props

  const selectNode = () => {
    alert('name: ' + nodeData.name + ' gender: ' + nodeData.gender)
  }

  return (
    <div role="button" tabIndex={0} onClick={selectNode} onKeyPress={selectNode}>
      <div className={nodeData.gender === 'female' ? 'female' : 'male'}>{nodeData.name}</div>
      {nodeData.partner ? (
        <div className={nodeData.partner.gender === 'female' ? 'female' : 'male'}>{nodeData.partner.name}</div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Node
