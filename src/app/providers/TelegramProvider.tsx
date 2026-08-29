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
    ready: () => void
    expand: () => void
    close: () => void
    sendData: (data: string) => void
    showAlert: (message: string, callback?: () => void) => void
    showConfirm: (message: string, callback?: (ok: boolean) => void) => void
    showPopup: (params: any, callback?: (id: string) => void) => void
    HapticFeedback: {
        impactOccurred: (
            style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
        ) => void
        notificationOccurred: (type: 'error' | 'success' | 'warning') => void
    }
    onEvent: (event: string, callback: () => void) => void
    offEvent: (event: string, callback: () => void) => void
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
    hapticImpact: (style: 'light' | 'medium' | 'heavy') => void
    hapticNotification: (type: 'error' | 'success' | 'warning') => void
    showAlert: (message: string) => void
    showConfirm: (message: string) => Promise<boolean>
    sendData: (data: any) => void
    close: () => void
}

const TelegramContext = createContext<TelegramContextType | null>(null)

export function TelegramProvider({ children }: PropsWithChildren<unknown>) {
    const [webApp, setWebApp] = useState<TelegramWebApp | null>(null)
    const [user, setUser] = useState<TelegramUser | null>(null)
    const [initData, setInitData] = useState<string>('')
    const [startParam, setStartParam] = useState<string>('')
    const [isReady, setIsReady] = useState<boolean>(false)

    useEffect(() => {
        const initTelegram = () => {
            const app = (window as any).Telegram?.WebApp
            if (app) {
                app.ready()
                app.expand()

                setWebApp(app)
                setUser(app.initDataUnsafe?.user || null)
                setInitData(app.initData || '')
                setStartParam(app.initDataUnsafe?.start_param || '')
                setIsReady(true)
            } else {
                // Если по какой-то причине скрипт еще не загрузился
                console.warn('Telegram WebApp not available, retrying...')
                setTimeout(initTelegram, 100)
            }
        }

        // Запускаем инициализацию
        initTelegram()
    }, [])

    // ====== Методы ======
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
            webApp?.showConfirm(message, (ok) => resolve(ok))
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
        hapticImpact,
        hapticNotification,
        showAlert,
        showConfirm,
        sendData,
        close,
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
