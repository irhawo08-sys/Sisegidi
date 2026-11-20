
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Wallet,
  ShieldCheck,
  HardHat,
  HeartHandshake,
  Search,
  PlayCircle,
  Users,
  Lightbulb,
  BriefcaseBusiness,
  ChevronRight,
  BookOpenText,
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const topics = [
  {
    icon: FileText,
    title: "Employment rights",
    description: "Understand contracts, working hours, leave and your rights at work.",
    color: "bg-[#E8EFE7]",
    href: "/learn",
  },
  {
    icon: Wallet,
    title: "Wages and benefits",
    description: "Learn about salaries, deductions, minimum wage and employee benefits.",
    color: "bg-[#F4EBDD]",
    href: "/learn",
  },
  {
    icon: ShieldCheck,
    title: "Social protection",
    description: "Explore pensions, insurance and other forms of worker protection.",
    color: "bg-[#E9EDF2]",
    href: "/protection",
  },
  {
    icon: HardHat,
    title: "Workplace safety",
    description: "Understand workplace risks, safety standards and responsibilities.",
    color: "bg-[#F2E9E7]",
    href: "/learn",
  },
  {
    icon: HeartHandshake,
    title: "Fair treatment",
    description: "Learn about discrimination, dignity and respectful workplaces.",
    color: "bg-[#EDE9F3]",
    href: "/learn",
  },
  {
    icon: BriefcaseBusiness,
    title: "Informal and platform work",
    description: "Explore the realities and protections of different forms of work.",
    color: "bg-[#E7EEEC]",
    href: "/learn",
  },
];

