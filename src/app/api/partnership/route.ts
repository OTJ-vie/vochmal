import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/submitForm";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, areaOfInterest, message, division } = data;

    if (!name || !company || !email || !areaOfInterest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendFormEmail({
      emailTitle: `New ${division || "Partnership"} Enquiry`,
      subject: `${division || "Partnership"} Enquiry: ${areaOfInterest}`,
      replyTo: email,
      fields: {
        "Name": name,
        "Company": company,
        "Email": email,
        "Phone": phone,
        "Division": division,
        "Area of Interest": areaOfInterest,
        "Message": message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partnership form submission failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
