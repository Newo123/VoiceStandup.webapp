import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Layout } from '../components/layout/layout'
import { TeamMembersPage } from '../pages/team/members'
import { NewTeamPage } from '../pages/team/new'
import { TeamPage } from '../pages/team/team'
import { TeamsPage } from '../pages/team/teams'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Navigate to="/teams" replace />}
                    />
                    <Route path="teams">
                        <Route index element={<TeamsPage />} />
                        <Route path="new" element={<NewTeamPage />} />
                        <Route path=":teamId" element={<TeamPage />} />
                        <Route
                            path=":teamId/:userId"
                            element={<TeamMembersPage />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
