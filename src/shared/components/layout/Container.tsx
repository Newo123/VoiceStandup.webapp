import { cn } from '@/shared/lib'
import type { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren<unknown> {
    className?: string
}

export function Container({ className, children }: IProps) {
    return (
        <div className={cn('px-4 max-w-xl w-full', className)}>{children}</div>
    )
}
