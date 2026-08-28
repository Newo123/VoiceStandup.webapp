export interface ITeam {
    id: number
    name: string
    members: IMember[]
}

export interface IMember {
    avatar: string
    first_name: string
    last_name?: string
    is_owner?: boolean
    role: string
    username: string
    id: number
}

export type CreateTeamRequest = {
    name: string
    group_id: number
}
export type PatchTeamRequest = {
    name: string
    group_id: number
}
