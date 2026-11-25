
import Link from "next/link";
import { Github } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About SiseGidi" },
      { href: "/insights", label: "Learn" },
      { href: "/research", label: "Research" },
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
    <footer className="border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sunshine text-navy">
                <RosetteMark />
              </span>
              Ṣiṣẹ́ gidi
            </div>

            <p className="mt-3 max-w-xs text-sm text-cream/70">
              An open-access learning initiative by TheBranchesHR.
              Helping workers understand their rights, responsibilities and available protections.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-sunshine">
                {col.title}
              </p>

              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-coral"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Ṣiṣẹ́ gidi — An initiative by TheBranchesHR.
          </p>

          <a
            href="https://github.com/irhawo08-sys/SiseGidi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-sunshine"
          >
            <Github size={14} />
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
