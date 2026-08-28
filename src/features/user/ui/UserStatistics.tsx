import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    ListWrapper,
} from '@/shared'

export function UserStatistics() {
    return (
        <ListWrapper title="Статистика">
            <div className="flex items-center gap-2">
                <Card size="sm" className="w-full">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="!text-xl font-semibold text-center">
                            37
                        </CardTitle>
                        <CardDescription className="text-[10px] font-medium text-center">
                            отчетов
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card size="sm" className="w-full">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="!text-xl font-semibold text-center">
                            12
                        </CardTitle>
                        <CardDescription className="text-[10px] font-medium text-center">
                            дней активности
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card size="sm" className="w-full">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="!text-xl font-semibold text-center">
                            4
                        </CardTitle>
                        <CardDescription className="text-[10px] font-medium text-center">
                            команды
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </ListWrapper>
    )
}
