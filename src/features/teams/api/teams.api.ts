import { delay, teams } from '@/shared'
import type { CreateTeamRequest, ITeam, PatchTeamRequest } from '../types'

export class TeamsAPI {
    static async GetTeams(): Promise<ITeam[]> {
        // const { data } = await api.get('/teams')
        // return data
        await delay(1000)

        return teams
    }
    static async GetTeam(id: number): Promise<ITeam | null> {
        // const { data } = await api.get(`/teams/${id}`)
        // return data
        await delay(1000)

        return teams.find((team) => team.id === id) || null
    }
    static async CreateTeam(_: CreateTeamRequest): Promise<ITeam> {
        // const { data } = await api.post('/teams', dto) // JSON
        // return data
        await delay(1000)
        return teams.at(0)!
    }
    static async DeleteTeam(_: number): Promise<void> {
        // await api.delete(`/teams/${id}`)
        await delay(1000)
    }
    static async PatchTeam(id: number, __: PatchTeamRequest): Promise<ITeam> {
        // const { data } = await api.patch(`/teams/${id}`, dto)
        // return data
        await delay(1000)

        return teams.find((team) => team.id === id)!
    }
}
