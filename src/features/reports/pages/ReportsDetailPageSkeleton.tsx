import { Container, Skeleton } from '@/widgets'

export function ReportsDetailPageSkeleton() {
    return (
        <Container className="flex flex-col gap-8 flex-1 mb-5">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="w-full h-5" />
                </div>
                <Skeleton className="w-full h-8" />
            </div>
            <Skeleton className="w-full h-[268px]" />
            <Skeleton className="w-full h-[72px]" />
        </Container>
    )
}
