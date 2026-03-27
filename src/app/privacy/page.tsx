import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Tattoo Agent.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: February 27, 2026
        </p>
      </section>

      <SectionWrapper>
        <div className="prose-invert mx-auto max-w-3xl space-y-8 text-cream/80 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly, including
              your name, email address, phone number, business
              information, portfolio images, and client data you
              enter into the Service. We also collect usage data
              such as pages visited and features used.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Provide and maintain the Service</li>
              <li>
                Build and host your professional website
              </li>
              <li>
                Process bookings and facilitate payment collection
              </li>
              <li>
                Send automated communications on your behalf
                (appointment reminders, aftercare emails, etc.)
              </li>
              <li>
                Provide customer support and respond to inquiries
              </li>
              <li>
                Improve the Service based on usage patterns
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              3. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We share
              data only with service providers necessary to operate
              the Service (e.g., Stripe for payment processing,
              email delivery services for automated communications).
              These providers are bound by their own privacy
              policies and data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              4. Client Data
            </h2>
            <p>
              Client data you enter into the Service (client names,
              contact information, appointment history) is your
              data. We process it on your behalf to provide the
              Service. We do not use your client data for our own
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              5. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect
              your information. However, no method of electronic
              storage is 100% secure. We encourage you to use strong
              passwords and keep your account credentials
              confidential.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              6. Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is
              active. If you cancel your subscription, we will
              retain your data for 30 days to allow for
              reactivation, after which it will be deleted. You may
              request immediate data deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              7. Cookies & Analytics
            </h2>
            <p>
              Our marketing website may use cookies and analytics
              tools to understand how visitors interact with the
              site. The Service application uses session cookies
              necessary for authentication and functionality.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              8. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your
              personal information. You may also request a copy of
              your data in a portable format. To exercise these
              rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time.
              We will notify subscribers of material changes via
              email. The updated policy will be effective as of the
              date posted.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              10. Contact
            </h2>
            <p>
              For questions about this Privacy Policy or your data,
              contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-lime hover:underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
}
