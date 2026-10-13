import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaCheckCircle, FaClipboardCheck, FaCogs, FaMicroscope, FaVial } from "react-icons/fa";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Quality | Nutri Next",
  description:
    "Every Nutri Next product is manufactured under strict quality control, from raw material testing to finished product validation.",
};

const UPLOADS = "https://thenutrinext.com/wp-content/uploads/2023/01";

const qualitySteps: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FaVial,
    title: "Raw material testing",
    text: "All incoming raw materials are tested and validated for stringent Pharmacopoeial quality parameters (Physico-chemical, Active constituent and Microbiological).",
  },
  {
    icon: FaCogs,
    title: "In-process checks",
    text: "During all stages of the manufacturing process, in-process quality checks are done and critical control points are monitored.",
  },
  {
    icon: FaMicroscope,
    title: "Finished product testing",
    text: "Finished products are tested for physico-chemical, active constituent, microbiological and heavy metal analysis and are validated through chromatographic techniques.",
  },
  {
    icon: FaClipboardCheck,
    title: "Good Lab Practices",
    text: "The QC & IPQC labs stringently follow Good Lab Practices (GLP).",
  },
];

const plantFeatures = [
  "Clean Room with controlled RH and Temperature conditions",
  "Epoxy flooring",
  "Flush walls and windows",
  "Aseptic manufacturing standards",
  "Stringent non-contamination policies",
  "Highly automated machinery",
  "Separate R&D wing",
  "Rigorous end-to-end quality controls",
];

export default function QualityPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHero
        title="Quality"
        subtitle="Quality is the hallmark of The Nutrinext."
        image={`${UPLOADS}/quality-gallery1-1024x428.jpg`}
      />

      {/* Intro */}
      <section className="bg-white py-16 text-[15px] leading-relaxed text-neutral-600">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl text-neutral-800">Quality is the hallmark of The Nutrinext</h2>
            <p className="mt-5">
              All the products are manufactured under{" "}
              <strong className="font-bold text-neutral-700">
                strict surveillance of the quality control department
              </strong>
              . The manufacturing processes are authenticated and the final products validated
              through clinical trials thus ensuring the efficacy and safety of all our products.
            </p>
            <p className="mt-4">
              We focus intensely on our{" "}
              <strong className="font-bold text-neutral-700">quality and traceability</strong>, and
              our integrity and capabilities in these areas are acknowledged in more than 25
              countries.
            </p>
          </div>

          <div className="relative aspect-[1003/857] w-full overflow-hidden">
            <Image
              src={`${UPLOADS}/quality-gallery3.jpg`}
              alt="Quality control technician running microbiological tests"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quality process */}
      <section
        className="relative bg-neutral-50 bg-cover bg-center bg-no-repeat py-16 text-[15px] leading-relaxed text-neutral-600"
        style={{ backgroundImage: "url('/images/formulas-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h2 className="text-3xl text-neutral-800">Our quality process</h2>
          <p className="mt-4 max-w-3xl">
            To ensure products of the highest quality, efficacy and safety, every batch is checked
            at each stage, from raw material to finished product.
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="bg-white/70 p-5 transition-colors duration-200 hover:bg-sky-100/70"
              >
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="h-10 w-10 text-slate-500" />
                  <span className="text-3xl text-neutral-300" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg text-neutral-800">{title}</h3>
                <p className="mt-2">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl text-neutral-800">Certifications</h2>
          <div className="relative mt-8 aspect-[1024/226] w-full">
            <Image
              src={`${UPLOADS}/quality-banner-1024x226.jpg`}
              alt="Certifications: WHO-GMP, ISO 9001:2008, HACCP, ECOCERT, DSIR and Halal India"
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Plant */}
      <section className="bg-neutral-900 py-16 text-[15px] leading-relaxed text-white/85">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div className="relative aspect-[1024/509] w-full overflow-hidden">
            <Image
              src={`${UPLOADS}/facility-gallery1-1024x509.jpg`}
              alt="Automated stainless steel processing equipment in the manufacturing plant"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl uppercase text-white">This state-of-the-art plant has</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {plantFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <FaCheckCircle
                    aria-hidden="true"
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0096d6]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
