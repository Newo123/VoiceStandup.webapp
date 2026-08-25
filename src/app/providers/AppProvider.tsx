import type { PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'
import { TelegramProvider } from './TelegramProvider'

export function AppProvider({ children }: PropsWithChildren<unknown>) {
    return (
        <TelegramProvider>
            <QueryProvider>{children}</QueryProvider>
        </TelegramProvider>
    )
}
