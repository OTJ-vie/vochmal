"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  division: string;
  subject: string;
  message: string;
}

const divisions = [
  "General Enquiry",
  "Construction",
  "Mining",
  "Bakery",
  "General Procurement",
  "Service Apartments",
  "Oil & Gas",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-gray-100">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy">Message Sent!</h3>
        <p className="text-gray-500 mt-2">Thank you! We&rsquo;ll be in touch within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Adewale Okonkwo"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
              errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"
            }`}
            aria-required="true"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
              errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"
            }`}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
            })}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold transition-colors"
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="division" className="block text-sm font-semibold text-navy mb-1.5">
            Division of Interest
          </label>
          <select
            id="division"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gold transition-colors bg-white"
            {...register("division")}
          >
            {divisions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-1.5">
          Subject <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Brief subject of your enquiry"
          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
            errors.subject ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"
          }`}
          aria-required="true"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p role="alert" className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, requirement, or question..."
          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none ${
            errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-gold"
          }`}
          aria-required="true"
          {...register("message", { required: "Please enter your message", minLength: { value: 20, message: "Message must be at least 20 characters" } })}
        />
        {errors.message && (
          <p role="alert" className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
