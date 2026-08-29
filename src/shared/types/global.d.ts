export {}

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                // ====== Данные ======
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
                themeParams: Record<string, string>
                colorScheme: 'light' | 'dark'
                platform: 'ios' | 'android' | 'tdesktop' | 'web' | 'unknown'
                version: string
                isExpanded: boolean
                viewportHeight: number
                viewportStableHeight: number

                // ====== Основные методы ======
                ready: () => void
                expand: () => void
                close: () => void
                sendData: (data: string) => void

                // ====== Полноэкранный режим (Mini Apps 2.0) ======
                requestFullscreen: () => Promise<void>
                exitFullscreen: () => Promise<void>
                isFullscreen: boolean

                // ====== UI Компоненты ======
                MainButton: {
                    show: () => void
                    hide: () => void
                    setText: (text: string) => void
                    onClick: (callback: () => void) => void
                    offClick: (callback: () => void) => void
                    enable: () => void
                    disable: () => void
                    isVisible: boolean
                    isActive: boolean
                    setParams: (params: {
                        text?: string
                        color?: string
                        textColor?: string
                        is_active?: boolean
                        is_visible?: boolean
                    }) => void
                }
                BackButton: {
                    show: () => void
                    hide: () => void
                    onClick: (callback: () => void) => void
                    offClick: (callback: () => void) => void
                }
                SettingsButton?: {
                    show: () => void
                    hide: () => void
                    onClick: (callback: () => void) => void
                    offClick: (callback: () => void) => void
                }

                // ====== Haptic Feedback ======
                HapticFeedback: {
                    impactOccurred: (
                        style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
                    ) => void
                    notificationOccurred: (
                        type: 'error' | 'success' | 'warning',
                    ) => void
                    selectionChanged: () => void
                }

                // ====== Диалоги ======
                showAlert: (message: string, callback?: () => void) => void
                showConfirm: (
                    message: string,
                    callback?: (ok: boolean) => void,
                ) => void
                showPopup: (
                    params: {
                        title?: string
                        message: string
                        buttons?: Array<{
                            id?: string
                            type?:
                                | 'default'
                                | 'ok'
                                | 'close'
                                | 'cancel'
                                | 'destructive'
                            text?: string
                        }>
                    },
                    callback?: (buttonId: string) => void,
                ) => void
                showScanQrPopup: (
                    params: {
                        text?: string
                    },
                    callback?: (data: string) => void,
                ) => void
                closeScanQrPopup: () => void

                // ====== События ======
                onEvent: (event: string, callback: (data?: any) => void) => void
                offEvent: (
                    event: string,
                    callback: (data?: any) => void,
                ) => void

                // ====== Дополнительно ======
                openLink: (
                    url: string,
                    options?: { try_instant_view?: boolean },
                ) => void
                openTelegramLink: (url: string) => void
                openInvoice: (
                    url: string,
                    callback?: (status: string) => void,
                ) => void
                switchInlineQuery: (
                    query: string,
                    choose_chat_types?: string[],
                ) => void
            }
        }
    }
}
