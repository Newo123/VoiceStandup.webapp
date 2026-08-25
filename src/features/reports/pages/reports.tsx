import { useHeader } from '@/app/providers/HeaderProvider'
import { useEffect } from 'react'

export default function ReportsPage() {
    const { setTitle, setShowBackButton } = useHeader()

    useEffect(() => {
        setTitle('Статистика')
        setShowBackButton(false)
    }, [])
    return <div>ReportsPage</div>
}
