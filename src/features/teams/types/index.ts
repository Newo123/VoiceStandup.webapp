import type { IUser } from '@/features/users'

export interface ITeam {
    id: number
    name: string
    users: IUser[]
    owner_id: number
}

export type CreateTeamRequest = {
    name: string
    group_id: number
}
export type PatchTeamRequest = {
    name: string
    group_id: number
}
