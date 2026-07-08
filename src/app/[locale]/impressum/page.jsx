import React from 'react'

function page() {
  return (
    <section className="bg-background text-primary pt-30">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-primary-accent">
            Impressum
          </h1>
          <p className="mt-3 text-secondaryText text-lg">
            Legal information for BW Digit GmbH
          </p>
        </div>
        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              1. Company Information
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">Company Name:</span> BW Digit GmbH
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">Address:</span> Kolonnenstraße 8, 10827 Berlin, Germany
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">Email:</span>{" "}
              <a
                href="mailto:info@bwdigit.com"
                className="footer-link-accent hover:underline"
              >
                info@bwdigit.com
              </a>
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">Commercial Register:</span> HRB 282058 B
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">Register Court:</span> Charlottenburg Commercial Court, Berlin
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">Managing Director:</span> Biljana Habel
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              2. Business Description
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              BW Digit GmbH provides specialized QA/QC engineering services and digital tools for the construction industry.
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              Our two main service pillars are:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
              <li>Pipeline Quality: Engineering and QA/QC services including welding traceability, documentation, site inspections, and ISO compliance</li>
              <li>BW Digit: Digital tools and automation solutions for construction site documentation and management</li>
            </ul>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              3. Liability Notice
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              Despite careful monitoring of content, we as operators of this website assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default page
