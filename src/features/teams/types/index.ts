import type { IUser } from '@/features/users'

export interface ITeam {
    id: string
    name: string
    users: IUser[]
    owner_id: string

    telegram_chat_id: number
}

export type CreateTeamRequest = {
    name: string
    group_id: number
}
export type PatchTeamRequest = {
    name: string
    group_id: number
}
