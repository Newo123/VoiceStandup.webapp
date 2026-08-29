// src/features/users/hooks/usePatchMe.ts
import { useTelegram } from '@/app/providers/TelegramProvider'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UsersAPI } from '../api/users.api'
import type { IUser } from '../types'
import { userKeys } from './keys'

export function usePatchMe() {
    const queryClient = useQueryClient()
    const { hapticImpact } = useTelegram()

    return useMutation({
        mutationFn: UsersAPI.PatchMe,

        onSuccess: (updatedUser) => {
            queryClient.setQueryData<IUser>(userKeys.me(), updatedUser)

            queryClient.setQueryData<IUser[]>(userKeys.list(), (old) => {
                return (
                    old?.map((user) =>
                        user.id === updatedUser.id ? updatedUser : user,
                    ) || []
                )
            })

            queryClient.setQueryData<IUser>(
                userKeys.detail(updatedUser.id),
                updatedUser,
            )

            hapticImpact('medium')
        },

        onError: () => {
            hapticImpact('heavy')
        },

        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: userKeys.me(),
                refetchType: 'none',
            })
            queryClient.invalidateQueries({
                queryKey: userKeys.list(),
                refetchType: 'none',
            })
        },
    })
}
