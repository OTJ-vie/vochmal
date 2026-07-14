import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/submitForm";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, division, subject, message } = data;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendFormEmail({
      emailTitle: "New Contact Form Submission",
      subject: `Contact Enquiry: ${subject}`,
      replyTo: email,
      fields: {
        "Full Name": fullName,
        "Email": email,
        "Phone": phone,
        "Division of Interest": division,
        "Subject": subject,
        "Message": message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
