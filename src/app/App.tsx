import { HeaderProvider, QueryProvider } from './providers'
import { TelegramProvider } from './providers/TelegramProvider'
import { Router } from './router'

export function App() {
    return (
        <TelegramProvider>
            <QueryProvider>
                <HeaderProvider>
                    <Router />
                </HeaderProvider>
            </QueryProvider>
        </TelegramProvider>
    )
}
