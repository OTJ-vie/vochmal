"use client";

import { useState, useRef, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2, Upload } from "lucide-react";

interface VendorFormData {
  companyName: string;
  rcNumber: string;
  businessCategory: string;
  primaryProducts: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
}

const businessCategories = [
  "Construction Materials",
  "Electrical & Mechanical",
  "IT & Technology",
  "Medical & Healthcare",
  "Oil & Gas Equipment",
  "Food & Beverage",
  "Office Supplies",
  "Logistics & Transport",
  "Professional Services",
  "Other",
];

export default function VendorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<VendorFormData>();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    void handleSubmit(onSubmit)(event);
  };

  const onSubmit = async (data: VendorFormData) => {
    setLoading(true);
    setSubmitError(null);
    try {
      const body = new FormData();
      Object.entries(data).forEach(([key, value]) => body.append(key, value));
      const file = fileInputRef.current?.files?.[0];
      if (file) body.append("companyProfile", file);

      const res = await fetch("/api/vendor", { method: "POST", body });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
      setFileName("");
    } catch {
      setSubmitError("Something went wrong sending your registration. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-offwhite rounded-2xl p-8 text-center">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">Registration Received!</h3>
        <p className="text-gray-500 mt-2 text-sm">Your vendor registration is under review. We will contact you within 5 business days.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Register Another Vendor</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vCompanyName" className="block text-sm font-semibold text-navy mb-1.5">
            Company Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="vCompanyName"
            type="text"
            placeholder="Registered company name"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.companyName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("companyName", { required: "Company name is required" })}
          />
        </div>
        <div>
          <label htmlFor="vRcNumber" className="block text-sm font-semibold text-navy mb-1.5">
            RC Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="vRcNumber"
            type="text"
            placeholder="CAC RC number"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.rcNumber ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("rcNumber", { required: "RC Number is required" })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vCategory" className="block text-sm font-semibold text-navy mb-1.5">
            Business Category <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="vCategory"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("businessCategory", { required: "Category is required" })}
          >
            <option value="">Select category...</option>
            {businessCategories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="vProducts" className="block text-sm font-semibold text-navy mb-1.5">
            Primary Products / Services <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="vProducts"
            type="text"
            placeholder="e.g. Steel pipes, PPE equipment"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("primaryProducts", { required: "Products/services required" })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="vContactName" className="block text-sm font-semibold text-navy mb-1.5">
            Contact Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="vContactName"
            type="text"
            placeholder="Contact person"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("contactName", { required: "Contact name required" })}
          />
        </div>
        <div>
          <label htmlFor="vEmail" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="vEmail"
            type="email"
            placeholder="contact@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" } })}
          />
          {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="vPhone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="vPhone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
            {...register("phone", { required: "Phone required" })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="vAddress" className="block text-sm font-semibold text-navy mb-1.5">
          Company Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="vAddress"
          type="text"
          placeholder="Full company address"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold"
          {...register("address", { required: "Address required" })}
        />
      </div>

      <div>
        <label htmlFor="vProfile" className="block text-sm font-semibold text-navy mb-1.5">
          Upload Company Profile (Optional)
        </label>
        <label
          htmlFor="vProfile"
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-200 hover:border-gold cursor-pointer transition-colors bg-white"
        >
          <Upload size={18} className="text-gold shrink-0" aria-hidden="true" />
          <span className="text-sm text-gray-500">
            {fileName || "PDF, DOC, DOCX — Max 10 MB"}
          </span>
          <input
            id="vProfile"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            ref={fileInputRef}
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
        <p className="text-gray-400 text-xs mt-1">Accepted formats: PDF, DOC, DOCX. Maximum file size: 10 MB.</p>
      </div>

      {submitError && (
        <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting...</> : "Register as Vendor"}
      </button>
    </form>
  );
}
