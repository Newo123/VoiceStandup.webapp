import {
    NotFoundPage,
    TeamDetailPage,
    TeamFormPage,
    TeamsPage,
    UserDetailPage,
    UserProfilePage,
    UsersPage,
} from '@/pages'
import { RootLayout } from '@/shared'
import { Navigate, Route, Routes } from 'react-router'

export function Router() {
    return (
        <Routes>
            {/* Редирект с корня */}
            <Route path="/" element={<Navigate to="/teams" replace />} />

            {/* Все маршруты с Layout */}
            <Route element={<RootLayout />}>
                <Route path="teams">
                    <Route index element={<TeamsPage />} />
                    <Route path="new" element={<TeamFormPage />} />
                    <Route path=":id" element={<TeamDetailPage />} />
                    <Route path=":id/edit" element={<TeamFormPage />} />
                </Route>
                <Route path="user">
                    <Route index element={<UserProfilePage />} />
                    <Route path="list" element={<UsersPage />} />
                    <Route path=":id" element={<UserDetailPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />

                {/* <Route path="/reports" element={<ReportsPage />} />
                <Route path="/reports/:id" element={<ReportDetailPage />} /> */}
            </Route>

            {/* 404 */}
        </Routes>
    )
}
