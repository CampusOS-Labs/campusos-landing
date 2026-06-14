"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`);
      }
    } catch {
      return {
        status: "error",
        message:
          "We couldn't send your message right now. Please try again in a moment.",
      };
    }
  } else {
    console.info("[contact-form]", payload);
  }

  return {
    status: "success",
    message: "Thanks — we'll be in touch shortly.",
  };
}
