import { Avatar, AvatarFallback, AvatarImage, Badge } from '@/shared'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import type { IMember } from '../types'

interface IProps {
    members: IMember[]
}

export function TeamDetailMembers({ members }: IProps) {
    return (
        <div className="flex flex-col gap-4 mt-10 w-full">
            <div className="flex items-center justify-between">
                <h6 className="font-semibold">Участники</h6>
                <p className="text-sm text-muted-foreground">
                    {members.length}
                </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
                {members.map((member) => (
                    // Нужно сделать ссылку на профиль если это текущий пользователь
                    <Link
                        to={`/users/${member.id}`}
                        key={member.id}
                        className="flex items-center justify-between py-2 border-b border-foreground/10"
                    >
                        <div className="flex items-center gap-3">
                            <Avatar size="lg">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback>
                                    {member.first_name.at(0)}
                                    {member.last_name?.at(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h6 className="font-semibold text-sm">
                                    {member.first_name} {member.last_name}
                                </h6>
                                <p className="text-xs text-muted-foreground">
                                    {member.username} · {member.role}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {member.is_owner && <Badge>OWNER</Badge>}
                            <ChevronRight
                                size={16}
                                className="text-muted-foreground"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
