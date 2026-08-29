import type { ITeam } from '@/features/teams'
import type { IUser } from '@/features/users'

export interface IReport {
    id: number
    user: IUser
    team: ITeam
    created_at: string
    source_text: string

    completed: string[]
    planned: string[]
    blockers: string[]
}
