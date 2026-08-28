import { useHeader } from '@/app/providers'
import { Container, NotFoundPage, UsersList } from '@/widgets'
import { useEffect } from 'react'
import { useUsers } from '../hooks/useUsers'
import { UsersPageSkeleton } from './UsersPageSkeleton'

export function UsersPage() {
    const { setTitle } = useHeader()
    const { data: users, isLoading, isError } = useUsers()

    useEffect(() => {
        setTitle('Пользователи')

        return () => {
            setTitle('')
        }
    }, [setTitle])

    if (isLoading) {
        return <UsersPageSkeleton />
    }

    if (isError || !users) {
        return <NotFoundPage />
    }

    return (
        <Container className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Пользователи</h1>
                <p className="text-xs opacity-70">
                    Находите комануд. Работайте вместе.
                </p>
            </div>
            <UsersList users={users} title="Пользователи" />
        </Container>
    )
}
