import { useHeader } from '@/app/providers/HeaderProvider'
import { useEffect } from 'react'

export default function ProfilePage() {
    const { setTitle, setShowBackButton } = useHeader()

    useEffect(() => {
        setTitle('Мой профиль')
        setShowBackButton(false)
    }, [])
    return <div>ProfilePage</div>
}
