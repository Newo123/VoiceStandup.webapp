import { Container, ProgressCardSkeleton, Skeleton } from '@/widgets'
import { AchievementsSkeleton } from '@/widgets/common/AchievementsSkeleton'
import { StatisticsSkeleton } from '@/widgets/common/StatisticsSkeleton'

export function UsersProfilePageSkeleton() {
    return (
        <Container className="flex flex-col flex-1 mb-5 gap-11">
            <div className="flex flex-col items-center">
                <Skeleton className="w-[100px] h-[100px] rounded-full" />
                <Skeleton className="w-full h-[28px] mt-4" />
                <Skeleton className="w-full h-4 mt-1" />
            </div>
            <ProgressCardSkeleton />
            <StatisticsSkeleton />
            <AchievementsSkeleton />
        </Container>
    )
}
