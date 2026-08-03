import { Sparkles } from 'lucide-react'

type InsightCardProps = {
  text: string
}

export default function InsightCard({ text }: InsightCardProps) {
  return (
    <div className="rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-[0_16px_35px_-24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.4)] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Sparkles className="h-5 w-5" />
        </div>
        <p className="text-sm leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  )
}
