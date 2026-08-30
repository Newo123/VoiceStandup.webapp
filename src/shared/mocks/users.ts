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

export const users = Array.from({ length: 100 }, (_, index) => {
    const id = index + 1

    const firstName = firstNames[index % firstNames.length]
    const lastName = lastNames[(index * 7) % lastNames.length]

    return {
        id: id.toString(),
        telegram_user_id: id,
        photo_url: `https://api.dicebear.com/9.x/avataaars/svg?seed=user-${id}`,
        first_name: firstName,
        last_name: lastName,
        role: roles[index % roles.length],
        username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${id}`,
    }
})

export const getUserById = (id: string) => users.find((user) => user.id === id)
