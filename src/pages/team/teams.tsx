import { useTelegram } from '../../hooks/telegram'

export function TeamsPage() {
    const { user } = useTelegram()
    return (
        <div>
            <img
                src={user?.photo_url}
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
            />
        </div>
    )
}
