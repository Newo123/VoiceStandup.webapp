import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export function RootLayout() {
    return (
        <div
            className="
                min-h-screen
                bg-background
                flex
                flex-col
                max-w-xl
                mx-auto

                pt-[var(--tg-content-safe-area-inset-top,0px)]
                pb-[var(--tg-content-safe-area-inset-bottom,0px)]
                pl-[var(--tg-content-safe-area-inset-left,0px)]
                pr-[var(--tg-content-safe-area-inset-right,0px)]
            "
        >
            <Header />

            <main className="flex-1 py-6 flex flex-col">
                <Outlet />
            </main>

            <Footer />

            <ScrollRestoration
                getKey={(location, matches) => {
                    const lastMatch = matches[matches.length - 1]

                    if (lastMatch?.params.id) {
                        return location.key
                    }

                    return location.pathname
                }}
            />
        </div>
    )
}
