import { ROUTES } from '@/config/routes'
import { BarChart3, Home, User } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { Button } from '../ui/button'
import { Container } from './container'

const NAV_ITEMS = [
    {
        to: ROUTES.TEAMS,
        icon: Home,
        label: 'Команда',
    },
    {
        to: ROUTES.REPORTS,
        icon: BarChart3,
        label: 'Отчеты',
    },
    {
        to: ROUTES.PROFILE,
        icon: User,
        label: 'Профиль',
    },
] as const

export function Footer() {
    const location = useLocation()

    return (
        <footer className="border-t border-border bg-header sticky bottom-0 z-50 py-[8px]">
            <Container className="flex items-center justify-around h-[44px]">
                {NAV_ITEMS.map(({ to, icon: Icon, label }) => {
                    const active =
                        location.pathname === to ||
                        (to === ROUTES.TEAMS &&
                            location.pathname.startsWith(ROUTES.TEAMS + '/'))

                    return (
                        <Button
                            key={to}
                            variant="link"
                            nativeButton={false}
                            render={(props) => (
                                <Link
                                    {...props}
                                    to={to}
                                    className={`
                                        text-xs flex flex-col items-center gap-0 transition-colors
                                        ${
                                            active
                                                ? 'text-foreground font-medium'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }
                                    `}
                                >
                                    <Icon
                                        className={`h-4 w-4 ${active ? 'text-primary' : ''}`}
                                    />
                                    {label}
                                </Link>
                            )}
                        />
                    )
                })}
            </Container>
        </footer>
    )
}
