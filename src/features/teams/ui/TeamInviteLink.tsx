import {
    Button,
    CopyButton,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/shared'

import { Plus } from 'lucide-react'

interface IProps {
    teamName: string
}

export function TeamInviteLink({ teamName }: IProps) {
    return (
        <Drawer>
            <DrawerTrigger
                render={
                    <Button className="mt-8">
                        <Plus />
                        Пригласить участника
                    </Button>
                }
            />
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-left font-bold text-xl">
                        Пригласить участника
                    </DrawerTitle>
                    <DrawerDescription className="text-left">
                        {teamName}
                    </DrawerDescription>
                    <DrawerDescription className="mt-4 text-left text-xs">
                        Отправьте эту ссылку участнику. Он перейдет в
                        Telegram-бота и автоматически будет добавлен в команду.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 scroll-fade overflow-y-auto p-4">
                    <CopyButton value="asdasd" />
                </div>
                <DrawerFooter>
                    <DrawerClose
                        render={<Button variant="secondary">Cancel</Button>}
                    />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
