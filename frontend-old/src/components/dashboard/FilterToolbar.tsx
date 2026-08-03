import { Download, RefreshCw } from 'lucide-react'

type FilterToolbarProps = {
  region: string
  category: string
  segment: string
  dateRange: string
  onRegionChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onSegmentChange: (value: string) => void
  onDateRangeChange: (value: string) => void
  onRefresh: () => void
  onExport: () => void
}

export default function FilterToolbar({
  region,
  category,
  segment,
  dateRange,
  onRegionChange,
  onCategoryChange,
  onSegmentChange,
  onDateRangeChange,
  onRefresh,
  onExport,
}: FilterToolbarProps) {
  return (
    <div className="rounded-[22px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)] backdrop-blur sm:p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-600">
            <span>Region</span>
            <select
              value={region}
              onChange={(event) => onRegionChange(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
            >
              <option>All Regions</option>
              <option>East</option>
              <option>West</option>
              <option>South</option>
              <option>Central</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-600">
            <span>Category</span>
            <select
              value={category}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
            >
              <option>All Categories</option>
              <option>Furniture</option>
              <option>Office Supplies</option>
              <option>Technology</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-600">
            <span>Segment</span>
            <select
              value={segment}
              onChange={(event) => onSegmentChange(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
            >
              <option>All Segments</option>
              <option>Consumer</option>
              <option>Corporate</option>
              <option>Home Office</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-600">
            <span>Date Range</span>
            <input
              type="text"
              value={dateRange}
              onChange={(event) => onDateRangeChange(event.target.value)}
              placeholder="e.g. Last 12 months"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
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
