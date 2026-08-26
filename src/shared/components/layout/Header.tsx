import { useHeader } from '@/app/providers/HeaderProvider'
import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Container } from './Container'

export function Header() {
    const navigate = useNavigate()
    const { title, showBackButton, backPath } = useHeader()

    const handleBack = () => {
        navigate(backPath || '/')
    }

    return (
        <header className="border-b border-border bg-header sticky top-0 z-50">
            <Container className="flex items-center justify-between h-[56px]">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                    {showBackButton && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleBack}
                            className="shrink-0"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    )}
                    <h1 className="font-semibold truncate text-lg">{title}</h1>
                </div>
                <Link to="/profile" className="shrink-0">
                    <Avatar className="w-[48px] h-[48px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
            </Container>
        </header>
    )
}
