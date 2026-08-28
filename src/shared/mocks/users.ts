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

/**
 * Для каждой команды заранее определяем owner.
 * Owner гарантированно будет состоять в своей команде.
 */
const ownerTeams: Record<number, number> = {
    1: 1,
    15: 2,
    31: 3,
    51: 4,
    71: 5,
    91: 6,
}

/**
 * Распределение обычных пользователей по командам.
 * Некоторые пользователи состоят сразу в нескольких командах.
 */
const teamCombinations = [
    [1],
    [1],
    [1],
    [1, 2],
    [2],
    [2],
    [2],
    [1, 2],
    [3],
    [3],
    [3, 1],
    [4],
    [4],
    [4, 1],
    [5],
    [5],
    [5, 1],
    [6],
    [6],
    [6, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [1, 5],
    [2, 6],
]

export const users = Array.from({ length: 100 }, (_, index) => {
    const id = index + 1

    const firstName = firstNames[index % firstNames.length]
    const lastName = lastNames[(index * 7) % lastNames.length]

    const ownerTeam = ownerTeams[id]

    const teams = ownerTeam
        ? [ownerTeam]
        : teamCombinations[index % teamCombinations.length]

    return {
        id,
        photo_url: `https://api.dicebear.com/9.x/avataaars/svg?seed=user-${id}`,
        first_name: firstName,
        last_name: lastName,
        role: ownerTeam ? 'Team Lead' : roles[index % roles.length],
        username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${id}`,
        teams,
    }
})

export const getUserById = (id: number) => users.find((user) => user.id === id)

export const getUsersByIds = (ids: number[]) =>
    users.filter((user) => ids.includes(user.id))
