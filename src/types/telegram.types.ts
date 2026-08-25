export interface ITelegramWebAppUser {
    id: number
    first_name: string
    last_name?: string
    username?: string
    language_code?: string
    is_premium?: boolean
    photo_url?: string
}

export interface ITelegramWebApp {
    initData: string
    initDataUnsafe: {
        user?: ITelegramWebAppUser
        query_id?: string
        auth_date?: number
        hash?: string
    }

    colorScheme: 'light' | 'dark'

    themeParams: ITelegramThemeParams

    ready(): void
    expand(): void
    close(): void

    BackButton: {
        isVisible: boolean
        show(): void
        hide(): void
        onClick(callback: () => void): void
        offClick(callback: () => void): void
    }

    HapticFeedback?: {
        impactOccurred(style: string): void
        notificationOccurred(type: string): void
        selectionChanged(): void
    }
}

export interface ITelegramThemeParams {
    bg_color?: string
    text_color?: string
    hint_color?: string
    link_color?: string
    button_color?: string
    button_text_color?: string

    secondary_bg_color?: string
    header_bg_color?: string
    accent_text_color?: string
    section_bg_color?: string
    section_header_text_color?: string
    section_separator_color?: string
    subtitle_text_color?: string
    destructive_text_color?: string
}

declare global {
    interface Window {
        Telegram?: {
            WebApp: ITelegramWebApp
        }
    }
}
