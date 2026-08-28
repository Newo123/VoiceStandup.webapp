// src/widgets/layout/ui/Header.tsx
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
        <header className="border-b border-border bg-header sticky top-0 z-50">
            <Container className="flex items-center justify-between h-[56px]">
                <div className="flex items-center gap-2 min-w-0 flex-1">
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
                    <h1 className="font-semibold truncate text-lg">{title}</h1>
                </div>
                <Link to="/user" className="shrink-0">
                    <Avatar className="w-10 h-10">
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
