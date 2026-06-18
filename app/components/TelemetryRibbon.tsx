export interface TelemetryStat {
  number: string;
  label: string;
}

interface TelemetryRibbonProps {
  stats: TelemetryStat[];
}

export default function TelemetryRibbon({ stats }: TelemetryRibbonProps) {
  return (
    <section className="telemetry-ribbon">
      <div className="telemetry-container">
        {stats.map((stat, index) => (
          <div key={index} className="telemetry-stat">
            <div className="telemetry-number">{stat.number}</div>
            <div className="telemetry-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
