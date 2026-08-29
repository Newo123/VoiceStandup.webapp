import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export function RootLayout() {
    return (
        <div className="min-h-screen bg-background flex flex-col max-w-xl mx-auto">
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
