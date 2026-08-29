import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    ListWrapper,
} from '@/widgets'
import { ChevronRight, Users } from 'lucide-react'
import { Link } from 'react-router'
import type { ITeam } from '../types'

interface IProps {
    teams: ITeam[]
}

export function TeamList({ teams }: IProps) {
    return (
        <ListWrapper title="Команды" description={teams.length.toString()}>
            <div className="flex flex-col gap-3 w-full">
                {teams?.map((team) => {
                    const sliceNum = 5
                    const users = team.users
                    const visibleMembers = users.slice(0, sliceNum)
                    const remainingCount = users.length - sliceNum
                    return (
                        <Link to={`/teams/${team.id}`}>
                            <Card>
                                <CardHeader>
                                    <Avatar className="w-10 h-10 mb-4">
                                        <AvatarFallback>
                                            <Users />
                                        </AvatarFallback>
                                    </Avatar>
                                    <CardTitle>{team.name}</CardTitle>
                                    <CardDescription>
                                        {users.length} участников
                                    </CardDescription>
                                    <CardAction>
                                        <ChevronRight
                                            size={18}
                                            className="text-muted-foreground"
                                        />
                                    </CardAction>
                                </CardHeader>
                                <CardFooter className="flex items-center justify-between">
                                    <AvatarGroup>
                                        {visibleMembers.map((member, index) => (
                                            <Avatar key={index}>
                                                <AvatarImage
                                                    src={member.photo_url}
                                                />
                                                <AvatarFallback>
                                                    {member.first_name.at(0)}
                                                    {member.last_name?.at(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                        ))}
                                        {remainingCount > 0 && (
                                            <AvatarGroupCount>
                                                +{remainingCount}
                                            </AvatarGroupCount>
                                        )}
                                    </AvatarGroup>
                                    <p className="text-base font-medium opacity-70">
                                        {users.length === 1
                                            ? 'Участник'
                                            : 'Участника'}
                                    </p>
                                </CardFooter>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </ListWrapper>
    )
}
