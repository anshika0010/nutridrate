"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "../actions";

const roles = ["Brand Owner", "Distributor", "Retailer", "Startup", "Other"];

const countries = [
  "India",
  "Australia",
  "Bangladesh",
  "Canada",
  "Germany",
  "Nepal",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Other",
];

const initialState: SubscribeState = { status: "idle", message: "" };

const fieldClass =
  "h-12 w-full border border-neutral-800 bg-white px-3 text-[15px] text-neutral-800 placeholder:text-neutral-500 focus:outline-2 focus:outline-offset-2 focus:outline-white";

export default function StayInformedForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <form action={formAction} className="mt-7 space-y-5">
      <input
        name="name"
        type="text"
        required
        placeholder="Your Name"
        aria-label="Your name"
        className={fieldClass}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        aria-label="Your email"
        className={fieldClass}
      />
      <select name="role" required defaultValue="" aria-label="Are you a" className={fieldClass}>
        <option value="" disabled>
          Are you a
        </option>
        {roles.map((role) => (
          <option key={role}>{role}</option>
        ))}
      </select>
      <select
        name="country"
        required
        defaultValue=""
        aria-label="Select your country"
        className={fieldClass}
      >
        <option value="" disabled>
          Select your Country
        </option>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="h-10 rounded-full bg-black px-8 text-sm text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
        {state.message && (
          <p role="status" className="text-sm text-white">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
