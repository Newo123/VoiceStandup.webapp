import {
    createContext,
    useContext,
    useEffect,
    useState,
    type PropsWithChildren,
} from 'react'
import { useLocation } from 'react-router'

interface HeaderContextType {
    title: string
    setTitle: (title: string) => void
    showBackButton: boolean
    setShowBackButton: (show: boolean) => void
    backPath?: string
    setBackPath: (path: string) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: PropsWithChildren<unknown>) {
    const location = useLocation()
    const [title, setTitle] = useState('Мои команды')
    const [showBackButton, setShowBackButton] = useState(false)
    const [backPath, setBackPath] = useState<string>('/')

    useEffect(() => {
        const path = location.pathname
        const segments = path.split('/').filter(Boolean)
        const shouldShowBack = segments.length > 1

        setShowBackButton(shouldShowBack)

        if (shouldShowBack) {
            const parentPath = '/' + segments.slice(0, -1).join('/')
            setBackPath(parentPath)
        }
    }, [location.pathname])

    return (
        <HeaderContext.Provider
            value={{
                title,
                setTitle,
                showBackButton,
                setShowBackButton,
                backPath,
                setBackPath,
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
