"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Private Label", href: "/private-label" },
  { label: "Research and Development", href: "/research-and-development" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Nutri Next home"
      className="flex flex-col font-extrabold uppercase leading-[0.85] tracking-wider text-white"
    >
      <span className="text-[19px]">Nutri</span>
      <span className="pl-7 text-[19px]">
        Ne<span className="italic">x</span>t
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-6 flex flex-col gap-1 rounded-2xl bg-black/90 p-4 backdrop-blur lg:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
