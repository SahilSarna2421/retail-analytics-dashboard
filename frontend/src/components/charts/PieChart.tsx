import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts'
import type { ChartItem } from '../../types/dashboard'

type PieChartCardProps = {
  title: string
  data: ChartItem[]
}

export default function PieChartCard({ title, data }: PieChartCardProps) {
  const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']

  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_44px_-24px_rgba(15,23,42,0.38)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.44)] sm:p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">Distribution across categories</p>
      </div>
      <div className="h-72">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie data={data} dataKey="value" nameKey="label" innerRadius={68} outerRadius={110} paddingAngle={2}>
                {data.map((entry, index) => (
                  <Cell key={`${entry.label}-${entry.value}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: '12px', borderColor: '#dbeafe', boxShadow: '0 12px 24px -16px rgba(15,23,42,0.35)' }}
                formatter={(value) => (typeof value === 'number' ? value.toLocaleString() : String(value ?? ''))}
              />
            </RechartsPieChart>
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
