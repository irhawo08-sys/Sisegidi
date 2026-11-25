
import Link from "next/link";
import {
  ArrowLeft,
  Bike,
  Car,
  Laptop,
  ShieldCheck,
  Wallet,
  Users,
  BookOpen,
} from "lucide-react";

export default function PlatformWorkPage() {
  return (
    <div className="bg-cream text-ink">
      {/* HERO */}
      <section className="bg-navy text-cream">
        <div className="section">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-sunshine"
          >
            <ArrowLeft size={16} />
            Back to Learning Space
          </Link>

          <p className="eyebrow mt-10 text-sunshine">
            Understanding different kinds of work
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            What is platform work?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Have you ever booked a ride, ordered food or hired someone
            online? Behind many of these services are workers who use
            digital platforms to find and carry out jobs.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section max-w-4xl">
        <h2 className="text-2xl font-bold text-navy">
          Understanding platform work
        </h2>

        <p className="mt-5 leading-8 text-ink/75">
          Platform work is work that is organised or provided through
          a digital platform. The platform connects people who need a
          service with people who are willing to provide it.
        </p>

        <p className="mt-4 leading-8 text-ink/75">
          These platforms may operate through mobile applications or
          websites. They can connect workers with customers for
          transport, deliveries, household services, professional
          tasks and many other jobs.
        </p>

        <div className="mt-8 rounded-2xl bg-teal/15 p-6">
          <h3 className="font-bold text-navy">Simply put</h3>
          <p className="mt-2 leading-7 text-ink/75">
            Platform work allows people to find or carry out jobs
            through digital platforms instead of relying only on
            traditional workplaces.
          </p>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">Examples around us</p>

          <h2 className="mt-3 text-3xl font-bold text-navy">
            Where can we find platform work?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-ink/70">
            Platform work takes different forms. Here are some
            examples you may already know.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card">
              <Car size={30} className="text-coral" />
              <h3 className="mt-5 text-xl font-bold text-navy">
                Ride-hailing
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                Drivers use apps to connect with passengers who
                need transportation.
              </p>
            </div>

            <div className="card">
              <Bike size={30} className="text-coral" />
              <h3 className="mt-5 text-xl font-bold text-navy">
                Delivery services
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                Riders receive delivery requests for food,
                groceries, parcels and other items.
              </p>
            </div>

            <div className="card">
              <Laptop size={30} className="text-coral" />
              <h3 className="mt-5 text-xl font-bold text-navy">
                Online freelancing
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                Freelancers find clients online for writing,
                design, programming and other professional tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section max-w-4xl">
        <p className="eyebrow">The process</p>

        <h2 className="mt-3 text-3xl font-bold text-navy">
          How does platform work happen?
        </h2>

        <div className="mt-8 space-y-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunshine text-navy font-bold">
              1
            </div>
            <div>
              <h3 className="font-bold text-navy">Joining a platform</h3>
              <p className="mt-2 leading-7 text-ink/70">
                A worker registers or creates a profile on a
                platform, depending on its requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunshine text-navy font-bold">
              2
            </div>
            <div>
              <h3 className="font-bold text-navy">Receiving work</h3>
              <p className="mt-2 leading-7 text-ink/70">
                The platform may connect the worker with a customer
                or make available tasks that the worker can accept.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunshine text-navy font-bold">
              3
            </div>
            <div>
              <h3 className="font-bold text-navy">Providing the service</h3>
              <p className="mt-2 leading-7 text-ink/70">
                The worker completes the agreed task or service.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunshine text-navy font-bold">
              4
            </div>
            <div>
              <h3 className="font-bold text-navy">Receiving payment</h3>
              <p className="mt-2 leading-7 text-ink/70">
                Payment arrangements depend on the platform,
                the service and the agreement with the customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES AND CHALLENGES */}
      <section className="bg-sunshine/15">
        <div className="section">
          <h2 className="text-3xl font-bold text-navy">
            Opportunities and challenges
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-ink/70">
            Platform work creates opportunities for many people,
            but it can also come with difficulties.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-navy">
                Opportunities
              </h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-ink/70">
                <li>Access to different work opportunities.</li>
                <li>Flexible working arrangements in some cases.</li>
                <li>Opportunities to reach customers beyond one's immediate area.</li>
                <li>Possibilities for additional income.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-bold text-navy">
                Challenges
              </h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-ink/70">
                <li>Unpredictable earnings and work availability.</li>
                <li>Work-related costs such as fuel, data and maintenance.</li>
                <li>Decisions influenced by ratings and platform systems.</li>
                <li>Limited access to some forms of social protection.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKERS RIGHTS */}
      <section className="section max-w-4xl">
        <ShieldCheck size={34} className="text-coral" />

        <h2 className="mt-5 text-3xl font-bold text-navy">
          What about workers' rights and protection?
        </h2>

        <p className="mt-5 leading-8 text-ink/75">
          Working through a digital platform does not mean that
          workers' welfare should be ignored. Fair treatment,
          safe working conditions, clear payment arrangements
          and access to appropriate social protection remain
          important issues.
        </p>

        <p className="mt-4 leading-8 text-ink/75">
          Depending on the applicable law and the nature of the
          working relationship, different legal protections may
          apply. The label given to a worker by a platform does
          not, by itself, settle every question about their
          employment rights.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-teal/15 p-6">
            <Wallet size={27} className="text-navy" />
            <h3 className="mt-4 font-bold text-navy">
              Social protection
            </h3>
            <p className="mt-2 leading-7 text-ink/70">
              Pensions, insurance and other forms of support can
              help workers manage risks throughout their working lives.
            </p>
          </div>

          <div className="rounded-2xl bg-coral/10 p-6">
            <Users size={27} className="text-navy" />
            <h3 className="mt-4 font-bold text-navy">
              Fair treatment
            </h3>
            <p className="mt-2 leading-7 text-ink/70">
              Workers deserve clear information, dignity,
              respect and fair consideration of their concerns.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-navy text-center text-cream">
        <div className="section">
          <BookOpen size={34} className="mx-auto text-sunshine" />

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
            Understanding your work is a good place to start.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-cream/70">
            Platform work is changing how people find and carry
            out jobs. Understanding how it works can help workers
            make more informed decisions about their working lives.
          </p>

          <Link
            href="/insights"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sunshine px-7 py-3 font-bold text-navy transition hover:bg-white"
          >
            Back to Learning Space
            <ArrowLeft size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
