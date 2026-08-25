import { Loader } from '@/components/ui/loader'
import { ROUTES } from '@/config/routes'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, type RouteObject } from 'react-router'
import { Layout } from '../components/layout/layout'

// Lazy loading
const TeamsPage = lazy(() => import('@/features/teams/pages/teams'))
const NewTeamPage = lazy(() => import('@/features/teams/pages/new'))
const TeamPage = lazy(() => import('@/features/teams/pages/team'))
const ProfilePage = lazy(() => import('@/features/users/pages/profile'))
const ReportsPage = lazy(() => import('@/features/reports/pages/reports'))

// Конфиг роутов для React Router
export const ROUTE_CONFIG: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <Navigate to={ROUTES.TEAMS} replace />,
    },
    {
        path: ROUTES.TEAMS,
        children: [
            { index: true, element: <TeamsPage /> },
            { path: 'new', element: <NewTeamPage /> },
            { path: ':teamId', element: <TeamPage /> },
        ],
    },
    {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
    },
    {
        path: ROUTES.REPORTS,
        element: <ReportsPage />,
    },
]

function LoadingFallback() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-1/2">
            <Loader size="lg" />
        </div>
    )
}

// Рекурсивная функция для рендеринга роутов любой вложенности
function renderRoutes(routes: RouteObject[]): React.ReactNode {
    return routes.map((route, index) => {
        // Если есть дочерние роуты - рендерим рекурсивно
        if (route.children && route.children.length > 0) {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    index={route.index}
                >
                    {renderRoutes(route.children)}
                </Route>
            )
        }

        // Обычный роут
        return (
            <Route
                key={index}
                path={route.path}
                element={route.element}
                index={route.index}
            />
        )
    })
}

export function Router() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route element={<Layout />}>{renderRoutes(ROUTE_CONFIG)}</Route>
            </Routes>
        </Suspense>
    )
}
