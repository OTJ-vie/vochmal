import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Vochmal Limited website, including permitted use, intellectual property, and liability limits.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Please read these terms carefully before using the Vochmal Limited website."
        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&q=85"
        breadcrumbs={[{ label: "Terms of Use" }]}
        overlay="heavy"
        textAlign="left"
      />

      <section className="section-padding bg-white" aria-labelledby="terms-heading">
        <div className="container-custom max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed">
          <p>
            By accessing and using this website, you agree to be bound by these Terms of Use. If you do
            not agree with any part of these terms, please do not use the website.
          </p>

          <article>
            <h2 id="terms-heading" className="font-display text-xl font-semibold text-navy mb-3">
              1. Website Use
            </h2>
            <p>
              You may use this website for lawful informational and business purposes only. You agree not
              to upload harmful content, attempt unauthorised access, or interfere with the website’s
              functionality or security.
            </p>
          </article>

          <article>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">2. Intellectual Property</h2>
            <p>
              All text, images, logos, videos, and other content on this website are the property of
              Vochmal Limited unless otherwise stated. You may not reproduce, distribute, or use our
              content without prior written consent.
            </p>
          </article>

          <article>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">3. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites for convenience. Vochmal Limited is
              not responsible for the content, privacy practices, or availability of those external
              websites.
            </p>
          </article>

          <article>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">4. Limitation of Liability</h2>
            <p>
              Vochmal Limited shall not be liable for any direct, indirect, incidental, or consequential
              losses arising from your use of this website or reliance on its content.
            </p>
          </article>

          <article>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">5. Contact</h2>
            <p>
              For questions about these Terms of Use, please contact us through the contact page or by
              email at vochmal7@gmail.com.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
