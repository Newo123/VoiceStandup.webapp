import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type PropsWithChildren,
} from 'react'
import { useLocation, useNavigate } from 'react-router'

interface HeaderContextType {
    title: string
    setTitle: (title: string) => void
    showBackButton: boolean
    goBack: () => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: PropsWithChildren<unknown>) {
    const location = useLocation()
    const navigate = useNavigate()

    const [title, setTitle] = useState('Мои команды')

    const prevPathRef = useRef(location.pathname)

    /**
     * Проверяем, запущено ли приложение внутри Telegram.
     */
    const telegramApp = (
        window as Window & {
            Telegram?: {
                WebApp?: {
                    BackButton?: {
                        show: () => void
                        hide: () => void
                        onClick: (callback: () => void) => void
                        offClick: (callback: () => void) => void
                    }
                }
            }
        }
    ).Telegram?.WebApp

    const isTelegram = Boolean(telegramApp)

    /**
     * Показываем Back только если есть куда возвращаться.
     *
     * Например:
     *
     * /teams       -> false
     * /teams/new   -> true
     * /teams/123  -> true
     * /teams/123/edit -> true
     * /users       -> false
     * /users/123   -> true
     */
    const pathSegments = location.pathname.split('/').filter(Boolean)

    const showBackButton = pathSegments.length > 1

    /**
     * Возврат назад.
     *
     * React Router сам ведет browser history,
     * поэтому здесь используем navigate(-1).
     *
     * Если истории недостаточно — уходим на родительский route.
     */
    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
            return
        }

        const parentPath = '/' + pathSegments.slice(0, -1).join('/')

        navigate(parentPath || '/teams')
    }

    /**
     * Синхронизируем Telegram BackButton
     * с текущим URL.
     */
    useEffect(() => {
        if (!telegramApp?.BackButton) {
            return
        }

        const backButton = telegramApp.BackButton

        const handleBack = () => {
            goBack()
        }

        backButton.onClick(handleBack)

        if (showBackButton) {
            backButton.show()
        } else {
            backButton.hide()
        }

        return () => {
            backButton.offClick(handleBack)
        }
    }, [telegramApp, showBackButton, location.pathname])

    /**
     * Отслеживаем изменение URL.
     *
     * Оставляем ref, чтобы при необходимости
     * знать предыдущий route.
     */
    useEffect(() => {
        prevPathRef.current = location.pathname
    }, [location.pathname])

    /**
     * При запуске в браузере Telegram BackButton
     * вообще не существует — ничего не делаем.
     *
     * В Telegram он управляется выше.
     */
    void isTelegram

    return (
        <HeaderContext.Provider
            value={{
                title,
                setTitle,
                showBackButton,
                goBack,
            }}
        >
            {children}
        </HeaderContext.Provider>
    )
}

export function useHeader() {
    const context = useContext(HeaderContext)

    if (!context) {
        throw new Error('useHeader must be used within HeaderProvider')
    }

    return context
}
