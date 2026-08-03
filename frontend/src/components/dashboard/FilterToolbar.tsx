import { Download, RefreshCw } from 'lucide-react'

type FilterToolbarProps = {
  onRefresh: () => void
  onExport: () => void
}

export default function FilterToolbar({ onRefresh, onExport }: FilterToolbarProps) {
  return (
    <div className="rounded-[22px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)] backdrop-blur sm:p-4">
      <div className="flex justify-end">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button
            type="button"
            onClick={onExport}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>
    </div>
  )
}
