import ChartContainer from './ChartContainer'

const CustomNodeChart: React.FC = () => {
  const familyTree: SourceNodeType[] = [
    {
      id: 2351232112252,
      name: 'Sally',
      children: [5555, 6666, 7777, 8458189966444, 897543276547654765443576],
      gender: 'female',
      parents: [],
    },
    {
      id: 1231239887112,
      name: 'Billy',
      children: [8458189966444, 5555, 6666, 7777, 897543276547654765443576],
      gender: 'male',
      parents: [],
    },
    {
      id: 7777,
      name: 'Suzie',
      gender: 'female',
      children: [317849882, 8569047194214199353],
      parents: [2351232112252, 1231239887112],
    },
    {
      id: 23123122,
      name: 'Sam',
      gender: 'male',
      children: [317849882, 8569047194214199353],
      parents: [],
    },
    {
      id: 317849882,
      name: 'Josh',
      gender: 'male',
      children: [43924235082592],
      parents: [7777, 23123122],
    },
    {
      id: 8593288989,
      name: 'Sarah',
      gender: 'female',
      children: [43924235082592],
      parents: [],
    },
    {
      id: 43924235082592,
      name: 'Jim',
      gender: 'male',
      children: [9305009999],
      parents: [317849882, 8593288989],
    },
    {
      id: 83473298328562398696,
      name: 'Clara',
      gender: 'female',
      children: [9305009999],
      parents: [],
    },
    {
      id: 9305009999,
      name: 'Joe',
      children: [],
      gender: 'male',
      parents: [43924235082592, 83473298328562398696],
    },
    {
      id: 8569047194214199353,
      name: 'Charlie',
      gender: 'male',
      children: [565893648394894339808],
      parents: [23123122, 7777],
    },
    {
      id: 4382743284732483290,
      name: 'Jessie',
      gender: 'female',
      children: [565893648394894339808],
      parents: [],
    },
    {
      id: 565893648394894339808,
      name: 'Bob',
      gender: 'male',
      children: [],
      parents: [8569047194214199353, 4382743284732483290],
    },
    {
      id: 8458189966444,
      name: 'Ricky',
      gender: 'male',
      children: [],
      parents: [2351232112252, 1231239887112],
    },
    {
      id: 897543276547654765443576,
      name: 'Julian',
      gender: 'male',
      children: [],
      parents: [1231239887112, 2351232112252],
    },
  ]

  const isArrEqual = (arr1: number[], arr2: number[]) => {
    return arr1.length === arr2.length && arr1.every((ele) => arr2.includes(ele))
  }

  const getItemByID = (data: SourceNodeType[], id: number) => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          return data[i]
        }
      }
    }
  }

  const parseSourceNode = (data: SourceNodeType[], node: SourceNodeType): CustomNodeType => {
    const children = []

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const child = getItemByID(data, node.children[i])
        if (child) {
          const temp = parseSourceNode(data, child)
          children.push(temp)
        }
      }
    }

    const customNode: CustomNodeType = {
      id: node.id,
      name: node.name,
      gender: node.gender,
      children: children,
      parents: [],
      partner: node.partner,
    }

    return customNode
  }

  const parse = (data: SourceNodeType[]): CustomNodeType => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].parents.length === 0) {
          for (let j = 0; j < data.length; j++) {
            if (i !== j && isArrEqual(data[j].children, data[i].children)) {
              data[j].partner = data[i]
            }
          }
        }
      }
    }

    const customNode = parseSourceNode(data, data[0])
    console.log(customNode)
    return customNode
  }

  return <ChartContainer datasource={parse(familyTree)} />
}

export default CustomNodeChart
