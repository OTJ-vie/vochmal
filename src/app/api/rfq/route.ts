import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/submitForm";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { itemDescription, quantity, deliveryDate, budgetRange, contactName, email, phone, message } = data;

    if (!itemDescription || !quantity || !contactName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendFormEmail({
      emailTitle: "New RFQ (Request for Quotation)",
      subject: `RFQ from ${contactName}`,
      replyTo: email,
      fields: {
        "Contact Name": contactName,
        "Email": email,
        "Phone": phone,
        "Item Description": itemDescription,
        "Quantity": quantity,
        "Required By": deliveryDate,
        "Budget Range": budgetRange,
        "Additional Information": message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RFQ form submission failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
