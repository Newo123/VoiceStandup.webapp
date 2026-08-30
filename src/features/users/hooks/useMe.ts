import { useTelegram } from '@/app/providers'
import { useQuery } from '@tanstack/react-query'
import { UsersAPI } from '../api/users.api'
import { userKeys } from './keys'

export function useMe() {
    const { user: telegramUser } = useTelegram()

    return useQuery({
        queryKey: userKeys.me(),
        queryFn: UsersAPI.GetMe,
        initialData: telegramUser
            ? {
                  id: '',
                  telegram_user_id: telegramUser.id,
                  first_name: telegramUser.first_name,
                  last_name: telegramUser.last_name ?? '',
                  username: telegramUser.username ?? '',
                  photo_url: telegramUser.photo_url ?? '',
                  role: '',
              }
            : undefined,
    })
}
