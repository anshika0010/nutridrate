import { FaHandHoldingMedical } from "react-icons/fa";

const formulaColumns: string[][] = [
  [
    "Multi Vitamin and Mineral tablet",
    "High Strength Glucosamin & Chondriotin tablets",
    "Mega Man tablets",
    "Womens Ultra tablet",
    "Iron with vit, & min. tablets",
    "Folic Acid tablets",
    "Echinacea Root Extract tablets",
    "Guarana tablets",
    "Selenium tablets",
    "BCAA 2.1.1 with Vitamin B6 tablets",
    "Ginkgo Biloba tablets",
    "Pregnancy Plus tablets",
    "Biotin tablets",
  ],
  [
    "Calcium, Magnesium, Zinc +D3 tablets",
    "Calcium + D3 tablets",
    "Magnesium & B6 tablets",
    "Cranberry extract tablets",
    "Vitamin B Complex tablets",
    "Creatine Monohydrate tablets",
    "Blueberry Extract tablets",
    "L-Glutamine tablets",
    "Menopause Complex tablets",
    "Green tea extract tablets",
    "Vitamin B12 melt tablets",
    "Head High Vitamins (healthy hair) capsules",
    "Zinc Picolinate HVC capsules",
    "Odourless Garlic Oil SGC capsules",
  ],
  [
    "Lacto Probiotic Softgel capsules",
    "Omega 3 Fish Oil Softgel capsules",
    "Omega 3-6-9 Softgel capsules",
    "Cod liver oil capsules",
    "Melatonin Sleep Softgel capsules",
    "Vitamin D3 1000iu Softgel capsules",
    "Herbal Weight Loss HVC capsules",
    "Turmeric Curcumin + Bioperine capsules",
    "L-Carnitine HVC capsules",
    "Coenzyme Q10 capsule",
    "Evening Primrose Oil Softgel capsules",
    "Garcinia Cambogia capsules",
    "Collagen capsules",
    "Maca Root capsules",
  ],
];

export default function PopularFormulas() {
  return (
    <section
      id="popular-formulas"
      className="relative bg-neutral-50 bg-cover bg-center bg-no-repeat py-16 text-neutral-700"
      style={{ backgroundImage: "url('/images/formulas-bg.jpg')" }}
    >
      {/* Heavy white wash so the lab photo reads as a faint texture */}
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl text-neutral-800">
          Popular Dietary Supplement (ready-made formulas)
        </h2>

        <div className="mt-8 grid gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
          {formulaColumns.map((column, i) => (
            <ul key={i} className="space-y-3">
              {column.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[15px]">
                  <FaHandHoldingMedical
                    aria-hidden="true"
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-neutral-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
