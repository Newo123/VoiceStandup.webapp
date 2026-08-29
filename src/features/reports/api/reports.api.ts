import { delay, reports } from '@/shared'
import type { IReport } from '../types'

export class ReportsAPI {
    static async GetReports(): Promise<IReport[]> {
        // const { data: reports } = api.get('/reports')
        // return reports
        await delay(1000)
        return Promise.resolve(reports)
    }

    static async GetReport(id: number): Promise<IReport | null> {
        //       const { data: report } = api.get(`/reports/${id}`)
        // return reports
        await delay(1000)
        return Promise.resolve(
            reports.find((report) => report.id === id) || null,
        )
    }
}
