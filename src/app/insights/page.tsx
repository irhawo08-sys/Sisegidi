
import Link from "next/link";
import {
  BookOpen,
  PlayCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import PillarCard from "@/components/PillarCard";
import { pillars } from "@/lib/pillars";

const learningMethods = [
  {
    title: "Read",
    description:
      "Simple explanations, practical guides and articles that make work-related issues easier to understand.",
    icon: BookOpen,
  },
  {
    title: "Watch",
    description:
      "Short animated lessons featuring relatable characters and everyday workplace situations.",
    icon: PlayCircle,
  },
  {
    title: "Explore",
    description:
      "Interactive workplace scenarios that help you understand different situations and possible responses.",
    icon: Lightbulb,
  },
];

export default function LearnPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section">
          <p className="eyebrow">The SiseGidi Learning Space</p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Understand your work. Know what matters.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            Whether you work in an office, run a business, sell in a market,
            practise a trade or work through a digital platform, understanding
            work and your rights matters.
          </p>

          <a
            href="#topics"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
          >
            Explore learning topics
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="section">
          <p className="eyebrow text-sunshine">Learning differently</p>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-cream sm:text-4xl">
            Learning about work shouldn't feel like reading a textbook.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-cream/75">
            SiseGidi makes important work-related information understandable
            through different learning experiences.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {learningMethods.map((method) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.title}
                  className="rounded-2xl border border-cream/15 bg-white/5 p-6 transition hover:-translate-y-1"
                >
                  <Icon size={30} className="text-sunshine" />

                  <h3 className="mt-5 text-xl font-semibold text-cream">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="topics" className="section">
        <p className="eyebrow">Explore the topics</p>

        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
          Seven important areas of working life.
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-ink/65">
          These topics cover issues that affect workers across different
          occupations and working arrangements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </section>

      <section className="bg-sunshine/20">
        <div className="section">
          <div className="rounded-2xl bg-white p-7 sm:p-10">
            <p className="eyebrow">A closer look</p>

            <h2 className="mt-3 text-3xl font-semibold text-navy">
              Curious about platform work?
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
              Explore how ride-hailing, delivery services and online
              freelancing are changing the world of work, including the
              opportunities and challenges workers face.
            </p>

            <Link
              href="/platform-work"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy hover:text-coral"
            >
              Explore platform work
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
