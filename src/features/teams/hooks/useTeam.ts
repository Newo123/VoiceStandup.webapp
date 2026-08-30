import {
    useQuery,
    useQueryClient,
    type UseQueryOptions,
} from '@tanstack/react-query'
import { TeamsAPI } from '../api/teams.api'
import type { ITeam } from '../types'
import { teamKeys } from './keys'

export function useTeam(
    id: string,
    options?: Omit<
        UseQueryOptions<ITeam, Error, ITeam, readonly unknown[]>,
        'queryKey' | 'queryFn'
    >,
) {
    const queryClient = useQueryClient()

    return useQuery<ITeam, Error, ITeam, readonly unknown[]>({
        queryKey: teamKeys.detail(id),
        queryFn: async () => {
            const team = await TeamsAPI.GetTeam(id)
            if (!team) throw new Error('Team not found')
            return team
        },
        enabled: !!id && options?.enabled !== false,
        initialData: () => {
            const teams = queryClient.getQueryData<ITeam[]>(teamKeys.list())
            return teams?.find((t) => t.id === id)
        },
        ...options,
    })
}
