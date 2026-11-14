import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Wallet,
  HardHat,
  Umbrella,
  Cpu,
  MessagesSquare,
  Users,
  FileCheck2,
  ClipboardList,
  BadgeCheck,
  Search,
  Github,
  Code2,
  BookOpenText,
  Building2,
  Landmark,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import CompanyCard from "@/components/CompanyCard";
import { pillars } from "@/lib/pillars";
import { sampleCompanies } from "@/lib/companies";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

const REPO_URL = "https://github.com/irhawo08-sys/Sisegidi";

const challenges = [
  { icon: Wallet, label: "Fair pay" },
  { icon: HardHat, label: "Worker safety" },
  { icon: Umbrella, label: "Social protection" },
  { icon: Cpu, label: "Transparent algorithms" },
  { icon: MessagesSquare, label: "Worker voice" },
  { icon: Users, label: "Equal opportunities" },
];

const steps = [
  {
    icon: MessagesSquare,
    title: "Workers share what it is like",
    description:
      "Riders, drivers and freelancers answer a few questions about pay, safety and how the app treats them. It is anonymous.",
  },
  {
    icon: ClipboardList,
    title: "Platforms answer the same questions",
    description:
      "The company rates itself on the same points and uploads proof, like policies and pay records.",
  },
  {
    icon: FileCheck2,
    title: "We compare both sides",
    description: "A real person on our team reads both and checks that they match.",
  },
  {
    icon: BadgeCheck,
    title: "The profile goes public",
    description:
      "Anyone can see it. If the company's answers match what workers say, it gets the Worker-checked label.",
  },
];

const contributors = [
  { icon: Code2, label: "Developers" },
  { icon: GraduationCap, label: "Researchers" },
  { icon: Users, label: "Workers" },
  { icon: Landmark, label: "Labour organizations" },
  { icon: FileCheck2, label: "Policymakers" },
  { icon: Building2, label: "Universities" },
];

async function getPreviewCompanies() {
  if (!isSupabaseConfigured()) return { companies: sampleCompanies.slice(0, 3), isExample: true };

  const supabase = createClient();
  const { data, error } = await supabase
    .from("company_directory")
    .select("id, name, country, platform_type, assessment_score, worker_voice_score, status")
    .limit(3);

  if (error || !data || data.length === 0) {
    return { companies: sampleCompanies.slice(0, 3), isExample: true };
  }

  const statusMap: Record<string, "Verified" | "In Progress" | "Not Yet Assessed"> = {
    verified: "Verified",
    in_progress: "In Progress",
    not_yet_assessed: "Not Yet Assessed",
  };

  return {
    companies: data.map((row) => ({
      id: row.id,
      name: row.name,
      country: row.country,
      platformType: row.platform_type,
      assessmentScore: row.assessment_score ?? 0,
      workerVoiceScore: row.worker_voice_score ?? 0,
      status: statusMap[row.status] ?? "Not Yet Assessed",
    })),
    isExample: false,
  };
}

