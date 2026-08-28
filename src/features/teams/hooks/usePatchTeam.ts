import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TeamsAPI } from '../api/teams.api'
import type { ITeam, PatchTeamRequest } from '../types'
import { teamKeys } from './keys'

export function usePatchTeam() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, ...dto }: { id: number } & PatchTeamRequest) =>
            TeamsAPI.PatchTeam(id, dto),
        onSuccess: (updatedTeam) => {
            queryClient.setQueryData<ITeam[]>(teamKeys.list(), (old) => {
                return (
                    old?.map((team) =>
                        team.id === updatedTeam.id ? updatedTeam : team,
                    ) || []
                )
            })

            queryClient.setQueryData(
                teamKeys.detail(updatedTeam.id),
                updatedTeam,
            )
        },
        onError: () => {},
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: teamKeys.list(),
                refetchType: 'none',
            })
        },
    })
}
