import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TeamsAPI } from '../api/teams.api'
import type { ITeam } from '../types'
import { teamKeys } from './keys'

export function useCreateTeam() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: TeamsAPI.CreateTeam,
        onSuccess: (realTeam) => {
            queryClient.setQueryData<ITeam[]>(teamKeys.list(), (old) => {
                return old ? [realTeam, ...old] : [realTeam]
            })

            queryClient.setQueryData(teamKeys.detail(realTeam.id), realTeam)
            // Сделать уведомление об успешном запросе
        },
        onError: () => {
            // Сделать уведомление об ошибке
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: teamKeys.list(),
                refetchType: 'none',
            })
        },
    })
}
