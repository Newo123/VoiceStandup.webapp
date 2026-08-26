export interface ITeam {
    id: number
    name: string
    members: IMember[]
}

export interface IMember {
    avatar: string
    name: string
    is_owner?: boolean
}
