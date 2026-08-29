import { Container, Skeleton } from '@/widgets'
import { TeamListSkeleton } from '../ui/TeamListSkeleton'

export function TeamsPageSkeleton() {
    return (
        <Container className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-1">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>

            <Skeleton className="h-10 w-full" />

            <TeamListSkeleton />
        </Container>
    )
}
