
import {
  Briefcase,
  Coins,
  Shield,
  HeartHandshake,
  Scale,
  Cpu,
  Megaphone,
} from "lucide-react";
import type { Pillar } from "@/lib/pillars";

const icons = {
  briefcase: Briefcase,
  coins: Coins,
  shield: Shield,
  "heart-handshake": HeartHandshake,
  scale: Scale,
  cpu: Cpu,
  megaphone: Megaphone,
};

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = icons[pillar.icon];

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-cardHover">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sunshine/25 text-navy transition-colors group-hover:bg-teal/20">
          <Icon size={20} strokeWidth={2} />
        </span>

        <span className="font-mono text-xs text-muted">
          {pillar.number}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-navy">
        {pillar.title}
      </h3>

      <p className="text-sm leading-relaxed text-ink/70">
        {pillar.description}
      </p>
    </div>
  );
}
