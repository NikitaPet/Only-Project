export type BranchNumber = number

export interface BranchEvent {
    date: number
    description: string
}

export interface Branch {
    name: string
    events: BranchEvent[]
}

export type setBranchNumber = React.Dispatch<React.SetStateAction<BranchNumber>>

export type ContextValue = {
    branches: Branch[]
    activeBranchNumber: BranchNumber
    setActiveBranchNumber: setBranchNumber
}
