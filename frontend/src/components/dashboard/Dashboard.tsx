import { DollarSign, MapPin, Package, Percent, TrendingUp } from 'lucide-react'
import BarChartCard from '../charts/BarChart'
import PieChartCard from '../charts/PieChart'
import InsightCard from '../insights/InsightCard'
import Header from '../layout/Header'
import KpiCard from '../kpi/KpiCard'
import FilterToolbar from './FilterToolbar'
import type { DashboardData } from '../../types/dashboard'
import { formatCurrency } from '../../utils/format'

type DashboardProps = {
  data: DashboardData
  onRefresh?: () => void
  onExport?: () => void
}

export default function Dashboard({ data, onRefresh, onExport }: DashboardProps) {
  const kpiCards = [
    { title: 'Total Sales', value: formatCurrency(data.kpis.totalSales), icon: <DollarSign className="h-5 w-5" /> },
    { title: 'Total Profit', value: formatCurrency(data.kpis.totalProfit), icon: <TrendingUp className="h-5 w-5" /> },
    { title: 'Total Quantity', value: data.kpis.totalQuantity.toLocaleString(), icon: <Package className="h-5 w-5" /> },
    { title: 'Average Discount', value: `${(data.kpis.averageDiscount * 100).toFixed(1)}%`, icon: <Percent className="h-5 w-5" /> },
    { title: 'States', value: data.kpis.numberOfStates.toLocaleString(), icon: <MapPin className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#f1f5f9_100%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 py-3 sm:gap-6 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <Header />

        <FilterToolbar onRefresh={onRefresh ?? (() => undefined)} onExport={onExport ?? (() => undefined)} />

        <section className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
          {kpiCards.map((card) => (
            <KpiCard key={card.title} title={card.title} value={card.value} icon={card.icon} />
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          <BarChartCard title="Sales by Category" data={data.charts.salesByCategory} />
          <BarChartCard title="Profit by Category" data={data.charts.profitByCategory} />
          <BarChartCard title="Sales by Region" data={data.charts.salesByRegion} />
          <BarChartCard title="Profit by Region" data={data.charts.profitByRegion} />
          <PieChartCard title="Sales by Segment" data={data.charts.salesBySegment} />
          <BarChartCard title="Top 10 States" data={data.charts.topStates} />
        </section>

        <section className="rounded-[24px] border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_44px_-24px_rgba(15,23,42,0.38)] backdrop-blur sm:p-5">
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">Key Insights</h2>
            <p className="mt-1 text-sm text-slate-500">Actionable recommendations from the latest data</p>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            {data.insights.map((insight) => (
              <InsightCard key={insight} text={insight} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
