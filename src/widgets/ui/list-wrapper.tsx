import type { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren<unknown> {
    title?: string
    description?: string
}

export function ListWrapper({ children, title, description }: IProps) {
    return (
        <div className="flex flex-col gap-4">
            {(title || description) && (
                <div className="flex items-center justify-between gap-4 w-full">
                    {title && (
                        <div className="text-sm font-semibold">{title}</div>
                    )}
                    {description && (
                        <p className="text-xs text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>
            )}
            {children}
        </div>
    )
}