export default async function Home() {
  const { companies: previewCompanies, isExample } = await getPreviewCompanies();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-beige">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="animate-fadeUp">
            <p className="eyebrow">For riders, drivers and freelancers</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Know how a platform treats its workers before you sign up
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Workers share what the job is really like. Platforms show their side. You decide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/worker-voice" className="btn-primary">
                Share your experience <ArrowRight size={16} />
              </Link>
              <Link href="/directory" className="btn-secondary">
                See platform profiles
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1587476351660-e9fa4bb8b26c?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="Gig worker on a delivery platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="section grid gap-12 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="What this is"
          title="Workers' stories, checked against what platforms say"
          description="Ṣiṣẹ́ gidi is a free, open project. Workers tell us what the job is really like: pay, safety, and how the app treats them. Platforms answer the same questions and show proof. We put both side by side so you can see the full picture."
        />
        <ul className="grid gap-4 self-start sm:grid-cols-2">
          {[
            { yes: false, text: "Not a legal certificate" },
            { yes: false, text: "Not a ranking of platforms" },
            { yes: false, text: "Not against business" },
            { yes: true, text: "A way to see both sides" },
          ].map((item) => (
            <li
              key={item.text}
              className={`rounded-xl2 border p-4 text-sm ${
                item.yes ? "border-forest/20 bg-forest/5 text-forest" : "border-forest/10 bg-white text-ink/60"
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Why now */}
      <section className="bg-forest text-beige">
        <div className="section grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why now"
              title="A new world standard for platform work just arrived"
              description="In 2026 the ILO, the United Nations body for work, adopted Convention 193. It is the first world standard written for platform work. Countries will turn it into law over time. Platforms that are already fair will be ready."
              dark
            />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {challenges.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-3 rounded-xl2 border border-beige/15 p-5 text-center">
                  <c.icon size={22} className="text-gold-light" />
                  <span className="text-xs text-beige/80">{c.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-beige/70">
              Ṣiṣẹ́ gidi gives workers a place to speak, gives platforms a way to show they are fair,
              and gives researchers and governments real data. For this region, that data has mostly
              been missing.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558899279-70e656cde1cd?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Platform driver waiting for a job on his phone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <SectionHeading eyebrow="How it works" title="Four steps, and workers go first" />
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-forest/15 md:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-start gap-4">
              <span className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-forest bg-white text-forest">
                <step.icon size={26} strokeWidth={1.8} />
              </span>
              <p className="font-mono text-xs text-gold-dark">Step {i + 1}</p>
              <h3 className="text-base font-semibold text-forest">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seven points */}
      <section className="bg-beige">
        <div className="section">
          <SectionHeading
            eyebrow="What we look at"
            title="Seven things, the same for every platform"
            description="Every platform is looked at on the same seven points. They come from the ILO's world standard for platform work."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* For workers / For platforms */}
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="card flex flex-col gap-5">
          <p className="eyebrow">For workers</p>
          <h3 className="text-2xl font-semibold text-forest">Your experience shapes every score.</h3>
          <ul className="space-y-2 text-sm text-ink/70">
            <li>Share what the job is really like. It is anonymous.</li>
            <li>Look up a platform before you sign up</li>
            <li>Help make platform work fairer for everyone</li>
          </ul>
          <Link href="/worker-voice" className="btn-primary mt-2 w-fit">
            Share your experience
          </Link>
        </div>

        <div className="card flex flex-col gap-5 bg-forest text-beige">
          <p className="eyebrow text-gold-light">For platforms</p>
          <h3 className="text-2xl font-semibold text-beige">Show that you treat workers well.</h3>
          <ul className="space-y-2 text-sm text-beige/80">
            <li>See how you measure up on the seven points</li>
            <li>Get ideas on what to improve</li>
            <li>Track your progress over time</li>
            <li>Build trust with workers and investors</li>
            <li>Be ready before the new standard becomes law</li>
          </ul>
          <Link href="/assessment" className="btn-primary mt-2 w-fit bg-gold text-forest hover:bg-gold-light">
            Assess your platform
          </Link>
        </div>
      </section>

      {/* Platform profiles preview */}
      <section className="bg-beige">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Platform profiles"
              title="See how platforms treat their workers"
              description="Search by country, type or score. Each profile shows what the company says and what workers say."
            />
            <Link href="/directory" className="btn-secondary shrink-0">
              View all platforms <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-3 rounded-xl2 border border-forest/10 bg-white p-4 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-forest/15 px-4 py-2">
              <Search size={16} className="text-mist" />
              <span className="text-sm text-ink/40">Search platforms…</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="rounded-full bg-forest/8 px-3 py-2 text-forest">Country</span>
              <span className="rounded-full bg-forest/8 px-3 py-2 text-forest">Platform type</span>
              <span className="rounded-full bg-forest/8 px-3 py-2 text-forest">Status</span>
            </div>
          </div>

          {isExample && (
            <p className="mt-4 text-sm text-ink/60">
              These are examples to show how a profile will look. Real profiles will appear here as
              workers and platforms join.
            </p>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} isExample={isExample} />
            ))}
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="section grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Open source"
            title="Open for anyone to check and improve"
            description="The questions, the scoring and the code are all open. If you want to help, you are welcome."
          />
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-fit">
            <Github size={16} /> View on GitHub
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {contributors.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-3 rounded-xl2 border border-forest/10 p-5 text-center">
              <c.icon size={20} className="text-forest" />
              <span className="text-xs text-ink/70">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="section flex flex-col items-center gap-8 text-center">
          <BookOpenText size={28} className="text-gold-light" />
          <h2 className="max-w-2xl text-3xl font-semibold text-beige sm:text-4xl">
            Work on a platform? Tell us what it is really like.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/worker-voice" className="btn-primary bg-gold text-forest hover:bg-gold-light">
              Share your experience
            </Link>
            <Link href="/assessment" className="btn-secondary border-beige/30 text-beige hover:bg-beige/10">
              I run a platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
