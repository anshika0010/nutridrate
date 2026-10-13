"use client";

import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

/* ---------- types & data ---------- */
type Values = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  address: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", company: "", country: "", address: "", message: "" };

const countries = [
  "India", "United States", "United Kingdom", "United Arab Emirates",
  "Canada", "Australia", "Germany", "Singapore", "Other",
];

const MAX_MESSAGE = 500;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email, like name@company.com.";
  if (!/^[+\d][\d\s-]{6,17}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!v.country) e.country = "Please select your country.";
  return e;
}

/* ---------- icons ---------- */
const paths: Record<string, ReactNode> = {
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  factory: <><path d="M3 21V10l6 4V10l6 4V6h3v15z" /><path d="M7 17h2M12 17h2M17 17h1" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  send: <><path d="M21 3 10 14" /><path d="M21 3l-7 18-4-7-7-4z" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  whatsapp: <><path d="M3 21l1.65-4.8A8.5 8.5 0 1 1 8 19.4L3 21z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.8-1.8l.8-1-1-2L9 9.5z" /></>,
};

function Icon({ name, size = 22 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* ---------- floating-label field ---------- */
type FieldProps = {
  name: keyof Values;
  label: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onBlur: () => void;
  as?: "input" | "select" | "textarea";
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
  children?: ReactNode;
};

function Field({ name, label, value, error, onChange, onBlur, as = "input", type = "text", autoComplete, required, className = "", children }: FieldProps) {
  const id = `f-${name}`;
  const floated = value !== "";
  const base =
    "peer w-full rounded-xl border bg-white px-4 pt-6 pb-2 text-base text-slate-900 outline-none transition " +
    "hover:border-slate-400 focus:border-[#0095da] focus:ring-4 focus:ring-[#0095da]/15 " +
    (error ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-slate-300");

  const shared = {
    id, name, value, onChange, onBlur, required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-err` : undefined,
  };

  return (
    <div className={className}>
      <div className="relative">
        {as === "textarea" ? (
          <textarea {...shared} rows={4} maxLength={MAX_MESSAGE} className={`${base} resize-none`} />
        ) : as === "select" ? (
          <select {...shared} className={`${base} h-14 cursor-pointer appearance-none pr-10`}>
            <option value="" disabled hidden />
            {children}
          </select>
        ) : (
          <input {...shared} type={type} autoComplete={autoComplete} className={`${base} h-14`} />
        )}
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 origin-left text-slate-500 transition-all duration-150 peer-focus:text-[#0079b3] ${
            floated ? "top-2 text-xs" : "top-4 text-base peer-focus:top-2 peer-focus:text-xs"
          }`}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
        {as === "select" && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
            <Icon name="chevron" size={18} />
          </span>
        )}
      </div>
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- info row ---------- */
function InfoRow({ icon, label, children }: { icon: keyof typeof paths; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
        <Icon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-white/75">{label}</p>
        {children}
      </div>
    </div>
  );
}

const mapLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/* ---------- page ---------- */
export default function ContactPage() {
  const [values, setValues] = useState<Values>(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = validate(values);
  const shown = (k: keyof Values) => (touched[k] ? errors[k] : undefined);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onBlur = (k: keyof Values) => () => setTouched((p) => ({ ...p, [k]: true }));
  const bind = (k: keyof Values) => ({ name: k, value: values[k], onChange, onBlur: onBlur(k), error: shown(k) });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nutridrate@thenutridrate.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({ name: true, email: true, phone: true, country: true });
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    setStatus("sending");
    try {
      // Replace with your own API route or form service
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(empty);
    setTouched({});
    setStatus("idle");
  };

  return (
    <main className={`${dmSans.className} min-h-screen bg-slate-50 text-slate-900`}>
      {/* Hero — add your banner at /public/contact-hero.jpg */}
      <section className="relative isolate overflow-hidden bg-[#0b5f8f] bg-[url('/contact-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00537f]/90 via-[#0077b6]/75 to-[#0095da]/40" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-14 sm:pt-20">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <a href="/" className="hover:text-white hover:underline">Home</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">Contact Us</span>
          </nav>
          <h1 className={`${poppins.className} text-4xl font-medium tracking-tight text-white sm:text-5xl`}>Contact Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Questions about our products, manufacturing or partnerships? Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Card overlaps the hero */}
      <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-5 pb-20">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl shadow-sky-900/10 ring-1 ring-slate-200 lg:grid-cols-[5fr_7fr]">
          {/* Info panel */}
          <aside className="relative isolate overflow-hidden bg-gradient-to-br from-[#00a3ec] via-[#0095da] to-[#0072ad] p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border-[36px] border-white/10" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 -z-10 h-72 w-72 rounded-full bg-white/10" />

            <h2 className={`${poppins.className} text-3xl font-normal leading-tight tracking-tight sm:text-4xl`}>You can find us at</h2>

            <div className="mt-10 space-y-8">
              <InfoRow icon="pin" label="Corporate office address">
                <a href={mapLink("D-49, Sector 3, Noida, India")} target="_blank" rel="noopener noreferrer" className="text-lg font-medium underline-offset-4 hover:underline">
                  D-49, Sector 3, Noida, India
                </a>
              </InfoRow>

              <InfoRow icon="factory" label="Factory address">
                <a href={mapLink("C-189, Sector 63, Noida, India")} target="_blank" rel="noopener noreferrer" className="text-lg font-medium underline-offset-4 hover:underline">
                  C- 189, sector 63, Noida, India
                </a>
              </InfoRow>

              <InfoRow icon="mail" label="Email">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a href="mailto:nutridrate@thenutridrate.com" className="break-all text-lg font-medium underline-offset-4 hover:underline">
                    nutridrate@thenutridrate.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-sm transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon name={copied ? "check" : "copy"} size={14} />
                    <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </InfoRow>
            </div>

            <div className="mt-12 flex gap-3">
              {[
                { name: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
                { name: "whatsapp", label: "WhatsApp", href: "https://wa.me/" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0083c2] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  <Icon name={s.name as keyof typeof paths} />
                </a>
              ))}
            </div>
          </aside>

          {/* Form panel */}
          <div className="p-8 sm:p-10 lg:p-12">
            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <Icon name="check" size={40} />
                </span>
                <h2 className={`${poppins.className} mt-6 text-3xl font-normal tracking-tight`}>Message sent</h2>
                <p className="mt-3 max-w-sm text-slate-600">
                  Thanks{values.name ? `, ${values.name.trim().split(" ")[0]}` : ""}. We&apos;ll reply to {values.email} soon.
                </p>
                <button onClick={reset} className="mt-8 rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:border-[#0095da] hover:text-[#0079b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0095da]">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className={`${poppins.className} text-3xl font-normal tracking-tight sm:text-4xl`}>Let&apos;s get in touch</h2>
                <p className="mt-2 text-slate-600">Fields marked <span className="text-red-500">*</span> are required.</p>

                <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field {...bind("name")} label="Your name" autoComplete="name" required />
                  <Field {...bind("email")} label="Your email" type="email" autoComplete="email" required />
                  <Field {...bind("phone")} label="Phone number" type="tel" autoComplete="tel" required />
                  <Field {...bind("company")} label="Company name" autoComplete="organization" />

                  <Field {...bind("country")} label="Country" as="select" required>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </Field>
                  <Field {...bind("address")} label="Address" autoComplete="street-address" />

                  <div className="sm:col-span-2">
                    <Field {...bind("message")} label="Message" as="textarea" />
                    <p className="mt-1.5 text-right text-xs text-slate-500">{values.message.length}/{MAX_MESSAGE}</p>
                  </div>

                  <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#0095da] px-9 text-lg font-medium text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-[#0083c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0095da] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 motion-reduce:transition-none"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message <Icon name="send" size={20} />
                        </>
                      )}
                    </button>
                    {status === "error" && (
                      <p role="alert" className="text-sm text-red-600">
                        We couldn&apos;t send your message. Please try again or email us directly.
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}