export interface IUser {
    id: string
    telegram_user_id: number
    role: string
    first_name: string
    last_name?: string
    username?: string
    photo_url?: string
}

export interface IPatchMeRequest {
    role: string
}
