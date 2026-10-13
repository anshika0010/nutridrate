import Image from "next/image";

const facilityPhotos = [
  {
    src: "https://thenutrinext.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-23-at-2.59.59-PM-1.jpeg",
    alt: "Clean room with blue epoxy floor and stainless steel tables",
  },
  {
    src: "https://thenutrinext.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-23-at-2.59.56-PM.jpeg",
    alt: "Clean room workstation with lab equipment and wash basin",
  },
];

function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold text-neutral-700">{children}</strong>;
}

export default function Benefits() {
  return (
    <>
      <section
        id="benefits"
        className="relative bg-neutral-50 bg-cover bg-center bg-no-repeat py-10 text-[15px] leading-relaxed text-neutral-600"
        style={{ backgroundImage: "url('/images/formulas-bg.jpg')" }}
      >
        {/* Same faint lab-photo wash as the formulas section */}
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl text-neutral-800">Contract manufacturing benefits</h2>
            <p className="mt-5">
              <B>Implement your ideas without additional production resources</B>. Save on
              equipment, rent or purchase of production and storage facilities.
              <br />
              <B>Reduce costs and get information about the final budget due to a fixed cost</B>.
              According to experts, contract production can reduce costs by at least 25-30%.
            </p>
          </div>

          <div>
            <p>
              <B>Focus on promotion of the products.</B> Charge the production to Pharma Manufacture
              and get more time and resources to focus on marketing and sales. The loss of time is
              fraught with a loss in competition – dietary supplements contract manufacturing{" "}
              <B>accelerates the process of bringing new products to the market.</B>
            </p>
            <p>
              <B>Increase profitability</B> due to a decrease in the purchase price leads to an
              increase in loyal customer base.
            </p>
            <p>
              <B>Get to know with new products,</B> by shortening the transition period to the
              serial production of new products and <B>increase competitiveness.</B>
            </p>
          </div>
        </div>
      </section>

      <section id="facility" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
          {facilityPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
