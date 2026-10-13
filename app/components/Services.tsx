import type { IconType } from "react-icons";
import {
  FaAppleAlt,
  FaBoxes,
  FaCapsules,
  FaDumbbell,
  FaFlask,
  FaHandHoldingHeart,
  FaLeaf,
  FaTablets,
  FaWater,
} from "react-icons/fa";
import { GiPowder, GiShinyApple } from "react-icons/gi";

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

const services: Service[] = [
  {
    title: "Tablet Manufacturing",
    description:
      "Cost effective, good shelf life and ideal for certain types of formulas where dissolution timing is critical.",
    icon: FaTablets,
  },
  {
    title: "Capsule Manufacturing",
    description:
      "Products may be designed in several capsule formats including colored, veggie, and time delay release.",
    icon: FaCapsules,
  },
  {
    title: "Protein Manufacturing",
    description:
      "Formulate your own protein supplement made from whey isolate or concentrate, casein, or soy protein.",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Powder Manufacturing",
    description:
      "Practical for formulas measured in grams. Offers flexible dosing options for protein or creatine items.",
    icon: GiPowder,
  },
  {
    title: "Vitamin Manufacturing",
    description:
      "Manufacture a pure vitamin/mineral formula, custom multivitamin or multivitamin pack.",
    icon: GiShinyApple,
  },
  {
    title: "Probiotics",
    description:
      "Nutri Next manufactures probiotic products with maximum CFU’s and microflora activation.",
    icon: FaLeaf,
  },
  {
    title: "Flavor Development",
    description:
      "Our flavor experts can create a unique and delicious tasting product that will bring consumers back.",
    icon: FaFlask,
  },
  {
    title: "Bodybuilding",
    description:
      "Manufacture a bodybuilding supplement like protein, creatine, pre-workout, fatburner, or multivitamin.",
    icon: FaDumbbell,
  },
  {
    title: "Sports Nutrition",
    description:
      "Customize a sports supplement for athletes seeking to enhance their physical and mental performance.",
    icon: FaAppleAlt,
  },
  {
    title: "Liquid Manufacturing",
    description:
      "Ready to add liquid supplements to your product line? Nutri Next can help!",
    icon: FaWater,
  },
  {
    title: "Packaging Design",
    description:
      "The Nutri Next can help with your product package design from container to labeling.",
    icon: FaBoxes,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 text-neutral-700">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-800">
            Services
          </h2>
          <p className="mt-4 text-sm">Our Manufacturing Service and Options</p>
        </div>

        <div className="mt-12 grid gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex gap-4 p-3 transition-colors duration-200 hover:bg-sky-100/70"
            >
              <Icon
                aria-hidden="true"
                className="mt-0.5 h-12 w-12 shrink-0 text-slate-500"
              />
              <div>
                <h3 className="text-lg text-neutral-800">{title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
