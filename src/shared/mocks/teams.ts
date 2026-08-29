import { users } from './users'

const getUsers = (ids: number[]) =>
    ids
        .map((id) => users.find((user) => user.id === id))
        .filter((user): user is (typeof users)[number] => Boolean(user))

export const teams = [
    {
        id: 1,
        name: 'Frontend Team',
        owner_id: 1,
        users: getUsers([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 23, 31, 35,
        ]),
    },
    {
        id: 2,
        name: 'Backend Team',
        owner_id: 15,
        users: getUsers([
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 40,
            44,
        ]),
    },
    {
        id: 3,
        name: 'QA Team',
        owner_id: 31,
        users: getUsers([
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 52,
            58,
        ]),
    },
    {
        id: 4,
        name: 'Product Team',
        owner_id: 51,
        users: getUsers([
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 70,
            74,
        ]),
    },
    {
        id: 5,
        name: 'Design Team',
        owner_id: 71,
        users: getUsers([
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90,
            94,
        ]),
    },
    {
        id: 6,
        name: 'DevOps Team',
        owner_id: 91,
        users: getUsers([
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 12, 22, 32, 42, 62, 82,
        ]),
    },
]

export const getTeamById = (id: number) => teams.find((team) => team.id === id)
