import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaBullseye,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
  FaEye,
  FaGlobeAsia,
  FaHospital,
  FaUsers,
} from "react-icons/fa";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Nutri Next",
  description:
    "Nutri Next manufactures research based herbal healthcare and personal care products with unparalleled quality, efficacy and safety.",
};

const HERO_IMAGE =
  "https://thenutrinext.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-23-at-2.59.59-PM-1.jpeg";
const INTRO_IMAGE =
  "https://thenutrinext.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-23-at-2.59.56-PM.jpeg";

const stats: { icon: IconType; value: string; label: string }[] = [
  { icon: FaCalendarAlt, value: "2022", label: "Established" },
  { icon: FaGlobeAsia, value: "25+", label: "Countries served" },
  { icon: FaUsers, value: "Millions", label: "of customers" },
];

const missionVision: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FaBullseye,
    title: "Mission",
    text: "To provide high quality, high efficacy R&D based 100% natural products for curing ailments of the modern world all around the globe in a socially responsible manner.",
  },
  {
    icon: FaEye,
    title: "Vision",
    text: "To become the #1 Health & Wellness Company in the world based on the highest number of patents, highest level of customer satisfaction and most satisfied, motivated, happy and successful Employee Family.",
  },
];

const productCategories = [
  "Patented Herbal formulations",
  "Herbal Supplements",
  "Organic Herbs",
  "Single Herbs",
  "Classical Ayurvedic Products",
  "Personal Care products",
];

const productForms = [
  "Tablets",
  "Capsules",
  "Syrups",
  "Powders",
  "Oils",
  "Ointments",
  "Creams",
  "Gels",
];

const certifications = [
  "ISO 9001:2008",
  "WHO GMP",
  "HACCP",
  "GMP – Indian Drug Authority",
  "ECOCERT Organic",
];

const institutions = [
  { name: "All India Institute of Medical Sciences", place: "New Delhi" },
  { name: "Banaras Hindu University", place: "Varanasi" },
  { name: "Rishikul Ayurvedic Hospital", place: "Haridwar" },
  { name: "Holy Family Hospital", place: "New Delhi" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl text-neutral-800">{children}</h2>;
}

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHero
        title="About Us"
        subtitle="Research based herbal healthcare and personal care products, made with modern standardized processes."
        image={HERO_IMAGE}
      />

      {/* Who we are */}
      <section className="bg-white py-16 text-[15px] leading-relaxed text-neutral-600">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <SectionHeading>Who we are</SectionHeading>
            <p className="mt-5">
              Established in 2022, <strong className="font-bold text-neutral-700">Nutri Next</strong>{" "}
              manufactures{" "}
              <strong className="font-bold text-neutral-700">
                research based herbal healthcare and personal care products
              </strong>
              . Nutri Next was established with a clear mission to provide customers around the
              globe natural products with unparalleled quality, highest efficacy and safety. This
              has been made possible with ultra-modern infrastructure, stringent quality controls
              and a passion for research and clinical evidence.
            </p>
            <p className="mt-4">
              Traditional and alternative remedies used effectively over thousands of years have
              proven the rich benefits inherent in Mother Nature. Nutri Next is offering these
              traditional remedies with modern standardized processes to ensure safety and
              efficacy. This journey has brought our products to millions of customers in over 25
              countries across the globe.
            </p>

            <ul className="mt-8 grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <li key={label} className="border-l-2 border-[#0096d6] pl-3">
                  <Icon aria-hidden="true" className="h-5 w-5 text-slate-500" />
                  <p className="mt-2 text-2xl text-neutral-800">{value}</p>
                  <p className="text-sm">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={INTRO_IMAGE}
              alt="Nutri Next clean-room manufacturing facility"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="relative bg-neutral-50 bg-cover bg-center bg-no-repeat py-16 text-[15px] leading-relaxed text-neutral-600"
        style={{ backgroundImage: "url('/images/formulas-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {missionVision.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 bg-white/70 p-6 transition-colors duration-200 hover:bg-sky-100/70"
            >
              <Icon aria-hidden="true" className="mt-1 h-10 w-10 shrink-0 text-slate-500" />
              <div>
                <h2 className="text-2xl text-neutral-800">{title}</h2>
                <p className="mt-3">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Product range */}
      <section className="bg-white py-16 text-[15px] leading-relaxed text-neutral-600">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Product Range</SectionHeading>
          <p className="mt-5 max-w-3xl">
            Nutri Next’s product range consists of patented Herbal formulations, Herbal
            Supplements, Organic Herbs, Single Herbs, Classical Ayurvedic Products and Personal Care
            products.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg text-neutral-800">What we make</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {productCategories.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0096d6]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-neutral-800">Available forms</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {productForms.map((form) => (
                  <li
                    key={form}
                    className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-700"
                  >
                    {form}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-neutral-900 py-16 text-[15px] leading-relaxed text-white/85">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl text-white">The Nutri Next Quality</h2>
            <p className="mt-5">
              Quality is of utmost importance to Nutri Next. Nutri Next is certified{" "}
              <strong className="font-bold text-white">ISO 9001:2008, WHO GMP and HACCP</strong> by
              the British Standards Institution, UK. Nutri Next is also{" "}
              <strong className="font-bold text-white">GMP certified</strong> by the Indian Drug
              Authority.
            </p>
            <p className="mt-4">
              Nutri Next is also certified by{" "}
              <strong className="font-bold text-white">ECOCERT</strong>, one of the largest organic
              certification organizations in the world, for processing, trading and export of
              Organic Herbs according to Commission Regulation (EC) 834/2007, USDA’s NOP and India’s
              NPOP standards.
            </p>
          </div>

          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3 border border-white/15 px-4 py-4">
                <FaCertificate aria-hidden="true" className="h-6 w-6 shrink-0 text-[#0096d6]" />
                <span className="text-white">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Efficacy and safety */}
      <section className="bg-white py-16 text-[15px] leading-relaxed text-neutral-600">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Efficacy And Safety</SectionHeading>
          <p className="mt-5 max-w-3xl">
            The efficacy and safety of Nutri Next products is proven by clinical trials conducted by
            top Institutions of India including:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutions.map(({ name, place }) => (
              <li
                key={name}
                className="flex gap-3 p-3 transition-colors duration-200 hover:bg-sky-100/70"
              >
                <FaHospital aria-hidden="true" className="mt-1 h-8 w-8 shrink-0 text-slate-500" />
                <div>
                  <p className="text-neutral-800">{name}</p>
                  <p className="text-sm">{place}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </main>
  );
}
