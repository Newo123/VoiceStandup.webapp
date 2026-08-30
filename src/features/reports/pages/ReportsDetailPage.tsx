import { useHeader } from '@/app/providers'
import {
    Button,
    Card,
    CardContent,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    Container,
    NotFoundPage,
} from '@/widgets'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import z from 'zod'
import { useReport } from '../hooks/useReport'
import { ReportsDetailCard } from '../ui/ReportsDetailList'
import { ReportsDetailPageSkeleton } from './ReportsDetailPageSkeleton'

const reportIdSchema = z.string().uuid({ version: 'v4' })

export function ReportsDetailPage() {
    const { setTitle } = useHeader()
    const { id } = useParams<{ id: string }>()

    const parsedId = reportIdSchema.safeParse(id)

    if (!parsedId.success) {
        return <NotFoundPage />
    }

    const reportId = parsedId.data

    const { data: report, isLoading, isError } = useReport(reportId)

    useEffect(() => {
        setTitle('Ваш отчет')

        return () => {
            setTitle('')
        }
    }, [setTitle])

    if (isLoading) return <ReportsDetailPageSkeleton />
    if (isError || !report) return <NotFoundPage />

    return (
        <Container className="flex flex-col gap-8 flex-1 mb-5">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={16} />
                    <p className="text-sm text-muted-foreground">
                        Результат подготовленны через AI
                    </p>
                </div>

                <h1 className="text-2xl font-bold">Отчет</h1>
            </div>

            <ReportsDetailCard report={report} />

            <Card>
                <CardContent>
                    <Collapsible>
                        <CollapsibleTrigger
                            render={(props) => (
                                <Button
                                    {...props}
                                    variant="ghost"
                                    className="w-full font-bold"
                                >
                                    Исходный текст{' '}
                                    <ChevronDown className="ml-auto group-data-panel-open/button:rotate-180" />
                                </Button>
                            )}
                        />

                        <CollapsibleContent className="p-2.5 pt-0 text-sm">
                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                {report.source_text}
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>
        </Container>
    )
}
