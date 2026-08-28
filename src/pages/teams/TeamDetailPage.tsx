import { useHeader } from '@/app/providers'
import { TeamDetailMembers, useTeam } from '@/features/teams'
import { TeamInviteLink } from '@/features/teams/ui/TeamInviteLink'
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
} from '@/shared'
import { Edit, Users } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { NotFoundPage } from '../not-found'

export function TeamDetailPage() {
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

    return (
        <Container className="flex flex-col flex-1 mb-5">
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
                                {team?.members.length} участников ·{' Owner: '}
                                {
                                    team?.members.find((m) => m.is_owner)
                                        ?.first_name
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
            <TeamInviteLink teamName={team.name} />
            <TeamDetailMembers members={team.members} />
        </Container>
    )
}
