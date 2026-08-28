import type { CreateTeamRequest, ITeam, PatchTeamRequest } from '../types'
import { teams } from './mocks'

export class TeamsAPI {
    static async GetTeams(): Promise<ITeam[]> {
        // const { data } = await api.get('/teams')
        // return data
        return Promise.resolve(teams)
    }
    static async GetTeam(id: number): Promise<ITeam | null> {
        // const { data } = await api.get(`/teams/${id}`)
        // return data

        return Promise.resolve(teams.find((t) => t.id === id) || null)
    }
    static async CreateTeam(_: CreateTeamRequest): Promise<ITeam> {
        // const { data } = await api.post('/teams', dto) // JSON
        // return data
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return Promise.resolve(teams[0])
    }
    static async DeleteTeam(_: number): Promise<void> {
        // await api.delete(`/teams/${id}`)
        await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    static async PatchTeam(_: number, __: PatchTeamRequest): Promise<ITeam> {
        // const { data } = await api.patch(`/teams/${id}`, dto)
        // return data

        return Promise.resolve(teams[0])
    }
}
