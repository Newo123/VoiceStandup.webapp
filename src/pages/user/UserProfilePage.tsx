import { useHeader, useTelegram } from '@/app/providers'
import { UserAchievements, UserStatistics } from '@/features/user/ui'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Container,
    ProgressCard,
} from '@/shared'
import { useEffect } from 'react'

export function UserProfilePage() {
    const { setTitle } = useHeader()
    const { user } = useTelegram()

    useEffect(() => {
        setTitle('Мой профиль')

        return () => {
            setTitle('')
        }
    }, [setTitle])

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

            <UserStatistics />
            <UserAchievements />
        </Container>
    )
}
