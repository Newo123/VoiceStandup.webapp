import type { IUser } from '@/features/users'

const firstNames = [
    'Алексей',
    'Иван',
    'Дмитрий',
    'Максим',
    'Артём',
    'Михаил',
    'Андрей',
    'Никита',
    'Кирилл',
    'Роман',
    'Егор',
    'Денис',
    'Антон',
    'Сергей',
    'Владислав',
    'Илья',
    'Павел',
    'Александр',
    'Николай',
    'Виктор',
    'Мария',
    'Анна',
    'Екатерина',
    'Анастасия',
    'Дарья',
    'Полина',
    'София',
    'Елизавета',
    'Виктория',
    'Ксения',
]

const lastNames = [
    'Алексеев',
    'Иванов',
    'Петров',
    'Сидоров',
    'Смирнов',
    'Кузнецов',
    'Попов',
    'Васильев',
    'Соколов',
    'Михайлов',
    'Новиков',
    'Фёдоров',
    'Морозов',
    'Волков',
    'Александров',
    'Лебедев',
    'Козлов',
    'Семёнов',
    'Егоров',
    'Павлов',
    'Крылов',
    'Орлов',
    'Макаров',
    'Захаров',
    'Виноградов',
    'Белов',
    'Комаров',
    'Киселёв',
    'Исаев',
    'Тарасов',
]

const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'QA Engineer',
    'UI/UX Designer',
    'Product Manager',
    'Project Manager',
    'DevOps Engineer',
    'Data Analyst',
    'Business Analyst',
]

const userIds = Array.from(
    { length: 100 },
    (_, index) =>
        `10000000-0000-4000-8000-${(index + 1).toString().padStart(12, '0')}`,
)

export const users: IUser[] = userIds.map((id, index) => {
    const telegramUserId = index + 1

    const firstName = firstNames[index % firstNames.length]
    const lastName = lastNames[(index * 7) % lastNames.length]

    return {
        id,
        telegram_user_id: telegramUserId,
        photo_url: `https://api.dicebear.com/9.x/avataaars/svg?seed=user-${telegramUserId}`,
        first_name: firstName,
        last_name: lastName,
        role: roles[index % roles.length],
        username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${telegramUserId}`,
    }
})

export const getUserById = (id: string) => users.find((user) => user.id === id)
