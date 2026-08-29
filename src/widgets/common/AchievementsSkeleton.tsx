import { Skeleton } from '../ui/skeleton'

export function AchievementsSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 w-full">
                <Skeleton className="h-5 w-full" />
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className="w-full h-[56px]" />
                ))}
            </div>
        </div>
    )
}
