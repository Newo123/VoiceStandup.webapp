import {
    Badge,
    Button,
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
    ListWrapper,
} from '@/widgets'
import { CheckCheck } from 'lucide-react'
import { Link } from 'react-router'
import type { IReport } from '../types'

interface IProps {
    reports: IReport[]
}

export function ReportsList({ reports }: IProps) {
    return (
        <ListWrapper title="Отчеты" description={reports.length.toString()}>
            <div className="flex flex-col gap-3 w-full">
                {reports.map((report) => (
                    <Link to={`/reports/${report.id}`} key={report.id}>
                        <Card>
                            <CardHeader className="flex gap-3">
                                <Button
                                    size="icon"
                                    className="bg-green-200 rounded-full disabled:opacity-100 shrink-0"
                                    disabled
                                >
                                    <CheckCheck className="text-green-700" />
                                </Button>
                                <div>
                                    <CardTitle>{report.team.name}</CardTitle>
                                    <CardDescription>
                                        {report.completed[0]
                                            .slice(0, 20)
                                            .trim()}
                                        ...
                                    </CardDescription>
                                    <CardDescription className="text-xs mt-2">
                                        Сегодня · 10:42
                                    </CardDescription>
                                </div>
                                <CardAction className="shrink-0 ml-auto">
                                    <Badge>+50 XP</Badge>
                                </CardAction>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </ListWrapper>
    )
}
