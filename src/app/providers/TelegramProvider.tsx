import {
    createContext,
    useCallback,
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

interface TelegramContextType {
    user: TelegramUser | null
    initData: string
    startParam: string
    isReady: boolean
    isFullscreen: boolean
    isExpanded: boolean
    platform: string
    version: string
    viewportHeight: number
    requestFullscreen: () => Promise<void>
    exitFullscreen: () => Promise<void>
    hapticImpact: (
        style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
    ) => void
    hapticNotification: (type: 'error' | 'success' | 'warning') => void
    hapticSelection: () => void
    showAlert: (message: string) => void
    showConfirm: (message: string) => Promise<boolean>
    sendData: (data: any) => void
    close: () => void
    openLink: (url: string) => void
}

const TelegramContext = createContext<TelegramContextType | null>(null)

export function TelegramProvider({ children }: PropsWithChildren<unknown>) {
    const [user, setUser] = useState<TelegramUser | null>(null)
    const [initData, setInitData] = useState<string>('')
    const [startParam, setStartParam] = useState<string>('')
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const [platform, setPlatform] = useState<string>('')
    const [version, setVersion] = useState<string>('')
    const [viewportHeight, setViewportHeight] = useState<number>(0)

    // 🔥 Функция для применения темы Telegram
    const applyTelegramTheme = (app: Window['Telegram']['WebApp']) => {
        if (!app) return

        const root = document.documentElement

        // Применяем все цвета из темы Telegram
        const theme = app.themeParams
        if (theme) {
            Object.entries(theme).forEach(([key, value]) => {
                // Преобразуем key из camelCase в kebab-case
                const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
                root.style.setProperty(`--tg-theme-${cssKey}`, value)
            })
        }

        // Применяем цветовую схему
        if (app.colorScheme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }

    useEffect(() => {
        const initTelegram = () => {
            const app = window.Telegram?.WebApp

            if (app) {
                // 🔥 Применяем тему Telegram
                applyTelegramTheme(app)

                app.ready()
                app.expand()

                setIsExpanded(true)
                setUser(app.initDataUnsafe?.user || null)
                setInitData(app.initData || '')
                setStartParam(app.initDataUnsafe?.start_param || '')
                setPlatform(app.platform || 'unknown')
                setVersion(app.version || '')
                setViewportHeight(app.viewportHeight || 0)
                setIsReady(true)

                // Полноэкранный режим
                if (app.requestFullscreen) {
                    app.requestFullscreen()
                        .then(() => setIsFullscreen(true))
                        .catch(() => console.warn('Fullscreen not supported'))
                }

                // События
                app.onEvent('themeChanged', () => {
                    // 🔥 Обновляем тему при изменении
                    applyTelegramTheme(app)
                })

                app.onEvent('fullscreenChanged', (isFull: boolean) => {
                    setIsFullscreen(isFull)
                })

                app.onEvent('viewportChanged', (data: { height: number }) => {
                    setViewportHeight(data.height)
                })

                console.log('✅ Telegram Mini App initialized', {
                    theme: app.themeParams,
                    colorScheme: app.colorScheme,
                })
            } else {
                console.warn('Telegram WebApp not available, retrying...')
                setTimeout(initTelegram, 100)
            }
        }

        initTelegram()
    }, [])

    // ====== HAPTIC METHODS ======
    const hapticImpact = useCallback(
        (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => {
            window.Telegram?.WebApp?.HapticFeedback?.impactOccurred(style)
        },
        [],
    )

    const hapticNotification = useCallback(
        (type: 'error' | 'success' | 'warning') => {
            window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred(type)
        },
        [],
    )

    const hapticSelection = useCallback(() => {
        window.Telegram?.WebApp?.HapticFeedback?.selectionChanged()
    }, [])

    // ====== UI METHODS ======
    const showAlert = useCallback((message: string) => {
        window.Telegram?.WebApp?.showAlert(message)
    }, [])

    const showConfirm = useCallback((message: string): Promise<boolean> => {
        return new Promise((resolve) => {
            window.Telegram?.WebApp?.showConfirm(message, (ok: boolean) =>
                resolve(ok),
            )
        })
    }, [])

    const sendData = useCallback((data: any) => {
        window.Telegram?.WebApp?.sendData(JSON.stringify(data))
    }, [])

    const close = useCallback(() => {
        window.Telegram?.WebApp?.close()
    }, [])

    const openLink = useCallback((url: string) => {
        window.Telegram?.WebApp?.openLink(url)
    }, [])

    const requestFullscreen = useCallback(async () => {
        try {
            const app = window.Telegram?.WebApp
            if (app?.requestFullscreen) {
                await app.requestFullscreen()
                setIsFullscreen(true)
            }
        } catch (error) {
            console.error('Request fullscreen error:', error)
        }
    }, [])

    const exitFullscreen = useCallback(async () => {
        try {
            const app = window.Telegram?.WebApp
            if (app?.exitFullscreen) {
                await app.exitFullscreen()
                setIsFullscreen(false)
            }
        } catch (error) {
            console.error('Exit fullscreen error:', error)
        }
    }, [])

    const value: TelegramContextType = {
        user,
        initData,
        startParam,
        isReady,
        isFullscreen,
        isExpanded,
        platform,
        version,
        viewportHeight,
        requestFullscreen,
        exitFullscreen,
        hapticImpact,
        hapticNotification,
        hapticSelection,
        showAlert,
        showConfirm,
        sendData,
        close,
        openLink,
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
