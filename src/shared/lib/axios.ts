import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.your-app.com',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Добавляем initData в запросы
api.interceptors.request.use(
    (config) => {
        const initData = window.Telegram?.WebApp?.initData
        if (initData) {
            config.headers['X-Telegram-Init-Data'] = initData
            config.headers.Authorization = `tma ${initData}`
        }
        return config
    },
    (error) => Promise.reject(error),
)
