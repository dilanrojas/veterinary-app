interface NewsItemProps {
  date: string;
  title: string;
  desc: string;
}

export default function NewsItem({ date, title, desc }: NewsItemProps) {
  return (
    <div className="border-b border-[#f0f4f2] dark:border-[#2a3f31] pb-3 last:border-0 last:pb-0">
      <p className="text-xs font-bold text-primary mb-1 uppercase">{date}</p>
      <p className="text-sm font-bold mb-1">{title}</p>
      <p className="text-xs text-[#61896f]">{desc}</p>
    </div>
  )
}
