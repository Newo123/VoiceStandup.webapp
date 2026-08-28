import { useHeader } from '@/app/providers'
import { TeamForm, useTeam } from '@/features/teams'
import { Container, NotFoundPage, Spinner } from '@/widgets'
import { useEffect } from 'react'
import { useParams } from 'react-router'

export function TeamsFormPage() {
    const { setTitle } = useHeader()
    const { id } = useParams<{ id: string }>()
    const teamId = id ? Number(id) : undefined
    const isValidId = teamId !== undefined && !isNaN(teamId) && teamId > 0

    if (id && !isValidId) {
        return <NotFoundPage />
    }

    const isEditing = !!teamId
    const titleText = isEditing ? 'Редактирование команды' : 'Создание команды'

    const {
        data: team,
        isLoading,
        isError,
    } = useTeam(teamId!, {
        enabled: isEditing,
    })

    useEffect(() => {
        setTitle(titleText)
        return () => setTitle('')
    }, [setTitle, titleText])

    // if (isLoading) return <TeamFormSkeleton />
    if (isEditing && isLoading) {
        return (
            <Container className="flex flex-col flex-1 items-center justify-center">
                <Spinner />
            </Container>
        )
    }

    // Если редактирование и произошла ошибка или данных нет – 404
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
            <TeamForm teamId={teamId} initialTeam={team} />
        </Container>
    )
}
