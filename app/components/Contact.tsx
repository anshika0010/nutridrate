import StayInformedForm from "./StayInformedForm";

const details = [
  { label: "Corporate office address", value: "D-13, Sector 3, Noida, India" },
  { label: "Factory Address", value: "C- 189, sector 63, Noida, India" },
 
];

// TODO: replace with the real Instagram profile and WhatsApp number.


export default function Contact() {
  return (
    <section id="contact" className="bg-[#0096d6] py-16 text-white">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-16">
      

        <div>
          <h2 className="font-heading text-3xl font-bold">Stay Informed</h2>
          <StayInformedForm />
        </div>
      </div>
    </section>
  );
}
