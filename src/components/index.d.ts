interface SourceNodeType {
  id: number
  name: string
  gender: string
  children: number[]
  parents: number[] | []
  partner?: SourceNodeType | null
}

interface CustomNodeType {
  id: number
  name: string
  children: CustomNodeType[]
  gender: string
  parents: CustomNodeType[] | []
  partner?: SourceNodeType | null
}
