import { useHeader } from '@/app/providers'
import { Button } from '@/shared/components/ui/button'
import { useEffect } from 'react'
import { Link } from 'react-router'

export function NotFoundPage() {
    const { setTitle } = useHeader()

    useEffect(() => {
        setTitle('Страница не найдена')
    }, [setTitle])
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
            <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
            <p className="text-xl mt-4">Страница не найдена</p>
            <Link to="/teams">
                <Button className="mt-6">Вернуться на главную</Button>
            </Link>
        </div>
    )
}
