"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  apartmentType: string;
  guests: string;
  specialRequests: string;
}

const apartmentTypes = [
  "2-Bedroom Apartment — Unit 1",
  "2-Bedroom Apartment — Unit 2",
  "2-Bedroom Apartment — Unit 3",
  "2-Bedroom Apartment — Unit 4",
  "No preference",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your booking enquiry. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">Enquiry Received!</h3>
        <p className="text-gray-500 mt-2 text-sm">Thank you! Our team will confirm availability and pricing within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Make Another Enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bkFullName" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="bkFullName"
            type="text"
            placeholder="Your full name"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("fullName", { required: "Name is required" })}
          />
        </div>
        <div>
          <label htmlFor="bkEmail" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="bkEmail"
            type="email"
            placeholder="you@company.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" } })}
          />
          {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bkPhone" className="block text-sm font-semibold text-navy mb-1.5">Phone</label>
          <input
            id="bkPhone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="bkApartmentType" className="block text-sm font-semibold text-navy mb-1.5">
            Apartment Type <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="bkApartmentType"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("apartmentType", { required: "Please select a type" })}
          >
            <option value="">Select apartment type...</option>
            {apartmentTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="bkCheckin" className="block text-sm font-semibold text-navy mb-1.5">
            Check-In Date <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="bkCheckin"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("checkin", { required: "Check-in date required" })}
          />
        </div>
        <div>
          <label htmlFor="bkCheckout" className="block text-sm font-semibold text-navy mb-1.5">
            Check-Out Date <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="bkCheckout"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("checkout", { required: "Check-out date required" })}
          />
        </div>
        <div>
          <label htmlFor="bkGuests" className="block text-sm font-semibold text-navy mb-1.5">Number of Guests</label>
          <select
            id="bkGuests"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("guests")}
          >
            {["1", "2", "3", "4", "5", "6"].map((n) => <option key={n} value={n}>{n} {n === "1" ? "Guest" : "Guests"}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="bkSpecialRequests" className="block text-sm font-semibold text-navy mb-1.5">Special Requests</label>
        <textarea
          id="bkSpecialRequests"
          rows={3}
          placeholder="Airport pickup, floor preference, accessibility requirements, dietary needs..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold resize-none"
          {...register("specialRequests")}
        />
      </div>

      <p className="text-gray-400 text-xs bg-bluegrey rounded-lg px-4 py-3">
        Our team will confirm availability and pricing within 24 hours of your enquiry submission.
      </p>

      {submitError && (
        <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting...</> : "Book My Stay"}
      </button>
    </form>
  );
}
