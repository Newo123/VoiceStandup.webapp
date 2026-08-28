import { useTeams } from '../hooks'
import { TeamCard } from './TeamCard'

export function TeamList() {
    const { data: teams, isLoading } = useTeams()

    // if (isLoading) return <TeamListSkeleton />
    // Сделать отрисовку скелетона
    if (isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className="flex-1 min-h-full py-8 flex flex-col gap-5">
            {teams?.map((team) => (
                <TeamCard {...team} key={team.id} />
            ))}
        </div>
    )
}
