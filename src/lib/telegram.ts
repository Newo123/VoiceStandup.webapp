declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                initData: string
                setHeaderColor: (hex: string) => void
            }
        }
    }
}

export function getTelegramInitData(): string {
    const initData = window.Telegram?.WebApp?.initData

    if (!initData) {
        throw new Error('Telegram initData is not available')
    }

    return initData
}
