import { Card, CardContent } from '@/widgets'
import type { IReport } from '../types'

interface IProps {
    report: IReport
}

export function ReportsDetailCard({ report }: IProps) {
    return (
        <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="flex gap-2.5 ">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1.25" />
                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-bold">Сделано:</h6>
                        <ul className="flex flex-col gap-1.5 pl-4">
                            {report.completed.map((completed) => (
                                <li
                                    className="text-xs text-muted-foreground list-disc"
                                    key={completed}
                                >
                                    {completed}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-2.5 ">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.25" />
                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-bold">В планах:</h6>
                        <ul className="flex flex-col gap-1.5 pl-4">
                            {report.planned.map((completed) => (
                                <li
                                    className="text-xs text-muted-foreground list-disc"
                                    key={completed}
                                >
                                    {completed}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-2.5 ">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-1.25" />
                    <div className="flex flex-col gap-2.5">
                        <h6 className="text-sm font-bold">Препятствия:</h6>
                        <ul className="flex flex-col gap-1.5 pl-4">
                            {report.blockers.map((completed) => (
                                <li
                                    className="text-xs text-muted-foreground list-disc"
                                    key={completed}
                                >
                                    {completed}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
