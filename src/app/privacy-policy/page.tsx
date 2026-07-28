import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Vochmal Limited and its website, covering personal data, cookies, and your rights.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body:
      "We collect information you provide when you contact us, request a quote, make a booking, or subscribe to our updates. This may include your name, company name, email address, phone number, location, and project requirements.",
  },
  {
    title: "2. How We Use Your Information",
    body:
      "We use your information to respond to enquiries, process bookings, deliver services, improve our website experience, and communicate with you about relevant updates. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Cookies and Analytics",
    body:
      "Our website may use cookies and similar technologies to remember preferences, understand visitor behaviour, and improve performance. You can disable cookies in your browser settings, although some site features may be affected.",
  },
  {
    title: "4. Data Protection and Storage",
    body:
      "We take reasonable administrative, technical, and physical safeguards to protect your information from unauthorised access, loss, or misuse. Data is stored securely and retained only for as long as necessary for business, legal, or regulatory purposes.",
  },
  {
    title: "5. Your Rights",
    body:
      "Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. Please contact us if you would like to exercise those rights.",
  },
  {
    title: "6. Contact Us",
    body:
      "For privacy-related questions or requests, contact us at vochmal7@gmail.com or through the contact page on this website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Vochmal Limited collects, uses, and protects your information on this website."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1920&q=85"
        breadcrumbs={[{ label: "Privacy Policy" }]}
        overlay="heavy"
        textAlign="left"
      />

      <section className="section-padding bg-white" aria-labelledby="privacy-policy-heading">
        <div className="container-custom max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-8">
            This Privacy Policy explains how Vochmal Limited and its affiliates collect, use, store,
            and protect personal information when you use our website or interact with our team.
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h2 className="font-display text-xl font-semibold text-navy mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
