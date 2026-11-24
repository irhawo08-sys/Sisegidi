
import {
  ArrowRight,
  Bike,
  BookOpen,
  BriefcaseBusiness,
  Bus,
  FileText,
  HardHat,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wallet,
} from "lucide-react";

const topics = [
  {
    icon: FileText,
    title: "Employment rights",
    description:
      "Understand contracts, working hours, leave and your rights at work.",
    color: "bg-coral/15",
  },
  {
    icon: Wallet,
    title: "Pay and benefits",
    description:
      "Learn about wages, deductions, benefits and fair compensation.",
    color: "bg-sunshine/25",
  },
  {
    icon: ShieldCheck,
    title: "Social protection",
    description:
      "Explore pensions, insurance and ways to protect your future.",
    color: "bg-teal/20",
  },
  {
    icon: HardHat,
    title: "Workplace safety",
    description:
      "Know more about safe working conditions and your wellbeing.",
    color: "bg-navy/10",
  },
  {
    icon: HeartHandshake,
    title: "Fair treatment",
    description:
      "Learn about dignity, respect and fairness in the workplace.",
    color: "bg-coral/15",
  },
  {
    icon: Users,
    title: "Different kinds of work",
    description:
      "Explore the realities of formal, informal and platform work.",
    color: "bg-teal/20",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Understanding employment contracts",
    description: "What should you look out for before accepting a job?",
    color: "bg-coral/15",
  },
  {
    icon: ShieldCheck,
    title: "Insurance and pension",
    description:
      "A simple introduction to protecting yourself financially.",
    color: "bg-teal/20",
  },
  {
    icon: BookOpen,
    title: "What is decent work?",
    description:
      "Understand what decent work means and why it matters.",
    color: "bg-sunshine/25",
  },
];

const workerTypes = [
  {
    icon: Bus,
    label: "Transport workers",
    detail: "Drivers and conductors",
    color: "bg-sunshine",
    position: "rotate-[-4deg]",
  },
  {
    icon: Bike,
    label: "Delivery workers",
    detail: "Dispatch and platform riders",
    color: "bg-teal",
    position: "rotate-[4deg]",
  },
  {
    icon: Store,
    label: "Market workers",
    detail: "Traders and small businesses",
    color: "bg-coral",
    position: "rotate-[3deg]",
  },
  {
    icon: BriefcaseBusiness,
    label: "Office workers",
    detail: "Employees and professionals",
    color: "bg-[#A9C8E8]",
    position: "rotate-[-3deg]",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream text-ink">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="animate-fadeUp">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sunshine/30 px-4 py-2 text-sm font-semibold text-navy">
              <Sparkles size={16} />
              A resource for every worker
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.08] text-navy sm:text-6xl lg:text-7xl">
              Work matters.
              <span className="mt-2 block text-coral">
                Know your rights.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              Whether you work in an office, drive a bus, deliver packages or
              run a small business, understanding your rights and protections
              matters.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#topics"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-bold text-white shadow-lg shadow-coral/20 transition duration-300 hover:-translate-y-1 hover:bg-coral-dark"
              >
                Start exploring
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-7 py-4 font-bold text-navy transition duration-300 hover:bg-navy hover:text-white"
              >
                About SiseGidi
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-muted">
              Free information. Simple explanations. For all workers.
            </p>
          </div>

          {/* WORKER COLLAGE */}
          <div className="relative mx-auto w-full max-w-lg animate-fadeIn">
            <div className="absolute -left-5 top-10 h-28 w-28 rounded-full bg-sunshine/60 blur-2xl" />
            <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-teal/50 blur-2xl" />

            <div className="relative rounded-[2.5rem] bg-navy p-5 shadow-2xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest text-white/70">
                  Every worker counts
                </span>
                <Sparkles className="text-sunshine" size={22} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {workerTypes.map((worker, index) => {
                  const Icon = worker.icon;

                  return (
                    <div
                      key={worker.label}
                      className={`${worker.color} ${worker.position} flex min-h-44 flex-col justify-between rounded-3xl p-4 shadow-lg transition duration-300 hover:rotate-0 hover:scale-105 sm:min-h-48 sm:p-5`}
                      style={{
                        animationDelay: `${index * 120}ms`,
                      }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-navy">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h2 className="text-lg font-extrabold leading-tight text-navy">
                          {worker.label}
                        </h2>
                        <p className="mt-1 text-xs font-medium text-navy/75">
                          {worker.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 px-5 py-4 text-center">
                <p className="text-lg font-bold text-white">
                  Different jobs. Shared dignity.
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Everyone deserves to understand their rights.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl bg-sunshine px-5 py-3 shadow-lg">
              <p className="text-sm font-extrabold text-navy">
                Knowledge is protection!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="bg-white px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="animate-fadeUp">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-coral">
              Welcome to SiseGidi
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Understanding work shouldn&apos;t be complicated.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-muted">
              Work comes in different forms, and workers face different
              challenges. But everyone deserves access to clear and useful
              information about their rights, responsibilities and protection.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted">
              SiseGidi makes important work-related information easier to
              understand, so you can make more informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section id="topics" className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-coral">
              Learn and understand
            </p>

            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              What would you like to know?
            </h2>

            <p className="mt-4 text-lg leading-8 text-muted">
              Explore everyday work-related topics explained in simple
              language.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <a
                  href="#resources"
                  key={topic.title}
                  className="group animate-fadeUp rounded-3xl border border-navy/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-cardHover"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${topic.color} text-navy transition duration-300 group-hover:scale-110`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold text-navy">
                    {topic.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {topic.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-coral">
                    Explore topic
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL PROTECTION */}
      <section
        id="protection"
        className="bg-teal/20 px-6 py-20 sm:px-10"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
              <ShieldCheck size={34} />
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-navy">
              Looking beyond today
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Your work. Your future. Your protection.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-navy/80">
              Social protection helps people manage risks and uncertainty
              throughout their working lives. Yet many workers still have
              limited access to insurance, pensions and other forms of support.
            </p>

            <p className="mt-4 text-lg leading-8 text-navy/80">
              SiseGidi helps make these topics easier to understand, including
              options available to workers outside traditional employment.
            </p>

            <a
              href="#resources"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-navy-light"
            >
              Explore protection resources
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-coral">
                Useful information
              </p>

              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                Start with the basics.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-muted">
                Simple guides to help you understand important issues at work.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-bold text-navy">
              More resources coming soon
              <Sparkles size={17} className="text-coral" />
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <div
                  key={resource.title}
                  className="animate-fadeUp rounded-3xl border border-navy/5 bg-cream p-7 transition duration-300 hover:-translate-y-2 hover:shadow-cardHover"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${resource.color} text-navy`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-navy">
                    {resource.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {resource.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-coral">
                    Coming soon
                    <ArrowRight size={17} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-navy px-6 py-20 text-center sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl animate-fadeUp">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sunshine text-navy">
            <Users size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-sunshine">
            SiseGidi
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Every worker deserves to know better.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            Understanding your rights is a good place to start. Explore, learn
            and share useful information with other workers.
          </p>

          <a
            href="#topics"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-sunshine px-8 py-4 font-extrabold text-navy transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Explore SiseGidi
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
