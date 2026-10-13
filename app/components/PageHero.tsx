import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[420px] items-end bg-neutral-900">
      <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
      {/* Same dark wash as the home hero so the white navbar stays readable */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-16">
        <h1 className="text-5xl leading-tight tracking-tight text-white sm:text-6xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-[15px] text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
