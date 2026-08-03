import { useEffect, useRef, useState } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import DashboardComponent from '../components/dashboard/Dashboard'
import { getDashboard } from '../services/api'
import type { DashboardData } from '../types/dashboard'

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const refreshInFlightRef = useRef(false)

  const loadDashboard = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await getDashboard()
      setDashboard(response.data)
    } catch {
      setError('Unable to load the dashboard right now. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    if (refreshInFlightRef.current) {
      return
    }

    refreshInFlightRef.current = true

    try {
      await loadDashboard()
    } finally {
      refreshInFlightRef.current = false
    }
  }

  const handleExport = () => {
    console.log("Export button clicked");
    window.location.assign("http://localhost:5000/api/export");
    };

  useEffect(() => {
    void loadDashboard()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#f1f5f9_100%)] p-3 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
          <div className="animate-pulse rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)] sm:p-5">
            <div className="h-5 w-36 rounded-full bg-slate-200" />
            <div className="mt-3 h-7 w-72 rounded bg-slate-200" />
            <div className="mt-2 h-4 w-80 rounded bg-slate-100" />
          </div>
          <div className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)] sm:p-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-11 animate-pulse rounded-xl bg-slate-100" />
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-28 animate-pulse rounded-[22px] border border-slate-200 bg-white" />
            ))}
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <div className="h-80 animate-pulse rounded-[24px] border border-slate-200 bg-white" />
            <div className="h-80 animate-pulse rounded-[24px] border border-slate-200 bg-white" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !dashboard) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-slate-900">Unable to load dashboard</h2>
          <p className="mt-2 text-sm text-slate-500">{error ?? 'The dashboard data could not be loaded.'}</p>
          <button
            onClick={() => void loadDashboard()}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
        </div>
      </div>
    )
  }

  return <DashboardComponent data={dashboard} onRefresh={handleRefresh} onExport={handleExport} />
}