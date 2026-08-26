import {
    NotFoundPage,
    ProfilePage,
    TeamDetailPage,
    TeamFormPage,
    TeamsPage,
    UserDetailPage,
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
                <Route path="users">
                    <Route index element={<UsersPage />} />
                    <Route path=":id" element={<UserDetailPage />} />
                </Route>
                <Route path="profile">
                    <Route index element={<ProfilePage />} />
                </Route>

                {/* <Route path="/reports" element={<ReportsPage />} />
                <Route path="/reports/:id" element={<ReportDetailPage />} /> */}
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
