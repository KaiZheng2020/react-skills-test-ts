import './ChartContainer.css'
import ChartNode from './ChartNode'

interface Props {
  datasource: CustomNodeType
}

const ChartContainer: React.FC<Props> = (props) => {
  const { datasource } = props

  return (
    <div className={'orgchart-container'}>
      <div className={'orgchart myChart'}>
        <ul>
          <ChartNode datasource={datasource} />
        </ul>
      </div>
    </div>
  )
}

export default ChartContainer
