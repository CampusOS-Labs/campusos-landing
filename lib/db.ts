import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("[contact-form] DATABASE_URL is not set — contact submissions cannot be saved.");
}

export const sql = connectionString ? postgres(connectionString, { prepare: false }) : null;
