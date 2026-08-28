import { useHeader } from '@/app/providers'
import { useEffect } from 'react'

export function ProfilePage() {
    const { setTitle } = useHeader()

    useEffect(() => {
        setTitle('Мой профиль')

        return () => {
            setTitle('')
        }
    }, [setTitle])
    return <div>ProfilePage</div>
}
