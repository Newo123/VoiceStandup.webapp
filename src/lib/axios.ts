import axios from 'axios'
import { getTelegramInitData } from './telegram'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 15_000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use((config) => {
    const initData = getTelegramInitData()

    config.headers.set('X-Telegram-Init-Data', initData)

    return config
})
