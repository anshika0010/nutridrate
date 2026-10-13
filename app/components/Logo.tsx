import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/nutridrate-logo.png";

export default function Logo({
  variant = "light",
  className = "",
}: {
  // The logo artwork is white; "dark" turns it black for light backgrounds.
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link href="/" aria-label="Nutridrate home" className={`inline-block ${className}`}>
      <Image
        src={logo}
        alt="Nutridrate"
        preload
        className={`h-5 w-auto sm:h-6 ${variant === "dark" ? "brightness-0" : ""}`}
      />
    </Link>
  );
}
