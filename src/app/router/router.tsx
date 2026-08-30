import { ReportsPage } from '@/features/reports'
import { ReportsDetailPage } from '@/features/reports/pages/ReportsDetailPage'
import { TeamsDetailPage, TeamsFormPage, TeamsPage } from '@/features/teams'
import { UsersPage, UsersProfilePage } from '@/features/users'
import { NotFoundPage, RootLayout } from '@/widgets'
import { createBrowserRouter, Navigate, Outlet } from 'react-router'
import { HeaderProvider, QueryProvider, TelegramProvider } from '../providers'

function AppProviders() {
    return (
        <TelegramProvider>
            <QueryProvider>
                <HeaderProvider>
                    <Outlet />
                </HeaderProvider>
            </QueryProvider>
        </TelegramProvider>
    )
}

export const router = createBrowserRouter([
    {
        element: <AppProviders />,
        children: [
            {
                element: <RootLayout />,
                children: [
                    {
                        path: '/',
                        element: <Navigate to="/teams" replace />,
                    },

                    {
                        path: 'teams',
                        children: [
                            {
                                index: true,
                                element: <TeamsPage />,
                            },
                            {
                                path: 'new',
                                element: <TeamsFormPage />,
                            },
                            {
                                path: ':id',
                                element: <TeamsDetailPage />,
                            },
                            {
                                path: ':id/edit',
                                element: <TeamsFormPage />,
                            },
                        ],
                    },

                    {
                        path: 'profile',
                        element: <UsersProfilePage />,
                    },

                    {
                        path: 'users',
                        children: [
                            {
                                index: true,
                                element: <UsersPage />,
                            },
                            {
                                path: ':id',
                                element: <UsersProfilePage />,
                            },
                        ],
                    },
                    {
                        path: 'reports',
                        children: [
                            {
                                index: true,
                                element: <ReportsPage />,
                            },
                            {
                                path: ':id',
                                element: <ReportsDetailPage />,
                            },
                        ],
                    },
                    {
                        path: '*',
                        element: <NotFoundPage />,
                    },
                ],
            },
        ],
    },
])
