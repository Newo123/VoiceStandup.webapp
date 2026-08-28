import { Skeleton } from '../ui/skeleton'

export function UsersListSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 w-full">
                <Skeleton className="h-5 w-full" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Skeleton key={i} className="h-14 w-full" />
                ))}
            </div>
        </div>
    )
}
