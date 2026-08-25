import type { PropsWithChildren } from 'react'
import { HeaderProvider } from './HeaderProvider'
import { QueryProvider } from './QueryProvider'

export function AppProvider({ children }: PropsWithChildren<unknown>) {
    return (
        <QueryProvider>
            <HeaderProvider>{children}</HeaderProvider>
        </QueryProvider>
    )
}
