import { Container, Skeleton } from '@/widgets'
import { UsersListSkeleton } from '@/widgets/common/UsersListSkeleton'

export function TeamsDetailPageSkeleton() {
    return (
        <Container className="flex flex-col gap-8 flex-1 mb-5">
            <Skeleton className="w-full h-[68px]" />
            <Skeleton className="w-full h-10" />
            <UsersListSkeleton />
        </Container>
    )
}
