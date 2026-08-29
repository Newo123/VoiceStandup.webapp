import { delay, users } from '@/shared'
import type { IPatchMeRequest, IUser } from '../types'

export class UsersAPI {
    static async GetMe(): Promise<IUser> {
        // const { data } = await api.get<IUser>('/me')
        // return data

        await delay(1000)
        return users[0]
    }
    static async GetUsers(): Promise<IUser[]> {
        // const { data } = await api.get<IUser[]>('/users')
        // return data
        await delay(1000)

        return users
    }
    static async GetUser(id: number): Promise<IUser | null> {
        // const { data } = await api.get<IUser>(`/users/${id}`)
        // return data
        await delay(1000)

        return users.find((user) => user.id === id) || null
    }
    static async PatchMe(dto: IPatchMeRequest): Promise<IUser> {
        // const { data } = await api.patch<IUser>('/me', dto)
        // return data
        await delay(1000)

        return { ...users[0], role: dto.role }
    }
}
