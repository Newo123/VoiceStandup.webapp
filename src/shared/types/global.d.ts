export {}

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string
                initDataUnsafe: {
                    user?: {
                        id: number
                        first_name: string
                        last_name?: string
                        username?: string
                        language_code?: string
                        photo_url?: string
                    }
                    start_param?: string
                    auth_date: number
                    hash: string
                }
                ready: () => void
                expand: () => void
                close: () => void
                sendData: (data: string) => void
                MainButton: {
                    show: () => void
                    hide: () => void
                    setText: (text: string) => void
                    onClick: (callback: () => void) => void
                    offClick: (callback: () => void) => void
                    enable: () => void
                    disable: () => void
                }
                BackButton: {
                    show: () => void
                    hide: () => void
                    onClick: (callback: () => void) => void
                    offClick: (callback: () => void) => void
                }
                HapticFeedback: {
                    impactOccurred: (
                        style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
                    ) => void
                    notificationOccurred: (
                        type: 'error' | 'success' | 'warning',
                    ) => void
                    selectionChanged: () => void
                }
                themeParams: Record<string, string>
                colorScheme: 'light' | 'dark'
                onEvent: (event: string, callback: () => void) => void
                offEvent: (event: string, callback: () => void) => void
            }
        }
    }
}
