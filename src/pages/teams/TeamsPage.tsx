import { useHeader } from '@/app/providers'
import { TeamList } from '@/features/teams'
import { Button, Container } from '@/shared'
import { Plus } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router'

export function TeamsPage() {
    const { setTitle } = useHeader()

    useEffect(() => {
        setTitle('Мои команды')

        return () => {
            setTitle('')
        }
    }, [setTitle])
    return (
        <Container className="flex flex-col flex-1">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Мои команды</h1>
                <p className="text-xs opacity-70">
                    Работайте вместе. Отчитывайтесь проще.
                </p>
            </div>

            <Button
                className="mt-8"
                nativeButton={false}
                render={(props) => <Link to="/teams/new" {...props} />}
            >
                <Plus />
                Создать команду
            </Button>

            <TeamList />
        </Container>
    )
}
