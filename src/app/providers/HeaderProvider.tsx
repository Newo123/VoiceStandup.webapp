// src/app/providers/HeaderProvider.tsx
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
    const [history, setHistory] = useState<string[]>(() => [location.pathname])
    const prevPathRef = useRef<string>(location.pathname)

    // Обновляем стек при навигации (push)
    useEffect(() => {
        const currentPath = location.pathname
        if (currentPath !== prevPathRef.current) {
            setHistory((prev) => {
                if (prev.length > 0 && prev[prev.length - 1] === currentPath) {
                    return prev
                }
                return [...prev, currentPath]
            })
            prevPathRef.current = currentPath
        }
    }, [location.pathname])

    // Синхронизация с браузерной кнопкой "назад"
    useEffect(() => {
        const handlePopState = () => {
            const currentPath = location.pathname
            setHistory((prev) => {
                const index = prev.indexOf(currentPath)
                if (index !== -1) {
                    return prev.slice(0, index + 1)
                }
                return [currentPath]
            })
            prevPathRef.current = currentPath
        }
        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [location.pathname])

    // 🔥 Показываем кнопку только на страницах с глубиной > 1 (например, /teams/1)
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const showBackButton = pathSegments.length > 1

    // 🔥 Возврат: по истории или на родительский путь
    const goBack = () => {
        if (history.length > 1) {
            const prevPath = history[history.length - 2]
            setHistory((prev) => prev.slice(0, -1))
            navigate(prevPath)
        } else {
            // Если истории нет – строим родительский путь
            const parentPath = '/' + pathSegments.slice(0, -1).join('/')
            navigate(parentPath || '/')
        }
    }

    return (
        <HeaderContext.Provider
            value={{ title, setTitle, showBackButton, goBack }}
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
