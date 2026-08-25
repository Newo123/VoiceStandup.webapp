// Пути для использования в коде
export const ROUTES = {
    HOME: '/',
    TEAMS: '/teams',
    TEAMS_NEW: '/teams/new',
    TEAM: (teamId: string | number) => `/teams/${teamId}`,
    PROFILE: '/profile',
    REPORTS: '/reports',
} as const
