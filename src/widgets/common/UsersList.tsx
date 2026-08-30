import type { IUser } from '@/features/users'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { ListWrapper } from '../ui/list-wrapper'

interface IProps {
    users: IUser[]
    owner_id?: string
    title: string
}

export function UsersList({ users, owner_id, title }: IProps) {
    return (
        <ListWrapper title={title} description={users.length.toString()}>
            <div className="flex flex-col gap-1 w-full">
                {users.map((user) => (
                    // Нужно сделать ссылку на профиль если это текущий пользователь
                    <Link
                        to={`/users/${user.id}`}
                        key={user.id}
                        className="flex items-center justify-between py-2 border-b border-foreground/10"
                    >
                        <div className="flex items-center gap-3">
                            <Avatar size="lg">
                                <AvatarImage src={user.photo_url} />
                                <AvatarFallback>
                                    {user.first_name.at(0)}
                                    {user.last_name?.at(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h6 className="font-semibold text-sm">
                                    {user.first_name} {user.last_name}
                                </h6>
                                <p className="text-xs text-muted-foreground">
                                    {user.username} · {user.role}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {owner_id && owner_id === user.id && (
                                <Badge>OWNER</Badge>
                            )}
                            <ChevronRight
                                size={16}
                                className="text-muted-foreground"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </ListWrapper>
    )
}
