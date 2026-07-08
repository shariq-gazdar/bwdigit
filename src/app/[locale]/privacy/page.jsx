import React from 'react'

function page() {
  return (
    <section className="bg-background text-primary pt-30 px-5 lg:px-0">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-primary-accent">
            Privacy Policy
          </h1>
          <p className="mt-3 text-secondaryText text-lg">
            Your trust and data security are paramount to us.
          </p>
        </div>
        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              1. General Information
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              BW Digit GmbH takes the protection of personal data
              seriously and processes personal data in accordance with
              applicable data protection laws, including the GDPR.
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              2. Responsible Entity
            </h2>
            <address className="mt-4 space-y-1 not-italic text-secondaryText">
              <p className="max-w-none text-lg">BW Digit GmbH</p>
              <p className="max-w-none text-lg">Kolonnenstraße 8</p>
              <p className="max-w-none text-lg">10827 Berlin</p>
              <p className="max-w-none text-lg">Germany</p>
              <p className="max-w-none text-lg">
                Email:{" "}
                <a
                  href="mailto:info@backpackwander.com"
                  className="footer-link-accent hover:underline"
                >
                  info@backpackwander.com
                </a>
              </p>
            </address>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              3. Data Processing &amp; Your Rights
            </h2>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              This Privacy Policy applies to all services and brands operated by
              Backpack Wander GmbH, including the Pipeline Quality brand.
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              Legal Basis for Data Processing (Art. 6 GDPR):
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
              <li>
                Art. 6(1)(b) GDPR - performance of a contract or pre-contractual
                measures
              </li>
              <li>Art. 6(1)(f) GDPR - legitimate interest</li>
              <li>Art. 6(1)(a) GDPR - consent, where applicable</li>
            </ul>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              Personal data submitted via contact forms or file uploads is
              processed solely to handle inquiries and project-related
              communication.
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              Communication via WhatsApp is subject to WhatsApp's privacy policy
              and used exclusively for business purposes.
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              We use Google Analytics to analyze website usage. Data processing
              is based on consent.
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              Data is stored only as long as necessary or required by statutory
              retention obligations.
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">4. Your Rights</h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              You have the right to access, rectification, erasure, restriction,
              data portability and objection.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              Requests:{" "}
              <a
                href="mailto:info@bwdigit.com"
                className="footer-link-accent hover:underline"
              >
                info@bwdigit.com
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default page