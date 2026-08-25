import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { TelegramContext } from '../context/telegram'
import type {
    ITelegramWebApp,
    ITelegramWebAppUser,
} from '../types/telegram.types'

interface IProps extends PropsWithChildren<unknown> {}

function getTelegramWebApp(): ITelegramWebApp | null {
    if (typeof window === 'undefined') {
        return null
    }

    return window.Telegram?.WebApp ?? null
}

function getUserFromInitData(initData: string): ITelegramWebAppUser | null {
    if (!initData) return null

    try {
        const match = initData.match(/user=([^&]+)/)
        if (!match) return null

        return JSON.parse(decodeURIComponent(match[1]))
    } catch {
        return null
    }
}

export function TelegramProvider({ children }: IProps) {
    const [webApp] = useState(() => getTelegramWebApp())

    useEffect(() => {
        if (!webApp) {
            return
        }

        webApp.ready()
        webApp.expand()
    }, [webApp])

    const value = useMemo(() => {
        const initData = webApp?.initData ?? ''
        const user = getUserFromInitData(initData)

        return {
            webApp,
            initData,
            user,
            isTelegram: Boolean(webApp),
            colorScheme: webApp?.colorScheme ?? 'light',
            themeParams: webApp?.themeParams ?? {},
        }
    }, [webApp])

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    )
}
