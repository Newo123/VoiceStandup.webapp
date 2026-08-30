import { useHeader } from '@/app/providers'
import { TeamForm, TeamsFormPageSkeleton, useTeam } from '@/features/teams'
import { Container, NotFoundPage } from '@/widgets'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import z from 'zod'

export function TeamsFormPage() {
    const { setTitle } = useHeader()
    const { id } = useParams<{ id: string }>()

    const isValidId = id
        ? z.string().uuid({ version: 'v4' }).safeParse(id).success
        : true

    if (!isValidId) {
        return <NotFoundPage />
    }

    const isEditing = !!id
    const titleText = isEditing ? 'Редактирование команды' : 'Создание команды'

    const {
        data: team,
        isLoading,
        isError,
    } = useTeam(id!, {
        enabled: isEditing,
    })

    useEffect(() => {
        setTitle(titleText)

        return () => setTitle('')
    }, [setTitle, titleText])

    if (isEditing && isLoading) {
        return <TeamsFormPageSkeleton />
    }

    if (isEditing && (isError || !team)) {
        return <NotFoundPage />
    }

    return (
        <Container className="flex flex-col flex-1 mb-5">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{titleText}</h1>

                <p className="text-xs opacity-70">
                    Добавьте нашего бота в Telegram-группу, чтобы подключить
                    команду.
                </p>
            </div>

            <TeamForm initialTeam={team} />
        </Container>
    )
}
