import { BarChart3 } from 'lucide-react'

export default function Header() {
  return (
    <header className="overflow-hidden rounded-[22px] border border-slate-200/80 bg-gradient-to-r from-white via-slate-50 to-white px-4 py-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)] sm:px-5 sm:py-4 lg:px-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-100 sm:h-12 sm:w-12">
          <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">Business Intelligence</p>
          <h1 className="mt-0.5 text-lg font-black tracking-tight text-red-600 sm:text-xl lg:text-2xl">
            THIS IS A TEST HEADER
          </h1>
          <p className="mt-1 text-sm leading-5 text-slate-600 sm:text-[0.95rem]">
            Sales performance, profitability trends, and customer insights in one premium view.
          </p>
        </div>
      </div>
    </header>
  )
}
