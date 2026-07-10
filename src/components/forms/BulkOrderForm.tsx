"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface BulkOrderData {
  productCategory: string;
  quantity: string;
  deliveryLocation: string;
  contactName: string;
  phone: string;
  email: string;
  message: string;
}

const productCategories = ["Breads", "Pastries & Cakes", "Confectionery", "Catering Packs", "Mixed Order"];

export default function BulkOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BulkOrderData>();

  const onSubmit = async (data: BulkOrderData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Bulk order data:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">Order Enquiry Received!</h3>
        <p className="text-gray-500 mt-2 text-sm">Thank you! We&rsquo;ll be in touch within 24 hours with pricing and delivery details.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-5 text-sm">Submit Another Enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white rounded-2xl p-8 border border-gray-100 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="productCategory" className="block text-sm font-semibold text-navy mb-1.5">
            Product Category <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="productCategory"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold bg-white"
            {...register("productCategory", { required: "Please select a category" })}
          >
            <option value="">Select category...</option>
            {productCategories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.productCategory && <p role="alert" className="text-red-500 text-xs mt-1">{errors.productCategory.message}</p>}
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-navy mb-1.5">
            Estimated Quantity <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="quantity"
            type="text"
            placeholder="e.g. 500 loaves / 50 packs"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.quantity ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("quantity", { required: "Quantity is required" })}
          />
          {errors.quantity && <p role="alert" className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-navy mb-1.5">
          Delivery Location <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="deliveryLocation"
          type="text"
          placeholder="City, State"
          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.deliveryLocation ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
          {...register("deliveryLocation", { required: "Delivery location is required" })}
        />
        {errors.deliveryLocation && <p role="alert" className="text-red-500 text-xs mt-1">{errors.deliveryLocation.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bContactName" className="block text-sm font-semibold text-navy mb-1.5">
            Contact Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="bContactName"
            type="text"
            placeholder="Your full name"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.contactName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("contactName", { required: "Name is required" })}
          />
        </div>
        <div>
          <label htmlFor="bPhone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="bPhone"
            type="tel"
            placeholder="+234 800 000 0000"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
            {...register("phone", { required: "Phone is required" })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bEmail" className="block text-sm font-semibold text-navy mb-1.5">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="bEmail"
          type="email"
          placeholder="you@company.com"
          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"}`}
          {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" } })}
        />
        {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="bMessage" className="block text-sm font-semibold text-navy mb-1.5">Additional Notes</label>
        <textarea
          id="bMessage"
          rows={3}
          placeholder="Specific requirements, delivery frequency, packaging preferences..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold resize-none"
          {...register("message")}
        />
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting...</> : "Submit Bulk Order Enquiry"}
      </button>
    </form>
  );
}
