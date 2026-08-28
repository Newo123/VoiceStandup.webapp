import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TeamsAPI } from '../api/teams.api'
import type { ITeam } from '../types'
import { teamKeys } from './keys'

export function useDeleteTeam() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: TeamsAPI.DeleteTeam,
        onMutate: async (id: number) => {
            await queryClient.cancelQueries({ queryKey: teamKeys.list() })

            const previousTeams = queryClient.getQueryData<ITeam[]>(
                teamKeys.list(),
            )

            queryClient.setQueryData<ITeam[]>(teamKeys.list(), (old) => {
                return old?.filter((team) => team.id !== id) || []
            })

            queryClient.removeQueries({ queryKey: teamKeys.detail(id) })

            return { previousTeams }
        },
        onSuccess: (_, id) => {
            queryClient.invalidateQueries({
                queryKey: teamKeys.list(),
                refetchType: 'none',
            })
        },
        onError: (error, id, context) => {
            if (context?.previousTeams) {
                queryClient.setQueryData(teamKeys.list(), context.previousTeams)
            }
        },
    })
}
