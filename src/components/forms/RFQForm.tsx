"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface RFQData {
  itemDescription: string;
  quantity: string;
  deliveryDate: string;
  budgetRange: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

const budgetRanges = [
  "Under ₦1,000,000",
  "₦1M – ₦5M",
  "₦5M – ₦20M",
  "₦20M – ₦100M",
  "Above ₦100M",
  "Prefer not to state",
];

export default function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RFQData>();

  const onSubmit = async (data: RFQData) => {
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your RFQ. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">RFQ Submitted!</h3>
        <p className="text-gray-500 mt-2 text-sm">Thank you! Our sourcing team will respond with a quotation within 48 hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Submit Another RFQ</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white rounded-2xl p-8 border border-gray-100 space-y-5">
      <div>
        <label htmlFor="itemDescription" className="block text-sm font-semibold text-navy mb-1.5">
          Item Description <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="itemDescription"
          rows={3}
          placeholder="Describe the item(s), materials, specifications, or equipment required..."
          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none ${errors.itemDescription ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
          {...register("itemDescription", { required: "Item description is required" })}
        />
        {errors.itemDescription && <p role="alert" className="text-red-500 text-xs mt-1">{errors.itemDescription.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="rQuantity" className="block text-sm font-semibold text-navy mb-1.5">
            Quantity <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="rQuantity"
            type="text"
            placeholder="e.g. 50 units"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("quantity", { required: "Quantity required" })}
          />
        </div>
        <div>
          <label htmlFor="deliveryDate" className="block text-sm font-semibold text-navy mb-1.5">
            Required By
          </label>
          <input
            id="deliveryDate"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("deliveryDate")}
          />
        </div>
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-semibold text-navy mb-1.5">
            Budget Range
          </label>
          <select
            id="budgetRange"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("budgetRange")}
          >
            <option value="">Select range...</option>
            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="rfqContactName" className="block text-sm font-semibold text-navy mb-1.5">
            Contact Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="rfqContactName"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("contactName", { required: "Name required" })}
          />
        </div>
        <div>
          <label htmlFor="rfqEmail" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="rfqEmail"
            type="email"
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" } })}
          />
          {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="rfqPhone" className="block text-sm font-semibold text-navy mb-1.5">Phone</label>
          <input
            id="rfqPhone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="rfqMessage" className="block text-sm font-semibold text-navy mb-1.5">Additional Information</label>
        <textarea
          id="rfqMessage"
          rows={3}
          placeholder="Delivery address, packaging requirements, or other specifics..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold resize-none"
          {...register("message")}
        />
      </div>

      {submitError && (
        <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting RFQ...</> : "Submit RFQ"}
      </button>
    </form>
  );
}
