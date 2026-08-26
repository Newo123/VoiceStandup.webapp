import { TeamList } from '@/features/teams'
import { Button } from '@/shared'
import { Container } from '@/shared/components/layout/Container'
import { Plus } from 'lucide-react'
import { Link } from 'react-router'

export function TeamsPage() {
    return (
        <Container className="flex flex-col flex-1 mb-5">
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
