import { useTelegram } from '@/app/providers'
import { useHeader } from '@/app/providers/HeaderProvider'
import { ChevronLeft, User } from 'lucide-react'
import { Link } from 'react-router'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Container } from './Container'

export function Header() {
    const { title, showBackButton, goBack } = useHeader()
    const { user } = useTelegram()

    const getInitials = () => {
        const first = user?.first_name?.[0] || ''
        const last = user?.last_name?.[0] || ''

        return (first + last).toUpperCase()
    }

    return (
        <header
            className="
                sticky top-0 z-50
                border-b border-border
                bg-header
                pt-[var(--app-safe-top)]
            "
        >
            <Container className="flex h-[56px] items-center justify-between">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                    {showBackButton && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goBack}
                            className="shrink-0"
                        >
                            <ChevronLeft className="!h-6 !w-6" />
                        </Button>
                    )}

                    <h1 className="truncate text-lg font-semibold">{title}</h1>
                </div>

                <Link to="/profile" className="shrink-0">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.photo_url} />

                        <AvatarFallback>
                            {user ? (
                                getInitials()
                            ) : (
                                <User className="h-5 w-5 text-muted-foreground" />
                            )}
                        </AvatarFallback>
                    </Avatar>
                </Link>
            </Container>
        </header>
    )
}
