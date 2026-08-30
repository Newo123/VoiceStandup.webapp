import axios from 'axios'

export const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        const initData = window.Telegram?.WebApp?.initData
        if (initData) {
            config.headers.Authorization = `tma ${initData}`
        }
        return config
    },
    (error) => Promise.reject(error),
)
