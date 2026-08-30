import { useQuery, useQueryClient } from '@tanstack/react-query'
import { UsersAPI } from '../api/users.api'
import type { IUser } from '../types'
import { userKeys } from './keys'

export function useUser(id: string) {
    const queryClient = useQueryClient()

    return useQuery({
        queryKey: userKeys.detail(id),
        queryFn: () => UsersAPI.GetUser(id),
        enabled: !!id,
        initialData: () => {
            const users = queryClient.getQueryData<IUser[]>(userKeys.list())
            return users?.find((user) => user.id === id)
        },
    })
}
