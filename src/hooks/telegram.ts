import { useContext } from 'react';
import { TelegramContext } from '../context/telegram';

export function useTelegram() {
    const context = useContext(TelegramContext);

    if (!context) {
        throw new Error('useTelegram must be used inside TelegramProvider');
    }

    return context;
}
