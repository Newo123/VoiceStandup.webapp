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
} from '@/widgets'
import { ChevronRight, Users } from 'lucide-react'
import { Link } from 'react-router'
import type { ITeam } from '../types'

export function TeamCard(team: ITeam) {
    return (
        <Link to={`/teams/${team.id}`}>
            <Card>
                <TeamCardHeader {...team} />
                <TeamCardFooter users={team.users} />
            </Card>
        </Link>
    )
}

function TeamCardHeader({ users, name }: ITeam) {
    return (
        <CardHeader>
            <Avatar className="w-10 h-10 mb-4">
                <AvatarFallback>
                    <Users />
                </AvatarFallback>
            </Avatar>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{users.length} участников</CardDescription>
            <CardAction>
                <ChevronRight size={18} className="text-muted-foreground" />
            </CardAction>
        </CardHeader>
    )
}

function TeamCardFooter({ users }: { users: ITeam['users'] }) {
    const sliceNum = 5
    const visibleMembers = users.slice(0, sliceNum)
    const remainingCount = users.length - sliceNum
    return (
        <CardFooter className="flex items-center justify-between">
            <AvatarGroup>
                {visibleMembers.map((member, index) => (
                    <Avatar key={index}>
                        <AvatarImage src={member.photo_url} />
                        <AvatarFallback>
                            {member.first_name.at(0)}
                            {member.last_name?.at(0)}
                        </AvatarFallback>
                    </Avatar>
                ))}
                {remainingCount > 0 && (
                    <AvatarGroupCount>+{remainingCount}</AvatarGroupCount>
                )}
            </AvatarGroup>
            <p className="text-base font-medium opacity-70">
                {users.length === 1 ? 'Участник' : 'Участника'}
            </p>
        </CardFooter>
    )
}
