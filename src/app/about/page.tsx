
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  PlayCircle,
  Lightbulb,
  Users,
  HeartHandshake,
  Globe2,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "For every kind of worker",
    description:
      "We recognise that people work in different ways. Our learning materials consider employees, traders, artisans, freelancers, drivers, riders and other workers.",
  },
  {
    icon: BookOpen,
    title: "Easy to understand",
    description:
      "Important information about work should not be difficult to understand. We explain work-related issues in simple, practical language.",
  },
  {
    icon: HeartHandshake,
    title: "Focused on decent work",
    description:
      "We explore issues such as fair pay, safe working conditions, social protection, equality and workers' ability to have a voice.",
  },
];

const learningMethods = [
  {
    icon: BookOpen,
    title: "Read",
    description:
      "Explore simple articles, explanations and practical guides about working life.",
  },
  {
    icon: PlayCircle,
    title: "Watch",
    description:
      "Learn through short videos and animated lessons featuring relatable characters and everyday situations.",
  },
  {
    icon: Lightbulb,
    title: "Explore",
    description:
      "Engage with interactive scenarios and learning activities that help explain real workplace situations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section">
          <p className="eyebrow">About SiseGidi</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Understanding work should be accessible to everyone.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70 sm:text-lg">
            SiseGidi is a free, open-access learning platform by TheBranchesHR.
            It helps people understand work, workers' rights, protections and
            important issues that affect working life, regardless of how they
            earn a living.
          </p>
          <Link
            href="/insights"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
          >
            Explore the learning space
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card"
              >
                <Icon size={26} className="text-coral" />
                <h2 className="mt-5 text-lg font-semibold text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="section">
          <p className="eyebrow text-sunshine">Who we serve</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-cream sm:text-4xl">
            Work takes different forms. Everyone deserves to understand it.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-cream/75">
            Whether someone works for an organisation, runs a small business,
            earns independently or works through a digital platform, they
            should be able to find useful information about their working
            lives.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Formal workers and employees",
              "Informal workers and traders",
              "Self-employed people and freelancers",
              "Platform workers and gig workers",
            ].map((group) => (
              <div
                key={group}
                className="rounded-xl border border-cream/15 bg-white/5 p-5"
              >
                <Globe2 size={22} className="text-sunshine" />
                <p className="mt-4 text-sm font-medium leading-relaxed text-cream">
                  {group}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">How we make learning accessible</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
          More than just reading.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
          We want learning about work to be engaging and practical. SiseGidi
          brings together different ways of understanding important issues.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {learningMethods.map((method) => {
            const Icon = method.icon;

            return (
              <div
                key={method.title}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card"
              >
                <Icon size={28} className="text-teal" />
                <h3 className="mt-5 text-xl font-semibold text-navy">
                  {method.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-sunshine/20">
        <div className="section">
          <div className="max-w-3xl">
            <p className="eyebrow">Our foundation</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Connecting everyday work experiences with decent work.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              SiseGidi draws on the principles of decent work and relevant
              labour standards, including the International Labour
              Organization's Decent Work Agenda. We aim to make these ideas
              easier to understand and connect them with the realities people
              experience at work.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              Our goal is not to replace professional or legal advice. It is
              to make reliable information easier to find and understand.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG-20260819-WA0005.jpg"
              alt="Founder of SiseGidi"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">About the founder</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy">
              A commitment to making work better understood.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              SiseGidi was founded by an Employment Relations and Human
              Resource Management student at Olabisi Onabanjo University and
              founder of TheBranchesHR.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              The initiative reflects a commitment to decent work, worker
              awareness and making useful labour-related information
              accessible to people across different occupations and working
              arrangements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="section text-center">
          <h2 className="text-3xl font-semibold text-navy">
            Understanding work starts with understanding your rights.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink/70">
            Explore the SiseGidi learning space and discover information that
            can help you better understand your working life.
          </p>
          <Link
            href="/insights"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
          >
            Start learning
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
