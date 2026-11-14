import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import {
  Target,
  ShieldCheck,
  Users2,
  ClipboardCheck,
  MessageSquareWarning,
  FileCheck,
  Scale,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-beige">
        <div className="section grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
              A free tool so workers can see how platforms really treat them
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              Ṣiṣẹ́ gidi is an independent, open project by TheBranchesHR. Workers share what the
              job is really like. Platforms answer the same questions and show proof. We put both
              side by side, so riders, drivers and freelancers can decide with real information.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG-20260923-WA0098.jpg"
              alt="Ṣiṣẹ́ gidi initiative"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section grid gap-8 sm:grid-cols-3">
        {[
          {
            icon: Target,
            title: "Our purpose",
            text: "Help workers know what they are signing up for, and help platforms show that they are fair.",
          },
          {
            icon: ShieldCheck,
            title: "What we are not",
            text: "We do not certify anyone, we do not rank platforms, and we are not against business. We show what workers and platforms say, side by side.",
          },
          {
            icon: Users2,
            title: "Who it is for",
            text: "Riders, drivers and freelancers first. Also platform companies, researchers, policymakers and labour groups.",
          },
        ].map((item) => (
          <div key={item.title} className="card">
            <item.icon className="text-forest" size={24} />
            <h3 className="mt-4 text-lg font-semibold text-forest">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-beige">
        <div className="section grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our approach"
            title="Built on a world standard for platform work"
            description="Our questions come from the ILO’s Decent Work Agenda and ILO Convention 193 on decent work in the platform economy. We adapted them to how platform work really looks in Sub-Saharan Africa."
          />
          <SectionHeading
            eyebrow="Our method"
            title="Workers’ voices, plus proof from the platform"
            description="Every score uses two things: what the company tells us and shows us, and anonymous feedback from workers on that platform. A real person on our team reviews both before anything goes public."
          />
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="How we check"
          title="A company’s own answers are only the start"
          description="A platform cannot give itself the Worker-checked label. Here is how a profile moves from In Progress to Worker-checked."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="card">
            <ClipboardCheck className="text-forest" size={22} />
            <h3 className="mt-4 text-base font-semibold text-forest">1. The platform answers</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              A platform answers our questions on the seven points. Its profile goes up right away
              as In Progress. That means these are the company’s own answers and nobody has
              checked them yet.
            </p>
          </div>
          <div className="card">
            <MessageSquareWarning className="text-forest" size={22} />
            <h3 className="mt-4 text-base font-semibold text-forest">2. Workers back it up</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              To get the Worker-checked label, enough workers must share anonymous feedback that
              matches the company’s answers. The company’s word alone is not enough.
            </p>
          </div>
          <div className="card">
            <FileCheck className="text-forest" size={22} />
            <h3 className="mt-4 text-base font-semibold text-forest">3. A person reviews it</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              A real person on our team reads the proof and the worker feedback together. Nothing
              is given automatically.
            </p>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/60">
          If workers say something very different from the company, the profile stays In Progress
          until the gap is explained. This is on purpose. The label only means something if it is
          hard to get.
        </p>
      </section>

      <section className="bg-beige">
        <div className="section">
          <SectionHeading
            eyebrow="Other projects"
            title="How Ṣiṣẹ́ gidi fits with work that already exists"
            description="Ṣiṣẹ́ gidi does not stand alone. It builds on work others have done, and we want to be clear about how we are different."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card">
              <Scale className="text-forest" size={22} />
              <h3 className="mt-4 text-base font-semibold text-forest">Fairwork (Oxford Internet Institute)</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Fairwork is a respected research project run by the Oxford Internet Institute and
                partners. Its researchers rate platforms against five fair work principles and
                publish regular rating reports. It already covers several African countries,
                including Nigeria, Kenya, Ghana and South Africa. Ṣiṣẹ́ gidi works differently. Any
                platform can start at any time, workers can share their experience at any time,
                profiles update as new feedback comes in, and the questions follow ILO Convention
                193. We see Fairwork as work to build on, not to replace.
              </p>
            </div>
            <div className="card">
              <Scale className="text-forest" size={22} />
              <h3 className="mt-4 text-base font-semibold text-forest">Great Place to Work</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Great Place to Work is a well-known paid workplace culture certification used
                across many industries. It is based on employee surveys. Ṣiṣẹ́ gidi is free and
                open, focuses only on platform and gig work, and is built around the ILO’s Decent
                Work Agenda and Convention 193 instead of a private survey method.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section max-w-3xl">
        <Quote className="text-forest" size={28} />
        <h2 className="mt-4 text-2xl font-semibold text-forest sm:text-3xl">Our name: Ṣiṣẹ́ gidi</h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Ṣiṣẹ́ gidi is Yoruba for “do good work.” We chose a name from a Nigerian language on
          purpose. The platforms we look at, the workers whose feedback shapes every score, and
          the research behind this project are all rooted in Sub-Saharan Africa. The name should
          be too.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          “Do good work” is also the whole point. It is not a badge a company earns once and shows
          off forever. It is something you keep doing. Every answer a platform gives, every piece
          of worker feedback, and every Worker-checked label is a small act of doing exactly that,
          not just saying it.
        </p>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG-20260819-WA0005.jpg"
              alt="Founder of Ṣiṣẹ́ gidi"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="mt-4 text-3xl font-semibold text-forest">Started by a researcher, not a company</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              Ṣiṣẹ́ gidi grew out of original research on platform work in Sub-Saharan Africa. It
              was started and is run by Florence Uduehi Anuoluwapo, an employment relations student
              and founder of TheBranchesHR. The goal is to turn that research into a free tool that
              workers, platforms and policymakers can all use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
          }
