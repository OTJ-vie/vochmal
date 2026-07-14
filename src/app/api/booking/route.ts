import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/submitForm";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, checkin, checkout, apartmentType, guests, specialRequests } = data;

    if (!fullName || !email || !checkin || !checkout || !apartmentType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendFormEmail({
      emailTitle: "New Apartment Booking Enquiry",
      subject: `Booking Enquiry: ${apartmentType}`,
      replyTo: email,
      fields: {
        "Full Name": fullName,
        "Email": email,
        "Phone": phone,
        "Apartment Type": apartmentType,
        "Check-In": checkin,
        "Check-Out": checkout,
        "Guests": guests,
        "Special Requests": specialRequests,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form submission failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
