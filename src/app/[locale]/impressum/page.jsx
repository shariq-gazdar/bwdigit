import { getMessages } from "@/i18n/request.js";

export default async function ImpressumPage({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.impressum;

  return (
    <section className="bg-background text-primary pt-30">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-primary-accent">{t.title}</h1>
          <p className="mt-3 text-secondaryText text-lg">{t.subtitle}</p>
        </div>
        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.company_info_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">{t.company_name_label}</span>{" "}
              {t.company_name}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">{t.address_label}</span>{" "}
              {t.address}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">{t.email_label}</span>{" "}
              <a
                href={`mailto:${t.email}`}
                className="footer-link-accent hover:underline"
              >
                {t.email}
              </a>
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">
                {t.commercial_register_label}
              </span>{" "}
              {t.commercial_register}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">{t.register_court_label}</span>{" "}
              {t.register_court}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              <span className="text-offwhite">{t.managing_director_label}</span>{" "}
              {t.managing_director}
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.business_description_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.business_description}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.service_pillars}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
              <li>{t.pillar_1}</li>
              <li>{t.pillar_2}</li>
            </ul>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.liability_notice_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.liability_notice}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
