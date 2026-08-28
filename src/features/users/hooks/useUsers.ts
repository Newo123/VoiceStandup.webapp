import { useQuery } from '@tanstack/react-query'
import { UsersAPI } from '../api/users.api'
import { userKeys } from './keys'

export function useUsers() {
    return useQuery({
        queryKey: userKeys.list(),
        queryFn: UsersAPI.GetUsers,
    })
}
