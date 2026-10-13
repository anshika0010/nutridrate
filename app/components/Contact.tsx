import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import StayInformedForm from "./StayInformedForm";

const details = [
  { label: "Corporate office address", value: "D-13, Sector 3, Noida, India" },
  { label: "Factory Address", value: "C- 189, sector 63, Noida, India" },
  {
    label: "EMAIL",
    value: "nutrinext@thenutrinext.com",
    href: "mailto:nutrinext@thenutrinext.com",
  },
  { label: "CONTACT No.", value: "0120-4919228", href: "tel:+911204919228" },
];

// TODO: replace with the real Instagram profile and WhatsApp number.
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { label: "WhatsApp", href: "https://wa.me/", icon: FaWhatsapp },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0096d6] py-16 text-white">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-bold sm:text-[34px]">You can find us at</h2>

          <dl className="mt-7 space-y-6">
            {details.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-sm">{label}</dt>
                <dd className="mt-1 text-[17px]">
                  {href ? (
                    <a href={href} className="hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b7a99] transition-colors hover:bg-[#1f6582]"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold">Stay Informed</h2>
          <StayInformedForm />
        </div>
      </div>
    </section>
  );
}
