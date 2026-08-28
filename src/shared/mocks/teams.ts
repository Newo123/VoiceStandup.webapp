import { users as usersMock } from './users'

export const teams = [
    {
        id: 1,
        name: 'Frontend Team',
        owner_id: 1,
    },
    {
        id: 2,
        name: 'Backend Team',
        owner_id: 15,
    },
    {
        id: 3,
        name: 'QA Team',
        owner_id: 31,
    },
    {
        id: 4,
        name: 'Product Team',
        owner_id: 51,
    },
    {
        id: 5,
        name: 'Design Team',
        owner_id: 71,
    },
    {
        id: 6,
        name: 'DevOps Team',
        owner_id: 91,
    },
]

export const getTeamWithUsers = (teamId: number) => {
    const team = teams.find((team) => team.id === teamId)

    if (!team) {
        return null
    }

    const users = usersMock
        .filter((user) => user.teams.includes(teamId))
        .map((user) => ({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            photo_url: user.photo_url,
            role: user.role,
            is_owner: user.id === team.owner_id,
        }))

    return {
        ...team,
        users,
    }
}

export const getAllTeamsWithUsers = () => {
    return teams.map((team) => getTeamWithUsers(team.id)!)
}
