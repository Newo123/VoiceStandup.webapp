import { useHeader } from '@/app/providers'
import {
    Avatar,
    AvatarFallback,
    Button,
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
    Container,
    NotFoundPage,
    UsersList,
} from '@/widgets'
import { Edit, Users } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { useTeam } from '../hooks'
import { TeamInviteLink } from '../ui'

export function TeamsDetailPage() {
    const { setTitle } = useHeader()
    const { id } = useParams()
    const teamId = Number(id)
    const isValidId = !isNaN(teamId) && teamId > 0

    if (!isValidId) {
        return <NotFoundPage />
    }

    const { data: team, isLoading, isError } = useTeam(teamId)

    useEffect(() => {
        if (isLoading) {
            setTitle('Загрузка...')
        } else if (team) {
            setTitle(team.name)
        }
        return () => setTitle('')
    }, [team, isLoading, isError, setTitle])

    // if (isLoading) return <TeamDetailSkeleton />
    if (isError || !team) return <NotFoundPage />

    console.log(team.users[0])

    return (
        <Container className="flex flex-col gap-8 flex-1 mb-5">
            <Card size="sm">
                <CardHeader>
                    <div className="flex flex-row gap-3 items-center">
                        <Avatar className="w-10 h-10">
                            <AvatarFallback>
                                <Users size={18} />
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>{team?.name}</CardTitle>
                            <CardDescription className="text-xs">
                                {team?.users.length} участников ·{' Owner: '}
                                {
                                    team.users.find(
                                        (user) => user.id === team.owner_id,
                                    )?.first_name
                                }
                            </CardDescription>
                        </div>
                    </div>
                    <CardAction>
                        <Button
                            size="icon"
                            variant="ghost"
                            nativeButton={false}
                            render={(props) => (
                                <Link
                                    {...props}
                                    to={`/teams/${team.id}/edit`}
                                />
                            )}
                        >
                            <Edit className="text-muted-foreground" />
                        </Button>
                    </CardAction>
                </CardHeader>
            </Card>
            <TeamInviteLink teamName={team.name} teamId={team.id} />
            <UsersList
                users={team.users}
                owner_id={team.owner_id}
                title="Участники"
            />
        </Container>
    )
}
