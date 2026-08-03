import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { ChartItem } from '../../types/dashboard'

type BarChartCardProps = {
  title: string
  data: ChartItem[]
  color?: string
}

export default function BarChartCard({ title, data, color = '#2563eb' }: BarChartCardProps) {
  const chartData = data.map((item, index) => ({
    ...item,
    fill: index % 2 === 0 ? color : '#93c5fd',
  }))

  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_44px_-24px_rgba(15,23,42,0.38)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.44)] sm:p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">Performance overview</p>
      </div>
      <div className="h-72">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={chartData} margin={{ top: 8, right: 10, left: -6, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '12px', borderColor: '#dbeafe', boxShadow: '0 12px 24px -16px rgba(15,23,42,0.35)' }}
                formatter={(value) => (typeof value === 'number' ? value.toLocaleString() : String(value ?? ''))}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {chartData.map((entry) => (
                  <Cell key={`${entry.label}-${entry.value}`} fill={entry.fill} />
                ))}
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-2xl bg-slate-50 text-sm text-slate-400">
            No data available
          </div>
        )}
      </div>
    </div>
  )
}
