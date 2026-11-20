
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
  BriefcaseBusiness,
  Lightbulb,
  Users,
  Sparkles,
} from "lucide-react";

const topics = [
  {
    icon: FileText,
    title: "Employment rights",
    description: "Contracts, working hours, leave and what you should know.",
    color: "bg-sage",
  },
  {
    icon: Wallet,
    title: "Pay and benefits",
    description: "Salaries, deductions, minimum wage and employee benefits.",
    color: "bg-butter",
  },
  {
    icon: ShieldCheck,
    title: "Social protection",
    description: "Pensions, insurance and protection for life's uncertainties.",
    color: "bg-lavender",
  },
  {
    icon: HardHat,
    title: "Workplace safety",
    description: "Your safety, health and wellbeing at work.",
    color: "bg-peach",
  },
  {
    icon: HeartHandshake,
    title: "Fair treatment",
    description: "Dignity, equality and respect in the workplace.",
    color: "bg-rose",
  },
  {
    icon: BriefcaseBusiness,
    title: "Different kinds of work",
    description: "Understanding informal, freelance and platform work.",
    color: "bg-sage",
  },
];

const resources = [
  {
    type: "WORKPLACE BASICS",
    title: "Do you really understand your employment contract?",
    description: "Let's break down what an employment contract means and why it matters.",
    icon: FileText,
    color: "bg-sage",
  },
  {
    type: "YOUR FUTURE",
    title: "Pensions and insurance, explained simply.",
    description: "A simple introduction to the different ways workers can protect themselves.",
    icon: ShieldCheck,
    color: "bg-lavender",
  },
  {
    type: "DECENT WORK",
    title: "What does it mean to have decent work?",
    description: "It's about more than having a job. Let's explore what decent work looks like.",
    icon: BookOpen,
    color: "bg-butter",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="bg-[#F8E9DD]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">

          <div className="animate-fadeUp">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-forest">
              <Sparkles size={14} className="text-gold-dark" />
              YOUR WORK. YOUR RIGHTS. YOUR PROTECTION.
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl">
              Work is a big part of life.
              <span className="text-forest-light"> Know what matters.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-ink/75 sm:text-lg">
              Have questions about your work? Want to understand your rights
              or how to protect your future? You're in the right place.
              Let's make sense of it together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#topics" className="btn-primary">
                Let's get started <ArrowRight size={17} />
              </Link>

              <Link href="#about" className="btn-secondary">
                Get to know us
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8E9DD] bg-sage text-forest">
                  <Users size={16}/>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8E9DD] bg-butter text-forest">
                  <BookOpen size={16}/>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8E9DD] bg-lavender text-forest">
                  <ShieldCheck size={16}/>
                </span>
              </div>
              <p className="text-xs text-ink/65">
                Useful information. Simple explanations. Free access.
              </p>
            </div>
          </div>

          <div className="relative animate-fadeUp delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=85&w=1200&auto=format&fit=crop"
                alt="People working and collaborating"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-butter p-3">
                  <Lightbulb size={24} className="text-forest"/>
                </div>
                <div>
                  <p className="text-sm font-bold text-forest">
                    Knowledge is power.
                  </p>
                  <p className="text-xs text-ink/60">
                    Start with what you know.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WELCOME */}
      <section id="about" className="section">
        <div className="mx-auto max-w-3xl text-center animate-fadeUp">
          <span className="eyebrow">A LITTLE ABOUT US</span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Because understanding your work shouldn't be difficult.
          </h2>

          <p className="mt-6 text-base leading-8 text-ink/70 sm:text-lg">
            From the office to the market, from the factory to the road,
            every worker deserves access to useful information.
            Ṣiṣẹ́ gidi makes labour rights, employment and social protection
            easier to understand, one topic at a time.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      <section id="topics" className="bg-[#FFFDF8]">
        <div className="section">

          <div className="flex flex-col gap-3">
            <span className="eyebrow">LET'S START SOMEWHERE</span>
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
              What's on your mind today?
            </h2>
            <p className="max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
              Pick a topic. Explore at your own pace. There's no complicated
              language here.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Link
                href="#resources"
                key={topic.title}
                className={`${topic.color} group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fadeUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80">
                    <topic.icon size={26} className="text-forest"/>
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-forest/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold">{topic.title}</h3>

                <p className="mt-3 text-sm leading-7 text-ink/70">
                  {topic.description}
                </p>

                <p className="mt-5 text-xs font-bold text-forest">
                  EXPLORE TOPIC →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROTECTION */}
      <section id="protection" className="bg-[#244B3B] text-white">
        <div className="section grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#F5D887]">
              THINKING ABOUT TOMORROW?
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              You work hard. Your future deserves protection too.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/75">
              Insurance, pensions and social protection can feel complicated.
              We're here to help you understand what they mean and why they
              matter, whether you work in the formal or informal sector.
            </p>

            <Link
              href="#resources"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F1E5C9] px-7 py-3.5 text-sm font-bold text-forest transition-all hover:-translate-y-1 hover:bg-white"
            >
              Learn about protection <ArrowRight size={17}/>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Wallet, title: "Pensions", text: "Planning for your later years.", bg: "bg-[#F1E5C9]" },
              { icon: ShieldCheck, title: "Insurance", text: "Understanding financial protection.", bg: "bg-[#E9E1F0]" },
              { icon: HeartHandshake, title: "Health cover", text: "Learning about health protection.", bg: "bg-[#E7BFA5]" },
              { icon: Users, title: "Worker welfare", text: "Understanding worker wellbeing.", bg: "bg-[#DCE8D8]" },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} rounded-3xl p-5 text-forest transition-transform duration-300 hover:-translate-y-1`}>
                <item.icon size={27}/>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="section">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">A GOOD PLACE TO START</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Let's learn something new.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">
              Simple explanations for questions that matter in everyday working life.
            </p>
          </div>
          <span className="text-xs font-semibold text-forest/60">
            LEARN AT YOUR OWN PACE
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="overflow-hidden rounded-3xl border border-forest/10 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`${resource.color} flex h-44 items-center justify-center`}>
                <resource.icon
                  size={65}
                  strokeWidth={1.3}
                  className="text-forest transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-bold tracking-widest text-forest-light">
                  {resource.type}
                </span>

                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/65">
                  {resource.description}
                </p>

                <Link
                  href="#topics"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest hover:gap-3 transition-all"
                >
                  Explore this topic <ArrowRight size={16}/>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HUMAN SIDE OF WORK */}
      <section className="bg-[#F2E9F0]">
        <div className="section grid items-center gap-12 lg:grid-cols-2">

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=85&w=1200&auto=format&fit=crop"
              alt="People working together"
              width={800}
              height={600}
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>

          <div>
            <span className="eyebrow">PEOPLE FIRST. ALWAYS.</span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Behind every job is a human story.
            </h2>

            <p className="mt-5 text-base leading-8 text-ink/70">
              Work is about more than targets, salaries and productivity.
              It's about people, their experiences, their wellbeing and
              their ability to earn a living with dignity.
            </p>

            <p className="mt-4 text-base leading-8 text-ink/70">
              We believe those experiences deserve attention.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FFF8ED]">
        <div className="section text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-sage">
            <BookOpen size={29} className="text-forest"/>
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
            A little knowledge can make a big difference.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink/65">
            Start exploring. Ask questions. Learn something that helps you
            understand your work better.
          </p>

          <Link href="#topics" className="btn-primary mt-8">
            Explore SiseGidi <ArrowRight size={17}/>
          </Link>
        </div>
      </section>

    </main>
  );
}
