"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface PartnershipFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  message: string;
}

interface PartnershipFormProps {
  division?: string;
}

const oilGasAreas = [
  "Upstream Services",
  "Downstream Operations",
  "Pipeline Engineering",
  "Field Operations",
  "Energy Consultancy",
  "Oil & Gas Procurement",
];

const miningAreas = [
  "Equity Investment",
  "Joint Venture",
  "Offtake Agreement",
  "Technical Partnership",
  "Equipment Financing",
];

export default function PartnershipForm({ division = "Oil & Gas" }: PartnershipFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnershipFormData>();

  const areas = division === "Mining" ? miningAreas : oilGasAreas;

  const onSubmit = async (data: PartnershipFormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Partnership form data:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-offwhite rounded-2xl p-8 text-center">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">Enquiry Received!</h3>
        <p className="text-gray-500 mt-2 text-sm">Thank you! Our partnership team will reach out within 2 business days.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Submit Another Enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-offwhite rounded-2xl p-8 space-y-5">
      <h3 className="font-display text-xl font-bold text-navy">{division} Partnership Enquiry</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pName" className="block text-sm font-semibold text-navy mb-1.5">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="pName"
            type="text"
            placeholder="Full name"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold bg-white"}`}
            {...register("name", { required: "Name is required" })}
          />
        </div>
        <div>
          <label htmlFor="pCompany" className="block text-sm font-semibold text-navy mb-1.5">
            Company Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="pCompany"
            type="text"
            placeholder="Your organisation"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.company ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold bg-white"}`}
            {...register("company", { required: "Company is required" })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pEmail" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="pEmail"
            type="email"
            placeholder="you@company.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold bg-white"}`}
            {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" } })}
          />
          {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="pPhone" className="block text-sm font-semibold text-navy mb-1.5">Phone</label>
          <input
            id="pPhone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="pAreaOfInterest" className="block text-sm font-semibold text-navy mb-1.5">
          Area of Interest <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="pAreaOfInterest"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
          {...register("areaOfInterest", { required: "Please select an area" })}
        >
          <option value="">Select area of interest...</option>
          {areas.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="pMessage" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="pMessage"
          rows={4}
          placeholder="Briefly describe your project, investment interest, or enquiry..."
          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold bg-white"}`}
          {...register("message", { required: "Message is required" })}
        />
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting...</> : "Submit Enquiry"}
      </button>
    </form>
  );
}
