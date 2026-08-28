import { useQuery } from '@tanstack/react-query'
import { TeamsAPI } from '../api/teams.api'
import { teamKeys } from './keys'

export function useTeams() {
    return useQuery({
        queryKey: teamKeys.list(),
        queryFn: TeamsAPI.GetTeams,
    })
}
