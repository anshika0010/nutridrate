import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[650px] items-center bg-neutral-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Dark overlay so the white text stays readable over the photo */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 lg:px-20">
        <h1 className="text-white leading-[1.1] tracking-tight">
          <span className="block text-4xl font-normal sm:text-5xl">
            India&apos;s
          </span>
          <span className="block text-5xl font-normal sm:text-6xl">
            Leading Dietary
          </span>
          <span className="block text-5xl font-bold sm:text-6xl">
            Supplement
          </span>
          <span className="block text-5xl font-normal sm:text-6xl">
            Manufacturer
          </span>
        </h1>

        <p className="mt-3 text-[15px] text-white/90">
          Eat like a champion. Stay healthy and weightless
        </p>

        <Link
          href="/about"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-10 text-sm text-white transition-colors hover:bg-neutral-800"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
