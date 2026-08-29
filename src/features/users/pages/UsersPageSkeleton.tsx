import { Container, Skeleton } from '@/widgets'
import { UsersListSkeleton } from '@/widgets/common/UsersListSkeleton'

export function UsersPageSkeleton() {
    return (
        <Container className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-1">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
            <UsersListSkeleton />
        </Container>
    )
}