const resources = [
  {
    category: "WORKPLACE RIGHTS",
    title: "Why does an employment contract matter?",
    description:
      "Understand why written employment terms matter and what you should look out for.",
    type: "Practical guide",
    icon: FileText,
    href: "/learn",
  },
  {
    category: "SOCIAL PROTECTION",
    title: "Understanding pensions and insurance",
    description:
      "A simple introduction to the protection available to workers.",
    type: "Learning resource",
    icon: ShieldCheck,
    href: "/protection",
  },
  {
    category: "DECENT WORK",
    title: "What does decent work really mean?",
    description:
      "Explore the idea of decent work and why it matters to every worker.",
    type: "Article",
    icon: BookOpen,
    href: "/learn",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative bg-beige">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">

          <div className="animate-fadeUp">
            <span className="eyebrow">
              YOUR WORK. YOUR RIGHTS. YOUR PROTECTION.
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
              Understand your work.
              <span className="text-gold-dark"> Know your rights.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
              Work can be complicated. Understanding your rights and
              protection shouldn't be. Ṣiṣẹ́ gidi provides simple,
              practical information to help workers make informed decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/learn" className="btn-primary">
                Explore resources <ArrowRight size={17} />
              </Link>

              <Link href="/about" className="btn-secondary">
                About SiseGidi
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-ink/60">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-forest" />
                Free access
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={17} className="text-forest" />
                Easy to understand
              </span>
              <span className="flex items-center gap-2">
                <Users size={17} className="text-forest" />
                For all workers
              </span>
            </div>
          </div>

          <div className="relative animate-fadeUp delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=85&w=1200&auto=format&fit=crop"
                alt="People working together"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 max-w-[230px] rounded-2xl bg-white p-5 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#E8EFE7] p-3">
                  <Lightbulb size={22} className="text-forest" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    Knowledge matters
                  </p>
                  <p className="text-xs text-ink/60">
                    Understand before you decide.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <SectionHeading
            eyebrow="WELCOME TO ṢIṢẸ́ GIDI"
            title="Work should come with knowledge, dignity and protection."
            description="Whether you work in an office, a factory, a market, on the road or through a digital platform, understanding your rights matters. SiseGidi makes useful labour information easier to access and understand."
          />

          <div className="rounded-3xl bg-[#E8EFE7] p-8 sm:p-10">
            <span className="eyebrow">OUR APPROACH</span>

            <h3 className="mt-4 text-2xl font-bold">
              Information should be accessible to everyone.
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/70">
              We believe workers should not need a law degree or specialised
              knowledge to understand important information about their work.
              Our goal is to make that information practical and accessible.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:gap-3 transition-all"
            >
              Learn about our mission <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-white">
        <div className="section">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="EXPLORE BY TOPIC"
              title="What would you like to understand?"
              description="Start with a topic that matters to your work. Find simple explanations and practical information."
            />

            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest"
            >
              Explore all topics <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Link
                href={topic.href}
                key={topic.title}
                className="group rounded-2xl border border-forest/10 bg-beige p-6 transition-all duration-300 hover:-translate-y-2 hover:border-forest/20 hover:shadow-xl animate-fadeUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${topic.color}`}>
                  <topic.icon size={25} className="text-forest" />
                </div>

                <h3 className="text-xl font-bold">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/65">
                  {topic.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-forest transition-all group-hover:gap-3">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SOCIAL PROTECTION */}
      <section className="bg-forest text-beige">
        <div className="section grid items-center gap-12 lg:grid-cols-2">

          <div className="animate-fadeUp">
            <span className="eyebrow text-gold-light">
              PROTECTING YOUR FUTURE
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-beige sm:text-4xl lg:text-5xl">
              Your work today. Your security tomorrow.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-beige/75">
              Social protection helps workers manage life's uncertainties.
              Learn about pensions, insurance and the different ways workers
              can access protection, including those in informal employment.
            </p>

            <Link
              href="/protection"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest transition-all hover:-translate-y-1 hover:bg-gold-light"
            >
              Explore social protection <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Wallet, title: "Pensions", text: "Planning for retirement" },
              { icon: ShieldCheck, title: "Insurance", text: "Managing financial risks" },
              { icon: HeartHandshake, title: "Health protection", text: "Understanding health cover" },
              { icon: Users, title: "Worker welfare", text: "Protection and wellbeing" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-beige/15 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <item.icon size={27} className="text-gold-light" />
                <h3 className="mt-5 text-lg font-semibold text-beige">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-beige/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED RESOURCES */}
      <section className="section">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="LEARN SOMETHING TODAY"
            title="Knowledge you can put to use."
            description="Explore practical information that helps you better understand your work and the protections available to you."
          />

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            View all resources <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="group overflow-hidden rounded-2xl border border-forest/10 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-44 items-center justify-center bg-[#E8EFE7]">
                <resource.icon
                  size={55}
                  strokeWidth={1.3}
                  className="text-forest/70 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="font-mono text-[10px] tracking-wider text-gold-dark">
                  {resource.category}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/65">
                  {resource.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-beige px-3 py-1.5 text-xs text-ink/60">
                    {resource.type}
                  </span>

                  <Link
                    href={resource.href}
                    aria-label={`Explore ${resource.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white transition-transform group-hover:translate-x-1"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* WORKER STORIES */}
      <section className="bg-[#EAE2D0]">
        <div className="section grid items-center gap-12 lg:grid-cols-2">

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?fm=jpg&q=85&w=1200&auto=format&fit=crop"
              alt="Workers collaborating"
              width={800}
              height={600}
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>

          <div>
            <span className="eyebrow">THE HUMAN SIDE OF WORK</span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Behind every job is a person.
            </h2>

            <p className="mt-5 text-base leading-8 text-ink/70">
              Work is not just about productivity. It is also about people,
              their experiences, their wellbeing and their ability to earn a
              living with dignity.
            </p>

            <p className="mt-4 text-base leading-8 text-ink/70">
              We want to make room for conversations that help us better
              understand the realities of work.
            </p>

            <Link href="/about" className="btn-primary mt-7">
              Discover our mission <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-forest">
        <div className="section flex flex-col items-center text-center">

          <BookOpenText size={34} className="text-gold-light" />

          <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-beige sm:text-5xl">
            A better understanding of work starts with knowledge.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-beige/70">
            Explore practical resources, understand your rights and learn
            about the protection available to workers.
          </p>

          <Link
            href="/resources"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-forest transition-all hover:-translate-y-1 hover:bg-gold-light"
          >
            Start exploring <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}
