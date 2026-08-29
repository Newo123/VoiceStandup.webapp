import {
    createContext,
    useContext,
    useEffect,
    useState,
    type PropsWithChildren,
} from 'react'

export interface TelegramUser {
    id: number
    first_name: string
    last_name?: string
    username?: string
    language_code?: string
    photo_url?: string
}

interface TelegramWebApp {
    initData: string

    initDataUnsafe: {
        user?: TelegramUser
        start_param?: string
        auth_date: number
        hash: string
    }

    colorScheme: 'light' | 'dark'
    themeParams: Record<string, string>

    isFullscreen: boolean
    isExpanded: boolean

    ready: () => void
    expand: () => void
    close: () => void

    isVersionAtLeast: (version: string) => boolean

    requestFullscreen: () => void
    exitFullscreen: () => void

    disableVerticalSwipes: () => void

    HapticFeedback: {
        impactOccurred: (
            style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
        ) => void

        notificationOccurred: (type: 'error' | 'success' | 'warning') => void
    }

    showAlert: (message: string, callback?: () => void) => void

    showConfirm: (message: string, callback?: (ok: boolean) => void) => void

    showPopup: (params: any, callback?: (id: string) => void) => void

    sendData: (data: string) => void

    onEvent: (event: string, callback: (...args: any[]) => void) => void

    offEvent: (event: string, callback: (...args: any[]) => void) => void

    requestSafeArea?: () => void
    requestContentSafeArea?: () => void

    BackButton: {
        show: () => void
        hide: () => void
        onClick: (callback: () => void) => void
        offClick: (callback: () => void) => void
    }
}

interface TelegramContextType {
    webApp: TelegramWebApp | null

    user: TelegramUser | null

    initData: string

    startParam: string

    isReady: boolean

    isFullscreen: boolean

    hapticImpact: (style: 'light' | 'medium' | 'heavy') => void

    hapticNotification: (type: 'error' | 'success' | 'warning') => void

    showAlert: (message: string) => void

    showConfirm: (message: string) => Promise<boolean>

    sendData: (data: any) => void

    close: () => void

    requestFullscreen: () => void

    exitFullscreen: () => void
}

const TelegramContext = createContext<TelegramContextType | null>(null)

export function TelegramProvider({ children }: PropsWithChildren) {
    const [webApp, setWebApp] = useState<TelegramWebApp | null>(null)

    const [user, setUser] = useState<TelegramUser | null>(null)

    const [initData, setInitData] = useState('')

    const [startParam, setStartParam] = useState('')

    const [isReady, setIsReady] = useState(false)

    const [isFullscreen, setIsFullscreen] = useState(false)

    useEffect(() => {
        let timeoutId: number | undefined

        const initTelegram = () => {
            const app = (window as any).Telegram?.WebApp as
                | TelegramWebApp
                | undefined

            if (!app) {
                console.warn('Telegram WebApp not available, retrying...')

                timeoutId = window.setTimeout(initTelegram, 100)

                return
            }

            app.ready()
            app.expand()

            if (
                app.isVersionAtLeast('7.7') &&
                typeof app.disableVerticalSwipes === 'function'
            ) {
                app.disableVerticalSwipes()
            }

            if (
                app.isVersionAtLeast('8.0') &&
                typeof app.requestFullscreen === 'function'
            ) {
                try {
                    app.requestSafeArea?.()
                    app.requestContentSafeArea?.()
                    if (!app.isFullscreen) {
                        app.requestFullscreen()
                    }
                } catch (error) {
                    console.warn('Telegram fullscreen request failed:', error)
                }
            }

            setWebApp(app)

            setUser(app.initDataUnsafe?.user || null)

            setInitData(app.initData || '')

            setStartParam(app.initDataUnsafe?.start_param || '')

            setIsFullscreen(Boolean(app.isFullscreen))

            setIsReady(true)
        }

        initTelegram()

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [])

    const requestFullscreen = () => {
        if (!webApp) {
            return
        }

        if (!webApp.isVersionAtLeast('8.0')) {
            console.warn('Fullscreen requires Telegram Bot API 8.0+')

            return
        }

        if (typeof webApp.requestFullscreen !== 'function') {
            return
        }

        if (webApp.isFullscreen) {
            return
        }

        try {
            webApp.requestFullscreen()
        } catch (error) {
            console.warn('Failed to request fullscreen:', error)
        }
    }

    const exitFullscreen = () => {
        if (!webApp) {
            return
        }

        if (!webApp.isVersionAtLeast('8.0')) {
            return
        }

        if (typeof webApp.exitFullscreen !== 'function') {
            return
        }

        if (!webApp.isFullscreen) {
            return
        }

        try {
            webApp.exitFullscreen()
        } catch (error) {
            console.warn('Failed to exit fullscreen:', error)
        }
    }

    const hapticImpact = (style: 'light' | 'medium' | 'heavy') => {
        webApp?.HapticFeedback.impactOccurred(style)
    }

    const hapticNotification = (type: 'error' | 'success' | 'warning') => {
        webApp?.HapticFeedback.notificationOccurred(type)
    }

    const showAlert = (message: string) => {
        webApp?.showAlert(message)
    }

    const showConfirm = (message: string): Promise<boolean> => {
        return new Promise((resolve) => {
            if (!webApp) {
                resolve(false)
                return
            }

            webApp.showConfirm(message, (ok) => resolve(ok))
        })
    }

    const sendData = (data: any) => {
        webApp?.sendData(JSON.stringify(data))
    }

    const close = () => {
        webApp?.close()
    }

    const value: TelegramContextType = {
        webApp,
        user,
        initData,
        startParam,
        isReady,
        isFullscreen,
        hapticImpact,
        hapticNotification,
        showAlert,
        showConfirm,
        sendData,
        close,
        requestFullscreen,
        exitFullscreen,
    }

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    )
}

export function useTelegram() {
    const context = useContext(TelegramContext)

    if (!context) {
        throw new Error('useTelegram must be used within TelegramProvider')
    }

    return context
}
