import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-black">
      {/* Background image: place the file at /public/images/hero-bg.jpg */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-50"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-24 lg:px-20">
        <h1 className="leading-[1.1] tracking-tight text-[#FFFFFF]">
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

        <p className="mt-3 text-[15px] font-medium text-[#FFFFFF]">
          Eat like a champion. Stay healthy and weightless
        </p>

        <Link
          href="/about"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-10 text-sm text-white transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}