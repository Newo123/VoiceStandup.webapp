import { Skeleton } from '@/widgets'

export function TeamFormSkeleton() {
    return (
        <form className="py-8 flex flex-col gap-5">
            <div className="flex flex-col w-full gap-2">
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-10" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-10" />
            </div>
            <Skeleton className="w-full h-10  mt-4" />
        </form>
    )
}
