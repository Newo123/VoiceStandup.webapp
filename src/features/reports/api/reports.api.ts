import { api } from '@/shared'
import type { IReport } from '../types'

export class ReportsAPI {
    static async GetReports(): Promise<IReport[]> {
        const { data: reports } = await api.get('/reports')
        return reports
    }
    static async GetReport(id: string): Promise<IReport | null> {
        const { data: report } = await api.get(`/reports/${id}`)
        return report
    }
}
