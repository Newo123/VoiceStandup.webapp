import { delay, teams } from '@/shared'
import type { CreateTeamRequest, ITeam, PatchTeamRequest } from '../types'

export class TeamsAPI {
    static async GetTeams(): Promise<ITeam[]> {
        await delay(1000)
        return teams

        // const { data: teams } = await api.get('/teams')
        // return teams
    }
    static async GetTeam(id: string): Promise<ITeam | null> {
        await delay(1000)
        return teams.find((team) => team.id === id) || null
        // const { data: team } = await api.get(`/teams/${id}`)
        // return team
    }
    static async CreateTeam(_: CreateTeamRequest): Promise<ITeam> {
        await delay(1000)
        return teams[0]
        // const { data: team } = await api.post('/teams', dto)
        // return team
    }
    static async DeleteTeam(_: string): Promise<void> {
        await delay(1000)
        // return api.delete(`/teams/${id}`)
    }
    static async PatchTeam(_: string, __: PatchTeamRequest): Promise<ITeam> {
        await delay(1000)
        return teams[0]
        // const { data: team } = await api.patch(`/teams/${id}`, dto)
        // return team
    }
}
