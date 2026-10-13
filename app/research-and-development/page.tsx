import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Research & Development | nutridrate",
  description:
    "nutridrate is a research based company. Every proprietary formulation is developed by in-house research across tablets, capsules, syrups, creams and more.",
};

const strengths = [
  {
    title: "Modern scientific instruments",
    text: "A research based company equipped with the most modern instruments and supported by a highly qualified, talented team of scientists.",
  },
  {
    title: "Always developing",
    text: "Our R&D department is continuously developing new, innovative formulations and dosage forms for various ailments.",
  },
];

const dosageGroups = [
  {
    name: "Oral solids",
    items: ["Tablets", "Capsules", "Caplets", "Granules", "Powders"],
  },
  {
    name: "Liquids and oils",
    items: ["Syrups", "Dry syrups", "Oils"],
  },
  {
    name: "Topical and personal care",
    items: [
      "Creams",
      "Gels",
      "Ointments",
      "Lotions",
      "Shampoos",
      "Oral care products",
    ],
  },
];

export default function ResearchAndDevelopmentPage() {
  return (
    <main className={`${dmSans.className} bg-white text-slate-700`}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b2a4a]">
        <Image
          src="/images/rnd-banner.jpg" // lab banner in /public/images
          alt="Scientists in protective clothing working in a laboratory"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2a4a] via-[#0b2a4a]/80 to-[#0b2a4a]/20" />

        <div className="mx-auto max-w-6xl px-6 pb-32 pt-12 md:pb-40 md:pt-16">
          <nav aria-label="Breadcrumb" className="text-sm text-sky-100/80">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="rounded underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Research &amp; Development
              </li>
            </ol>
          </nav>

          <h1 className="mt-10 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Research &amp; Development
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sky-50/90">
            Every nutridrate formulation starts in our own laboratories.
          </p>
        </div>
      </section>

      {/* Intro block (overlaps the hero) */}
      <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-6 md:-mt-24">
        <div className="grid gap-10 bg-[#0094d9] p-8 text-white shadow-xl shadow-sky-900/20 md:grid-cols-5 md:gap-14 md:p-14">
          <div className="md:col-span-3">
            <p className="text-2xl font-semibold leading-snug md:text-4xl md:leading-tight">
              The R&amp;D department is the backbone of the organization.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              All proprietary formulations that the company has launched since
              inception have been developed by in-house research.
            </p>
          </div>

          <ul className="space-y-8 md:col-span-2">
            {strengths.map((item) => (
              <li key={item.title} className="border-l-2 border-white/60 pl-5">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-white/90">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dosage forms */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-full w-full border-2 border-[#0094d9]"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sky-50">
              <Image
                src="/images/research.jpeg"
                alt="Doctor holding a stethoscope over a map of connected healthcare locations"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-[#0b2a4a] md:text-4xl">
              One R&amp;D centre, many dosage forms
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed">
              Our R&amp;D centre can develop products in the following dosage
              forms and applications.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-3">
              {dosageGroups.map((group) => (
                <div key={group.name} className="border-t-2 border-[#0094d9] pt-4">
                  <h3 className="font-semibold text-[#0b2a4a]">{group.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-slate-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="bg-[#0b2a4a] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              Our Scientific Advisory Board
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-sky-50/90">
              Renowned scientists from all around the world guide our research.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0094d9] px-7 py-3 font-semibold text-white transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </main>
  );
}