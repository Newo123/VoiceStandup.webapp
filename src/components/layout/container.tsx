import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren<unknown> {
    className?: string
}

export function Container({ className, children }: IProps) {
    return (
        <div className={cn('px-[16px] max-w-[720px] w-full', className)}>
            {children}
        </div>
    )
}
