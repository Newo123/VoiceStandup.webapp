import type { IReport } from '@/features/reports'
import { teams } from './teams'
import { users } from './users'

const reportIds = [
    '30000000-0000-4000-8000-000000000001',
    '30000000-0000-4000-8000-000000000002',
    '30000000-0000-4000-8000-000000000003',
    '30000000-0000-4000-8000-000000000004',
    '30000000-0000-4000-8000-000000000005',
    '30000000-0000-4000-8000-000000000006',
    '30000000-0000-4000-8000-000000000007',
]

export const reports: IReport[] = [
    {
        id: reportIds[0],
        created_at: new Date().toISOString(),

        user: users[0],
        team: teams[0],

        source_text:
            'Сегодня закончил авторизацию и добавил экран команды. Подключил API для профиля. В планах завершить интеграцию и добавить тесты.',

        completed: [
            'Реализовал авторизацию',
            'Добавил экран команды',
            'Подключил API профиля',
        ],

        planned: ['Завершить интеграцию', 'Добавить тесты'],

        blockers: ['Нет доступа к production API'],
    },

    {
        id: reportIds[1],
        created_at: new Date(Date.now() - 86400000).toISOString(),

        user: users[1],
        team: teams[0],

        source_text:
            'Сегодня добавил список пользователей и переход на профиль. Настроил загрузку данных через React Query. В планах добавить skeleton loading и обработку ошибок.',

        completed: [
            'Добавил список пользователей',
            'Добавил переход на профиль',
            'Настроил загрузку данных через React Query',
        ],

        planned: ['Добавить skeleton loading', 'Обработать ошибки загрузки'],

        blockers: [],
    },

    {
        id: reportIds[2],
        created_at: new Date(Date.now() - 2 * 86400000).toISOString(),

        user: users[14],
        team: teams[1],

        source_text:
            'Сегодня закончил интеграцию backend API и добавил обработку ошибок. В планах покрыть основные сценарии тестами.',

        completed: [
            'Закончил интеграцию backend API',
            'Добавил обработку ошибок',
        ],

        planned: ['Добавить тесты', 'Проверить edge cases'],

        blockers: [],
    },

    {
        id: reportIds[3],
        created_at: new Date(Date.now() - 3 * 86400000).toISOString(),

        user: users[30],
        team: teams[2],

        source_text:
            'Сегодня подготовил тестовые сценарии для авторизации и проверил основные пользовательские потоки. Нашёл несколько проблем, которые нужно исправить.',

        completed: [
            'Подготовил тестовые сценарии',
            'Проверил пользовательские потоки',
            'Нашёл несколько проблем',
        ],

        planned: ['Проверить исправления', 'Добавить regression тесты'],

        blockers: ['Часть тестового окружения недоступна'],
    },

    {
        id: reportIds[4],
        created_at: new Date(Date.now() - 4 * 86400000).toISOString(),

        user: users[50],
        team: teams[3],

        source_text:
            'Сегодня обновил roadmap и синхронизировал задачи команды. В планах подготовить задачи на следующий спринт.',

        completed: ['Обновил roadmap', 'Синхронизировал задачи команды'],

        planned: [
            'Подготовить задачи на следующий спринт',
            'Провести планирование',
        ],

        blockers: [],
    },

    {
        id: reportIds[5],
        created_at: new Date(Date.now() - 5 * 86400000).toISOString(),

        user: users[70],
        team: teams[4],

        source_text:
            'Сегодня закончил макеты нового экрана и подготовил варианты для мобильной версии. Нужно согласовать финальный вариант с командой.',

        completed: [
            'Закончил макеты нового экрана',
            'Подготовил мобильную версию',
        ],

        planned: [
            'Согласовать финальный вариант',
            'Подготовить UI спецификацию',
        ],

        blockers: ['Жду финальные требования от продукта'],
    },

    {
        id: reportIds[6],
        created_at: new Date(Date.now() - 6 * 86400000).toISOString(),

        user: users[90],
        team: teams[5],

        source_text:
            'Сегодня настроил CI и автоматический запуск тестов. В планах добавить deployment в staging и мониторинг.',

        completed: ['Настроил CI', 'Добавил автоматический запуск тестов'],

        planned: ['Настроить deployment в staging', 'Добавить мониторинг'],

        blockers: [],
    },
]
