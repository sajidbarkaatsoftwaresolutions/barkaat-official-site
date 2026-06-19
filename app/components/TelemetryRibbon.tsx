export interface TelemetryStat {
  number: string;
  label: string;
}

interface TelemetryRibbonProps {
  stats: TelemetryStat[];
}

export default function TelemetryRibbon({ stats }: TelemetryRibbonProps) {
  return (
    <section className="bg-obsidian-800 border-t border-b border-border-primary py-6 md:py-10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="font-montserrat text-3xl md:text-4xl lg:text-[48px] font-extrabold text-text-primary tracking-[-0.5px]">{stat.number}</div>
            <div className="text-[13px] text-text-muted font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
