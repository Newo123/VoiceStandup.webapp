import { useHeader } from '@/app/providers'
import { Container, NotFoundPage } from '@/widgets'
import { useEffect } from 'react'
import { useReports } from '../hooks/useReports'
import { ReportsList } from '../ui'
import { ReportsPageSkeleton } from './ReportsPageSkeleton'

export function ReportsPage() {
    const { setTitle } = useHeader()
    const { data: reports, isLoading, isError } = useReports()

    useEffect(() => {
        setTitle('Мои отчеты')

        return () => {
            setTitle('')
        }
    }, [setTitle])

    if (isLoading) return <ReportsPageSkeleton />
    if (isError || !reports) return <NotFoundPage />

    return (
        <Container className="flex flex-col gap-8 flex-1 mb-5">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[.15em] uppercase mb-2">
                    история
                </span>
                <h1 className="text-2xl font-bold">Ваши отчеты</h1>
                <p className="text-xs opacity-70">
                    Все отправленные обновления в одном месте.
                </p>
            </div>
            <ReportsList reports={reports} />
        </Container>
    )
}
