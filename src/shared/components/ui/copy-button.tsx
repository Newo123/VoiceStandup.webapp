import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { Button } from './button'
import { Input } from './input'

interface IProps {
    value: string
}

export function CopyButton({ value }: IProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    return (
        <div className="relative mt-2">
            <Input readOnly value={value} className="h-12  pr-12 text-sm " />
            <Button
                size="icon"
                variant="ghost"
                onClick={handleCopy}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10"
            >
                {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                    <Copy className="h-4 w-4" />
                )}
            </Button>
        </div>
    )
}
