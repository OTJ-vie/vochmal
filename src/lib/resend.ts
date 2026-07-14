import { Resend } from "resend";

let client: Resend | undefined;

/**
 * Lazily constructs the Resend client on first use. The Resend constructor
 * throws synchronously if RESEND_API_KEY is unset, which would otherwise crash
 * the build/module load before the env var is configured.
 */
export function getResendClient(): Resend {
  if (!client) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set. Add it to your environment to send emails.");
    }
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

/** Inbox that receives all form submissions. */
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "vochmal7@gmail.com";

/**
 * Sender identity for outgoing mail. Defaults to Resend's shared sandbox domain,
 * which works without any DNS setup but only reliably delivers to the account
 * owner's own inbox. Verify a domain in Resend and set RESEND_FROM_EMAIL to move
 * off the sandbox for production use.
 */
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Vochmal Website <onboarding@resend.dev>";
