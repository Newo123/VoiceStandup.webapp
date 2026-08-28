import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    ListWrapper,
} from '@/shared'
import { Mic, Sparkles, Trophy, Zap } from 'lucide-react'

export function UserAchievements() {
    return (
        <ListWrapper title="Достижения">
            <div className="flex flex-col gap-2">
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Mic />
                            <CardTitle className="text-sm font-bold">
                                Первый отчет
                            </CardTitle>
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Trophy />
                            <CardTitle className="text-sm font-bold">
                                10 отчетов
                            </CardTitle>
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Zap />
                            <CardTitle className="text-sm font-bold">
                                7 дней подряд
                            </CardTitle>
                        </div>
                    </CardHeader>
                </Card>
                <Card className="opacity-50">
                    <CardHeader className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Sparkles />
                            <CardTitle className="text-sm font-bold">
                                Level 5
                            </CardTitle>
                        </div>
                        <div>
                            <CardDescription className="text-xs">
                                скоро
                            </CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </ListWrapper>
    )
}
