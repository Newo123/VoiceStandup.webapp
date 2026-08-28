import type { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren<unknown> {
    title?: string
}

export function ListWrapper({ children, title }: IProps) {
    return (
        <div className="flex flex-col gap-4">
            {title && <div className="text-sm font-semibold">{title}</div>}
            {children}
        </div>
    )
}
