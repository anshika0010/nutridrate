"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "");
  const country = String(formData.get("country") ?? "");

  if (!name || !email || !role || !country) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: deliver the enquiry (email service, CRM, or database).
  // Until this is wired up, submissions are not stored or sent anywhere.
  return {
    status: "error",
    message: "Sorry, this form isn't connected yet. Please email us directly.",
  };
}
