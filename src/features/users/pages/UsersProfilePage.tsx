import { useHeader, useTelegram } from '@/app/providers'

import {
    Achievements,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Container,
    NotFoundPage,
    ProgressCard,
    Statistics,
} from '@/widgets'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useMe } from '../hooks'
import { useUser } from '../hooks/useUser'
import { UsersProfilePageSkeleton } from './UsersProfilePageSkeleton'

export function UsersProfilePage() {
    const { setTitle } = useHeader()
    const { user: currentTelegramUser } = useTelegram()
    const { id } = useParams<{ id: string }>()
    const userId = id ? Number(id) : undefined
    const isValidId = userId !== undefined && !isNaN(userId) && userId > 0

    if (id && !isValidId) {
        return <NotFoundPage />
    }
    const isMe =
        !id || (currentTelegramUser && userId === currentTelegramUser.id)
    const meQuery = useMe()
    const userQuery = useUser(userId!)
    const query = isMe ? meQuery : userQuery
    const { data: user, isLoading, isError } = query

    const titleText = isMe
        ? 'Мой профиль'
        : user?.first_name
          ? `${user.first_name} ${user.last_name || ''}`
          : 'Профиль пользователя'

    useEffect(() => {
        setTitle(titleText)
        return () => {
            setTitle('')
        }
    }, [setTitle, isLoading])

    if (isLoading) return <UsersProfilePageSkeleton />
    if (isError || !user) return <NotFoundPage />

    return (
        <Container className="flex flex-col flex-1 mb-5 gap-11">
            <div className="flex flex-col items-center">
                <Avatar className="w-25 h-25">
                    <AvatarImage src={user?.photo_url} alt={user?.first_name} />
                    <AvatarFallback className="text-4xl">
                        {user?.first_name.at(0)}
                        {user?.last_name?.at(0)}
                    </AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold mt-4">
                    {user?.first_name} {user?.last_name}
                </h1>
                <p className="text-sm text-muted-foreground">
                    Frontend Developer · @{user?.username}
                </p>
            </div>
            <ProgressCard />

            <Statistics />
            <Achievements />
        </Container>
    )
}
