import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-[15px] text-neutral-700">
      <div className="mx-auto grid max-w-5xl items-center gap-6 px-6 text-center md:grid-cols-3 md:text-left">
        <nav aria-label="Footer">
          <ul className="flex justify-center gap-5 md:justify-start">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-black">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center">
          <Logo variant="dark" />
        </div>

        <p className="md:text-right">© 2026 Thenutridrate. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
