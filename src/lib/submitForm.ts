import { getResendClient, CONTACT_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { renderFormEmailHtml } from "@/lib/formEmail";

interface Attachment {
  filename: string;
  content: Buffer;
}

interface SendFormEmailOptions {
  /** Heading shown at the top of the notification email. */
  emailTitle: string;
  /** Email subject line. */
  subject: string;
  /** Label/value pairs rendered as a table in the email body. */
  fields: Record<string, string | undefined>;
  /** Submitter's email, set as Reply-To so replying goes straight to them. */
  replyTo?: string;
  attachments?: Attachment[];
}

export async function sendFormEmail({ emailTitle, subject, fields, replyTo, attachments }: SendFormEmailOptions) {
  const html = renderFormEmailHtml(emailTitle, fields);
  const { error } = await getResendClient().emails.send({
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    replyTo,
    subject,
    html,
    attachments,
  });
  if (error) {
    throw new Error(error.message);
  }
}
