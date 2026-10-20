import Link from "next/link";
import { Github } from "lucide-react";

const columns = [
  {
    title: "Initiative",
    links: [
      { href: "/about", label: "About" },
      { href: "/assessment", label: "Framework" },
      { href: "/directory", label: "Company Directory" },
      { href: "/convention-193", label: "Convention 193" },
      { href: "/research", label: "Research" },
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/data-protection", label: "Data Protection" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "https://github.com", label: "GitHub" },
    ],
  },
];

function RosetteMark() {
  return (
    <svg viewBox="0 0 120 120" width="18" height="18" aria-hidden="true">
      <g fill="currentColor">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`translate(60,60) rotate(${angle})`}>
            <polygon points="0,-38 7,-16 0,-9 -7,-16" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-beige">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-beige">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-forest">
                <RosetteMark />
              </span>
              Ṣiṣẹ́ gidi
            </div>
            <p className="mt-3 max-w-xs text-sm text-beige/70">
              An Open-Source Initiative by TheBranchesHR
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-gold-light">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-beige/80 hover:text-gold-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-beige/15 pt-6 text-xs text-beige/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ṣiṣẹ́ gidi — An Open-Source Initiative by TheBranchesHR</p>
          <a href="https://github.com" className="inline-flex items-center gap-2 hover:text-gold-light">
            <Github size={14} /> View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
