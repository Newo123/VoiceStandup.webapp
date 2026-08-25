import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'default' | 'lg'
}

const sizeMap = {
    sm: 'h-4 w-4',
    default: 'h-8 w-8',
    lg: 'h-12 w-12',
}

export function Loader({ size = 'default', className, ...props }: LoaderProps) {
    return (
        <div
            className={cn('flex items-center justify-center', className)}
            {...props}
        >
            <Loader2
                className={cn('animate-spin text-primary', sizeMap[size])}
            />
        </div>
    )
}
