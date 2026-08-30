import { api } from '@/shared'
import type { CreateTeamRequest, ITeam, PatchTeamRequest } from '../types'

export class TeamsAPI {
    static async GetTeams(): Promise<ITeam[]> {
        const { data: teams } = await api.get('/teams')
        return teams
    }
    static async GetTeam(id: string): Promise<ITeam | null> {
        const { data: team } = await api.get(`/teams/${id}`)
        return team
    }
    static async CreateTeam(dto: CreateTeamRequest): Promise<ITeam> {
        const { data: team } = await api.post('/teams', dto)
        return team
    }
    static async DeleteTeam(id: string): Promise<void> {
        return api.delete(`/teams/${id}`)
    }
    static async PatchTeam(id: string, dto: PatchTeamRequest): Promise<ITeam> {
        const { data: team } = await api.patch(`/teams/${id}`, dto)
        return team
    }
}
