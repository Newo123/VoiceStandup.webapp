import { useHeader, useTelegram } from '@/app/providers'
import { TeamList, TeamsPageSkeleton, useTeams } from '@/features/teams'
import { Button, Container, NotFoundPage } from '@/widgets'
import { Plus } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router'

export function TeamsPage() {
    const { setTitle } = useHeader()
    const { data: teams, isLoading, isError } = useTeams()
    const { initData } = useTelegram()
    console.log(initData)

    useEffect(() => {
        setTitle('Мои команды')

        return () => {
            setTitle('')
        }
    }, [setTitle])

    if (isLoading) {
        return <TeamsPageSkeleton />
    }

    if (isError || !teams) return <NotFoundPage />

    return (
        <Container className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Мои команды</h1>
                <p className="text-xs opacity-70">
                    Работайте вместе. Отчитывайтесь проще.
                </p>
            </div>

            <Button
                nativeButton={false}
                render={(props) => <Link to="/teams/new" {...props} />}
            >
                <Plus />
                Создать команду
            </Button>

            <TeamList teams={teams} />
        </Container>
    )
}
