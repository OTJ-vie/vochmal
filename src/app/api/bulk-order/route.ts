import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/submitForm";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { productCategory, quantity, deliveryLocation, contactName, phone, email, message } = data;

    if (!productCategory || !quantity || !deliveryLocation || !contactName || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendFormEmail({
      emailTitle: "New Bakery Bulk Order Enquiry",
      subject: `Bulk Order Enquiry: ${productCategory}`,
      replyTo: email,
      fields: {
        "Contact Name": contactName,
        "Email": email,
        "Phone": phone,
        "Product Category": productCategory,
        "Estimated Quantity": quantity,
        "Delivery Location": deliveryLocation,
        "Additional Notes": message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Bulk order form submission failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
