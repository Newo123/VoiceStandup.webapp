import { useHeader } from '@/app/providers/HeaderProvider'
import { useEffect } from 'react'

export default function TeamPage() {
    const { setTitle, setShowBackButton } = useHeader()

    useEffect(() => {
        setTitle('Команда')
        setShowBackButton(true)
    }, [])
    return <div>TeamPages</div>
}
