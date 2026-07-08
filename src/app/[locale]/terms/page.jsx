import React from 'react'

function page() {
  return (
    <section className="bg-background text-primary pt-30">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-primary-accent">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-secondaryText text-lg">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>
        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              1. General Terms
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              These General Terms and Conditions apply to all services and
              offers of BW Digit GmbH.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              BW Digit GmbH provides, in particular, the following
              services:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
              <li>Consulting for individuals and companies</li>
              <li>QA/QC documentation support and engineering services</li>
              <li>Project-related remote and on-site support</li>
              <li>
                Services in the areas of marketing, digital products, and online
                offerings
              </li>
              <li>Sale of digital products and merchandise</li>
            </ul>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              The services are provided under various brands of BW Digit GmbH,
              including the Pipeline Quality brand.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              The contractual partner is exclusively BW Digit GmbH,
              unless expressly agreed otherwise.
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              2. Our Services
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              Backpack Wander GmbH provides digital business consulting, web
              design, and digital marketing services.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              We reserve the right to modify or discontinue any service at any
              time without notice.
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              3. User Obligations
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              Users must provide accurate information and use our services in
              compliance with applicable laws.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              You are responsible for maintaining the confidentiality of your
              account information.
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              4. Limitation of Liability
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              The liability of BW Digit GmbH is limited to intent and
              gross negligence, to the extent permitted by law.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              Liability for indirect damages or lost profits is excluded, to the
              extent permitted by law.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              The laws of the Federal Republic of Germany apply.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              The place of jurisdiction is - to the extent permitted by law -
              the company's registered office.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default page