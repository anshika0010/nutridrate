import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBalanceScale,
  FaComments,
  FaFileContract,
  FaFlask,
  FaMicroscope,
  FaPencilRuler,
  FaSeedling,
  FaShippingFast,
  FaStopwatch,
  FaUserTie,
} from "react-icons/fa";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Private Label | Nutri Next",
  description:
    "Our 10 Commandments for private label partners: equal priority for every customer, direct team access, regulatory support, in-house R&D and packaging design.",
};

const HERO_IMAGE =
  "https://thenutrinext.com/wp-content/uploads/2023/01/facility-gallery1-1024x509.jpg";

const commandments: { icon: IconType; text: string }[] = [
  {
    icon: FaBalanceScale,
    text: "We value and give equal importance to all our customers ranging from smallest to biggest.",
  },
  {
    icon: FaUserTie,
    text: "Our customers have direct access to all members of the team ranging from Marketing, R&D to the Top Management.",
  },
  {
    icon: FaStopwatch,
    text: "We together with our partners work on detailed project timelines & continuously look for solutions to reduce lead time.",
  },
  {
    icon: FaFileContract,
    text: "We have a dedicated team proactively working with our customers to ensure all regulatory guidelines are met.",
  },
  {
    icon: FaFlask,
    text: "Our top class R&D team is continuously working on developing new formulations and stay up to date with global trends.",
  },
  {
    icon: FaShippingFast,
    text: "Our successful standard operating procedure ensures timely delivery of shipments to our customers, thereby ensuring successful product launches.",
  },
  {
    icon: FaComments,
    text: "Our collective weekly team review meetings of R&D, Sales, Quality control, Operations, Production & Marketing guarantees transparency across the organization and smooth functioning of all processes.",
  },
  {
    icon: FaMicroscope,
    text: "It is a continuous practice to undertake extensive research to come out with better and newer products on a continuous basis. The in-house research team conducts research on herbs, formulations, manufacturing processes etc. The research lab has also tied up with bio-technology facilities at Universities to ensure excellent quality in all its products.",
  },
  {
    icon: FaSeedling,
    text: "Nutri Next has its own herbal farms where it grows majority of its herbs under stringent quality control. The facilities are ISO 9001:2008, WHO-GMP, HACCP certified by the British Standards Institution and GMP certified by the Indian Drug Authorities.",
  },
  {
    icon: FaPencilRuler,
    text: "In-house design team for design & development of packaging material like labels, containers etc.",
  },
];

export default function PrivateLabelPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHero
        title="Private Label"
        subtitle="Our products and packing + your brand."
        image={HERO_IMAGE}
      />

      {/* Intro */}
      <section className="bg-white py-16 text-[15px] leading-relaxed text-neutral-600">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl text-neutral-800">Our 10 Commandments</h2>
          <p className="mt-5">
            At Nutri Next we are committed to giving you a wonderful experience while working with
            our team. For this we have come up with our{" "}
            <strong className="font-bold text-neutral-700">10 Commandments</strong> to ensure you
            are most comfortable at all levels of working with us. We look forward to working with
            you.
          </p>
        </div>
      </section>

      {/* Commandments */}
      <section
        className="relative bg-neutral-50 bg-cover bg-center bg-no-repeat py-16 text-[15px] leading-relaxed text-neutral-600"
        style={{ backgroundImage: "url('/images/formulas-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
        <ol className="relative z-10 mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {commandments.map(({ icon: Icon, text }, i) => (
            <li
              key={i}
              className="flex gap-5 bg-white/70 p-6 transition-colors duration-200 hover:bg-sky-100/70"
            >
              <div className="flex shrink-0 flex-col items-center gap-3">
                <span className="text-3xl leading-none text-[#0096d6]" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" className="h-8 w-8 text-slate-500" />
              </div>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl">Ready to launch your own brand?</h2>
            <p className="mt-2 text-[15px] text-white/80">
              We look forward to working with you.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-8 text-sm text-black transition-colors hover:bg-neutral-200"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
}
