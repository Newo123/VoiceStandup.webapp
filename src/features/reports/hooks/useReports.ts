import { useQuery } from '@tanstack/react-query'
import { ReportsAPI } from '../api/reports.api'
import { reportKeys } from './keys'

export function useReports() {
    return useQuery({
        queryKey: reportKeys.list(),
        queryFn: ReportsAPI.GetReports,
    })
}
