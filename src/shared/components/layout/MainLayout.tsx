import { cn } from '@/shared/lib/utils'
import { Outlet } from 'react-router'
import { Container } from './Container'
import { Footer } from './Footer'
import { Header } from './Header'

export function MainLayout() {
    return (
        <div className="min-h-screen bg-background flex flex-col max-w-xl mx-auto">
            <Header />
            <main className={cn('flex-1 py-6')}>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </div>
    )
}
