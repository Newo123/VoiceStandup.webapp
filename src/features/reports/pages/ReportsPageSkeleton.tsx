import { Container, Skeleton } from '@/widgets'
import { ReportsListSkeleton } from '../ui/ReportsListSkeleton'

export function ReportsPageSkeleton() {
    return (
        <Container className="flex flex-col gap-8 flex-1 mb-5">
            <div className="flex flex-col gap-1">
                <Skeleton className="mb-2 w-full h-4" />
                <Skeleton className="mb-2 w-full h-8" />
                <Skeleton className="mb-2 w-full h-4" />
            </div>
            <ReportsListSkeleton />
        </Container>
    )
}
