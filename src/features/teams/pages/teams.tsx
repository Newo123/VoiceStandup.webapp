import { useHeader } from '@/app/providers/HeaderProvider'
import { useEffect } from 'react'

export default function TeamsPage() {
    const { setTitle, setShowBackButton } = useHeader()

    useEffect(() => {
        setTitle('Мои команды')
        setShowBackButton(false)
    }, [])
    return <div>TeamsPage</div>
}
