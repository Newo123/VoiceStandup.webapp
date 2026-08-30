import { delay, users } from '@/shared'
import type { IPatchMeRequest, IUser } from '../types'

export class UsersAPI {
    static async GetMe(): Promise<IUser> {
        await delay(1000)
        return users[0]
        // const { data: user } = await api.get<IUser>('/me')
        // return user
    }
    static async GetUsers(): Promise<IUser[]> {
        await delay(1000)

        return users

        // const { data: users } = await api.get<IUser[]>('/users')
        // return users
    }
    static async GetUser(id: string): Promise<IUser | null> {
        await delay(1000)

        return users.find((user) => user.id === id) || null
        // const { data: user } = await api.get<IUser>(`/users/${id}`)
        // return user
    }
    static async PatchMe(_: IPatchMeRequest): Promise<IUser> {
        await delay(1000)

        return users[0]
        // const { data: user } = await api.patch<IUser>('/me', dto)
        // return user
    }
}
