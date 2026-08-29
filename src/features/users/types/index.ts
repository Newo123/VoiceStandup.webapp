import type { TelegramUser } from '@/app/providers'

export interface IUser extends TelegramUser {
    role: string
}

export interface IPatchMeRequest {
    role: string
}
