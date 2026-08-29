import { Container, Skeleton } from '@/widgets'
import { TeamFormSkeleton } from '../ui/TeamFormSkeleton'

export function TeamsFormPageSkeleton() {
    return (
        <Container className="flex flex-col flex-1 mb-5">
            <div className="flex flex-col gap-1">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
            <TeamFormSkeleton />
        </Container>
    )
}
