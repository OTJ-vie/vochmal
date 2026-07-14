import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/submitForm";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB, matches the form's stated limit

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const companyName = formData.get("companyName")?.toString();
    const rcNumber = formData.get("rcNumber")?.toString();
    const businessCategory = formData.get("businessCategory")?.toString();
    const primaryProducts = formData.get("primaryProducts")?.toString();
    const contactName = formData.get("contactName")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const address = formData.get("address")?.toString();
    const file = formData.get("companyProfile");

    if (!companyName || !rcNumber || !businessCategory || !primaryProducts || !contactName || !email || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let attachments;
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: "File exceeds the 5 MB limit" }, { status: 400 });
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments = [{ filename: file.name, content: buffer }];
    }

    await sendFormEmail({
      emailTitle: "New Vendor Registration",
      subject: `Vendor Registration: ${companyName}`,
      replyTo: email,
      fields: {
        "Company Name": companyName,
        "RC Number": rcNumber,
        "Business Category": businessCategory,
        "Primary Products / Services": primaryProducts,
        "Contact Name": contactName,
        "Email": email,
        "Phone": phone,
        "Company Address": address,
      },
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Vendor form submission failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
