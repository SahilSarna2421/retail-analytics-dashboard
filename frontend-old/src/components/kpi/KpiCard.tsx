import type { ReactNode } from 'react'

type KpiCardProps = {
  title: string
  value: string | number
  icon: ReactNode
}

export default function KpiCard({ title, value, icon }: KpiCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-[0_16px_36px_-22px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.48)] sm:p-5">
      <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-[22px] bg-gradient-to-r from-blue-600 to-cyan-500" />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{title}</p>
          <p className="mt-2 text-[1.7rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">{value}</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-200">
          {icon}
        </div>
      </div>
    </div>
  )
}
