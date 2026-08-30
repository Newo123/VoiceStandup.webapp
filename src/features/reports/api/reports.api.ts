import { delay, reports } from '@/shared'
import type { IReport } from '../types'

export class ReportsAPI {
    static async GetReports(): Promise<IReport[]> {
        await delay(1000)
        return reports
        // const { data: reports } = await api.get('/reports')
        // return reports
    }
    static async GetReport(id: string): Promise<IReport | null> {
        await delay(1000)
        return reports.find((report) => report.id === id) || null
        // const { data: report } = await api.get(`/reports/${id}`)
        // return report
    }
}
