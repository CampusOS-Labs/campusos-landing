"use server";

import { headers } from "next/headers";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function resolveContactApiUrl() {
  const explicit = process.env.CONTACT_FORM_API_URL?.trim();
  if (explicit) return explicit;

  const campusosBase = process.env.CAMPUSOS_API_URL?.trim().replace(/\/$/, "");
  if (campusosBase) return `${campusosBase}/api/contact`;

  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  if (host) {
    const proto = headerList.get("x-forwarded-proto") ?? "http";
    return `${proto}://${host}/api/contact`;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel}/api/contact`;

  const port = process.env.PORT ?? "3000";
  return `http://localhost:${port}/api/contact`;
}

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const schoolName = String(formData.get("school-name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !schoolName || !email || !message) {
    return {
      status: "error",
      message: "Please fill in every field before submitting.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const payload = {
    name,
    schoolName,
    email,
    message,
  };

  const apiUrl = await resolveContactApiUrl();

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }
  } catch {
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "Thanks — we'll be in touch shortly.",
  };
}
