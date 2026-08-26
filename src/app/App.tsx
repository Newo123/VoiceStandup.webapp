import { HeaderProvider, QueryProvider } from './providers'
import { Router } from './router'

export function App() {
    return (
        <QueryProvider>
            <HeaderProvider>
                <Router />
            </HeaderProvider>
        </QueryProvider>
    )
}
