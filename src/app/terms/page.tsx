import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Tattoo Agent.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: February 27, 2026
        </p>
      </section>

      <SectionWrapper>
        <div className="prose-invert mx-auto max-w-3xl space-y-8 text-cream/80 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using Tattoo Agent (&ldquo;the
              Service&rdquo;), operated by Tattoo Agent LLC
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), you agree to be bound by these
              Terms of Service. If you do not agree to these terms,
              do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              2. Description of Service
            </h2>
            <p>
              Tattoo Agent provides business management tools for
              independent tattoo artists, including website hosting,
              booking management, payment processing integration,
              client communication tools, social media scheduling,
              and marketing automation.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              3. Account Registration
            </h2>
            <p>
              To use the Service, you must create an account and
              provide accurate, complete information. You are
              responsible for maintaining the security of your
              account credentials and for all activities under your
              account.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              4. Subscription & Billing
            </h2>
            <p>
              The Service is offered on a monthly or annual
              subscription basis. By subscribing, you authorize us
              to charge your payment method on a recurring basis.
              Annual subscriptions are billed upfront for the full
              year. You may cancel at any time, and your access will
              continue through the end of the current billing
              period.
            </p>
            <p>
              A one-time setup fee may apply, as described on our
              pricing page. This fee covers initial onboarding,
              website setup, and platform configuration.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              5. Domain Ownership
            </h2>
            <p>
              Artists purchase and own their own domain names. If
              you cancel your subscription, your domain remains
              yours. The website built on the Tattoo Agent tool
              will go offline, but you retain full ownership of
              your domain and may point it elsewhere.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              6. Payment Processing
            </h2>
            <p>
              Payment processing for client deposits and bookings
              is handled through Stripe. Tattoo Agent does not take
              a percentage of your transactions. Standard Stripe
              processing fees (currently 2.9% + $0.30 per
              transaction) apply and are the responsibility of the
              artist.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              7. Content Ownership
            </h2>
            <p>
              You retain all rights to your content, including
              portfolio images, client data, and business
              information uploaded to the Service. We do not claim
              ownership of your content.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              8. Acceptable Use
            </h2>
            <p>
              You agree not to use the Service for any unlawful
              purpose or in violation of any applicable laws. You
              are responsible for ensuring that your use of the
              Service complies with all applicable regulations in
              your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Tattoo Agent
              LLC shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising
              from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any
              time. We will notify subscribers of material changes
              via email. Continued use of the Service after changes
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wider text-lime">
              11. Contact
            </h2>
            <p>
              For questions about these Terms of Service, contact
              us at{" "}
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
    </main>
  );
}
