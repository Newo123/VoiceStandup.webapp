import { createContext } from 'react'
import type {
    ITelegramThemeParams,
    ITelegramWebApp,
    ITelegramWebAppUser,
} from '../types/telegram.types'

export interface ITelegramContext {
    webApp: ITelegramWebApp | null
    initData: string
    user: ITelegramWebAppUser | null
    isTelegram: boolean
    colorScheme: 'light' | 'dark'
    themeParams: ITelegramThemeParams
}

export const TelegramContext = createContext<ITelegramContext | null>(null)
