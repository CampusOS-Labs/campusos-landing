import { sql } from "@/lib/db";

export type ContactInquiryInput = {
  name: string;
  schoolName: string;
  email: string;
  message: string;
};

export async function createContactInquiry(input: ContactInquiryInput) {
  if (!sql) {
    throw new Error("DATABASE_URL is not configured");
  }

  const id = crypto.randomUUID();

  await sql`
    INSERT INTO contact_inquiry (id, name, school_name, email, message)
    VALUES (
      ${id},
      ${input.name},
      ${input.schoolName},
      ${input.email},
      ${input.message}
    )
  `;

  return { id };
}
