import { Outlet } from 'react-router'
import { Container } from './container'
import { Footer } from './footer'
import { Header } from './header'

export function Layout() {
    return (
        <>
            <Header />
            <main className="py-[25px] h-full flex-1">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    )
}
