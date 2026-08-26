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
} from '@/shared'
import { ChevronRight, Users } from 'lucide-react'
import { Link } from 'react-router'

interface IProps {
    id: number
    name: string
    members: {
        avatar: string
        name: string
        is_owner?: boolean
    }[]
}

export function TeamCard({ id, members, name }: IProps) {
    return (
        <Card>
            <TeamCardHeader
                id={id}
                members_length={members.length}
                name={name}
            />
            <TeamCardFooter members={members} />
        </Card>
    )
}

function TeamCardHeader({
    members_length,
    name,
    id,
}: {
    id: number
    members_length: number
    name: string
}) {
    return (
        <CardHeader>
            <Avatar className="w-10 h-10 mb-4">
                <AvatarFallback>
                    <Users />
                </AvatarFallback>
            </Avatar>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{members_length} участников</CardDescription>
            <CardAction>
                <Link to={`/teams/${id}`}>
                    <ChevronRight />
                </Link>
            </CardAction>
        </CardHeader>
    )
}

function TeamCardFooter({ members }: { members: IProps['members'] }) {
    const sliceNum = 5
    const visibleMembers = members.slice(0, sliceNum)
    const remainingCount = members.length - sliceNum
    return (
        <CardFooter className="flex items-center justify-between">
            <AvatarGroup>
                {visibleMembers.map((member, index) => (
                    <Avatar key={index}>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                ))}
                {remainingCount > 0 && (
                    <AvatarGroupCount>+{remainingCount}</AvatarGroupCount>
                )}
            </AvatarGroup>
            <p className="text-base font-medium opacity-70">
                {members.length === 1 ? 'Участник' : 'Участника'}
            </p>
        </CardFooter>
    )
}
