import { getMessages } from "@/i18n/request.js";

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.privacy;

  return (
    <section className="bg-background text-primary pt-30 px-5 lg:px-0">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-primary-accent">{t.title}</h1>
          <p className="mt-3 text-secondaryText text-lg">{t.subtitle}</p>
        </div>
        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.general_info_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.general_info_text}
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.responsible_entity_title}
            </h2>
            <address className="mt-4 space-y-1 not-italic text-secondaryText">
              <p className="max-w-none text-lg">{t.company_name}</p>
              <p className="max-w-none text-lg">{t.address}</p>
              <p className="max-w-none text-lg">{t.city}</p>
              <p className="max-w-none text-lg">{t.country}</p>
              <p className="max-w-none text-lg">
                Email:{" "}
                <a
                  href={`mailto:${t.email}`}
                  className="footer-link-accent hover:underline"
                >
                  {t.email}
                </a>
              </p>
            </address>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.data_processing_title}
            </h2>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              {t.data_processing_text}
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              {t.legal_basis_title}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
              <li>{t.legal_basis_1}</li>
              <li>{t.legal_basis_2}</li>
              <li>{t.legal_basis_3}</li>
            </ul>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              {t.data_usage_1}
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              {t.data_usage_2}
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              {t.data_usage_3}
            </p>
            <p className="text-lg mt-4 max-w-none text-secondaryText">
              {t.data_usage_4}
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.your_rights_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.your_rights_text}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.requests_label}{" "}
              <a
                href={`mailto:${t.requests_email}`}
                className="footer-link-accent hover:underline"
              >
                {t.requests_email}
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
