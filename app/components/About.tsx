import Image from "next/image";
import Link from "next/link";

const UPLOADS = "https://thenutrinext.com/wp-content/uploads/2023/01";

const whyUs = [
  "All our food supplements are manufactured in European Union",
  "Specialize in working with medium and large size companies",
  "High quality dietary supplements for manufacturer’s price",
  "Fast new private label (finished) product launching",
  "Help with product label design and registration",
  "Small minimal order for tablets and capsules",
  "GMP / HACCP Certified manufacturing",
  "Ready made formulas and stock items",
  "Full A to Z private labeling services",
];

function Photo({ src, label, className }: { src: string; label: string; className: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-neutral-200 ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-16 text-[15px] leading-relaxed text-neutral-600">
      <div className="mx-auto max-w-6xl space-y-24 px-6">
        {/* Contract manufacturing intro */}
        <div className="grid items-start gap-5 md:grid-cols-2">
          <div>
            <h2 className="text-lg leading-snug text-neutral-800">
              The Nutrinext - Dietary Supplements contract manufacturing services
            </h2>
            <p className="mt-5">
              The Nutrinext is{" "}
              <strong className="font-bold text-neutral-700">dietary supplements manufacturer</strong>{" "}
              for <strong className="font-bold text-neutral-700">private label</strong> needs. All
              dietary supplements (tablets, effervescent tablets, capsules and powders) are
              manufactured in India and comply with all FSSAI standards. We manufacture:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Food supplements in{" "}
                <strong className="font-bold text-neutral-700">tablets/capsules/softgels</strong> form
              </li>
              <li>
                <strong className="font-bold text-neutral-700">Sports Nutrition</strong> powders
              </li>
              <li>
                <strong className="font-bold text-neutral-700">Effervescent tablets</strong> in tubes
                packing.
              </li>
            </ul>
            <p className="mt-6">
              Our expert team will help you with product choice, registration, labeling and
              logistics issues. Do not worry about a thing, because contract manufacturing services
              work by simple formula:
            </p>
            <p className="mt-1 uppercase text-neutral-700">Our products and packing + your brand</p>
          </div>

          <Photo
            src={`${UPLOADS}/WhatsApp-Image-2023-01-23-at-2.59.57-PM.jpeg`}
            label="Clean-room manufacturing facility"
            className="aspect-[4/3]"
          />
        </div>

        {/* Why us */}
        <div className="grid items-center gap-5 md:grid-cols-2">
          <Photo
            src={`${UPLOADS}/pharma-r-d-consultant-1000x1000-1.webp`}
            label="Scientist examining a test tube in the lab"
            className="order-last aspect-square md:order-first"
          />

          <div>
            <h2 className="text-3xl text-neutral-800">Why us?</h2>
            <ul className="mt-6 list-disc pl-5">
              {whyUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href="/private-label"
              className="mt-12 inline-flex h-8 items-center rounded-full bg-black px-4 text-sm text-white transition-colors hover:bg-neutral-800"
            >
              Fastest way to grow your Brand!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
