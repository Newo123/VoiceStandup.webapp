import { api } from '@/shared'
import type { IPatchMeRequest, IUser } from '../types'

export class UsersAPI {
    static async GetMe(): Promise<IUser> {
        // return users[0]
        const { data: user } = await api.get<IUser>('/me')
        return user
    }
    static async GetUsers(): Promise<IUser[]> {
        // return users

        const { data: users } = await api.get<IUser[]>('/users')
        return users
    }
    static async GetUser(id: string): Promise<IUser | null> {
        // return users.find((user) => user.id === id) || null
        const { data: user } = await api.get<IUser>(`/users/${id}`)
        return user
    }
    static async PatchMe(dto: IPatchMeRequest): Promise<IUser> {
        // return users[0]
        const { data: user } = await api.patch<IUser>('/me', dto)
        return user
    }
}
