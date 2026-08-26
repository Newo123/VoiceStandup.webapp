import { useQuery } from '@tanstack/react-query'
import { teamsApi } from '../api/teams.api'

export const teamKeys = {
    all: ['teams'] as const,
    list: () => [...teamKeys.all, 'list'] as const,
    detail: (id: number) => [...teamKeys.all, 'detail', id] as const,
}

export function useTeams() {
    return useQuery({
        queryKey: teamKeys.list(),
        queryFn: teamsApi.getTeams,
    })
}
