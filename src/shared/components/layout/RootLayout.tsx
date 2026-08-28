import { Outlet } from 'react-router'
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
        </div>
    )
}
