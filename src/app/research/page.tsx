
import {
  BookOpen,
  FileText,
  Globe2,
  Landmark,
  ExternalLink,
} from "lucide-react";

const resources = [
  {
    category: "International labour standards",
    title: "Decent Work and the 2030 Agenda",
    description:
      "Understand the ILO's Decent Work Agenda, including employment opportunities, rights at work, social protection and social dialogue.",
    organisation: "International Labour Organization",
    url: "https://www.ilo.org/decentwork",
  },
  {
    category: "Nigeria country research",
    title: "Nigeria Decent Work Country Programme 2023–2027",
    description:
      "Explore Nigeria's priorities for job creation, workers' rights and extending social protection.",
    organisation: "International Labour Organization",
    url: "https://www.ilo.org/resource/other/decent-work-country-programme-dwcp-nigeria-2023-2027",
  },
  {
    category: "Employment policy",
    title: "Nigeria's National Employment Policy 2025",
    description:
      "Read about Nigeria's employment policy framework and its approach to inclusive growth and decent work.",
    organisation: "International Labour Organization",
    url: "https://www.ilo.org/resource/news/nigeria-launches-national-employment-policy-2025-bold-step-toward-inclusive",
  },
  {
    category: "Social protection",
    title: "Social Protection in Nigeria",
    description:
      "Explore information on Nigeria's social protection system, coverage gaps and national priorities.",
    organisation: "ILO Social Protection Platform",
    url: "https://www.social-protection.org/gimi/gess/ShowCountryProfile.action?iso=NG",
  },
  {
    category: "Workers' compensation",
    title: "Employees' Compensation Scheme",
    description:
      "Learn about the Nigerian social insurance institution responsible for administering compensation for employment-related injuries, diseases and disabilities.",
    organisation: "Nigeria Social Insurance Trust Fund",
    url: "https://www.nsitf.gov.ng/about",
  },
  {
    category: "Labour administration",
    title: "Social Security and Cooperative Development",
    description:
      "Explore the Federal Ministry of Labour and Employment's responsibilities relating to social security and cooperative development.",
    organisation: "Federal Ministry of Labour and Employment",
    url: "https://labour.gov.ng/professional-operations-departments/social-security-cooperative-development/",
  },
  {
    category: "Labour research and statistics",
    title: "ILO Nigeria Country Portal",
    description:
      "Find country information, labour publications, policy updates and other resources relating to work in Nigeria.",
    organisation: "International Labour Organization",
    url: "https://www.ilo.org/regions-and-countries/africa/nigeria",
  },
];

export default function ResearchPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section">
          <p className="eyebrow">Research & Policy Library</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Explore the evidence behind the world of work.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Find research, policy documents, labour standards and publications
            that help explain employment, workers' rights, social protection
            and the changing world of work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mb-10">
          <p className="eyebrow">Explore credible sources</p>
          <h2 className="mt-3 text-2xl font-semibold text-navy sm:text-3xl">
            Research and policy resources
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
            The materials below link to official institutions and their
            publications. Visit the original sources for full documents,
            updates and further reading.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-teal/15 px-3 py-1 text-xs font-medium text-navy">
                  {resource.category}
                </span>
                <FileText size={20} className="shrink-0 text-coral" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-navy">
                {resource.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                {resource.description}
              </p>

              <div className="mt-6 border-t border-navy/10 pt-4">
                <p className="text-xs text-muted">
                  {resource.organisation}
                </p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-coral"
                >
                  Visit original source
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="section">
          <div className="max-w-2xl">
            <Globe2 size={30} className="text-sunshine" />
            <h2 className="mt-5 text-3xl font-semibold text-cream">
              Why research matters
            </h2>
            <p className="mt-4 leading-relaxed text-cream/75">
              Good information helps workers, students, researchers and
              policymakers understand the realities of working life. It also
              supports better conversations about fair treatment, decent
              working conditions and social protection.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-col gap-5 rounded-2xl border border-navy/10 bg-white p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunshine/25">
            <Landmark size={24} className="text-navy" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy">
              Learn beyond the documents.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Visit the SiseGidi Learning Space for simpler explanations of
              important issues affecting workers across different occupations.
            </p>
            <a
              href="/insights"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-navy"
            >
              Explore learning materials
              <BookOpen size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
