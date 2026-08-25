import { useHeader } from '@/app/providers/HeaderProvider'
import { useEffect } from 'react'

export default function NewTeamPage() {
    const { setTitle, setShowBackButton } = useHeader()

    useEffect(() => {
        setTitle('Создание команды')
        setShowBackButton(false)
    }, [])
    return <div>NewTeamPage</div>
}
