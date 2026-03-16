import { Startup, CAUSE_LABELS } from "@/lib/types";

export function VitalStats({ startup }: { startup: Startup }) {
  return (
    <div className="text-sm leading-relaxed">
      <div className="font-bold uppercase tracking-[2px] text-xs text-ink-muted mb-3">
        Vital Statistics
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-1">
        <div>
          <strong>Founded:</strong> {startup.founded}
        </div>
        <div>
          <strong>Death/Decline:</strong> {startup.died}
        </div>
        <div>
          <strong>HQ:</strong> {startup.location}
        </div>
        <div>
          <strong>Peak Valuation:</strong> {startup.peakValuation}
        </div>
        <div>
          <strong>Total Raised:</strong> {startup.totalFunding}
        </div>
        <div>
          <strong>Peak Employees:</strong> ~{startup.peakEmployees}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-rule">
        <div>
          <span className="font-bold uppercase tracking-[2px] text-xs text-ink-muted mr-2">
            Cause of Death:
          </span>
          <span className="bg-ink text-paper px-2.5 py-1 text-xs uppercase tracking-[1px]">
            {CAUSE_LABELS[startup.causeOfDeath]}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-rule">
        <div className="font-bold uppercase tracking-[2px] text-xs text-ink-muted mb-2">
          Key Milestones
        </div>
        <ul className="text-sm leading-relaxed flex flex-wrap gap-x-6 gap-y-1">
          {startup.keyMilestones.map((m, i) => (
            <li key={i}>• {m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
