import {
    useQuery,
    useQueryClient,
    type UseQueryOptions,
} from '@tanstack/react-query'
import { ReportsAPI } from '../api/reports.api'
import type { IReport } from '../types'
import { reportKeys } from './keys'

export function useReport(
    id: string,
    options?: Omit<
        UseQueryOptions<IReport, Error, IReport, readonly unknown[]>,
        'queryKey' | 'queryFn'
    >,
) {
    const queryClient = useQueryClient()

    return useQuery<IReport, Error, IReport, readonly unknown[]>({
        queryKey: reportKeys.detail(id),

        queryFn: async () => {
            const report = await ReportsAPI.GetReport(id)

            if (!report) {
                throw new Error('Report not found')
            }

            return report
        },

        enabled: !!id && options?.enabled !== false,

        initialData: () => {
            const reports = queryClient.getQueryData<IReport[]>(
                reportKeys.list(),
            )

            return reports?.find((report) => report.id === id)
        },

        ...options,
    })
}
