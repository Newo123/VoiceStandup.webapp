import { Badge } from './badge'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card'
import { Progress } from './progress'

export function ProgressCard() {
    const maxXP = 2000
    const currentXP = 1850
    const currentLVL = 4
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Badge>LVL {currentLVL}</Badge>
                    <CardTitle className="text-md font-bold">
                        {currentXP.toLocaleString('ru-RU')} XP
                    </CardTitle>
                </div>
                <CardDescription className="text-xs">
                    {(maxXP - currentXP).toLocaleString('ru-RU')} XP до Level{' '}
                    {currentLVL + 1}
                </CardDescription>
            </CardHeader>
            <div className="w-full">
                <Progress
                    value={currentXP}
                    max={maxXP}
                    className="mx-auto w-full max-w-xs"
                />
            </div>
            <CardFooter className="flex items-center justify-between">
                <CardDescription className="text-xs">
                    Level {currentLVL}
                </CardDescription>
                <CardDescription className="text-xs">
                    Level {currentLVL + 1}
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
