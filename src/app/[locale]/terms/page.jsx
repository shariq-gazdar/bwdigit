import { getMessages } from "@/i18n/request.js";

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.terms;

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
              {t.general_terms_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.general_terms_1}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.general_terms_2}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
              <li>{t.service_1}</li>
              <li>{t.service_2}</li>
              <li>{t.service_3}</li>
              <li>{t.service_4}</li>
              <li>{t.service_5}</li>
            </ul>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.general_terms_3}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.general_terms_4}
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.our_services_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.our_services_1}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.our_services_2}
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.user_obligations_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.user_obligations_1}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.user_obligations_2}
            </p>
          </article>
          <article>
            <h2 className="text-primary-accent text-2xl font-bold font-heading text-offwhite">
              {t.liability_title}
            </h2>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.liability_1}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.liability_2}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.liability_3}
            </p>
            <p className="mt-4 max-w-none text-secondaryText text-lg">
              {t.liability_4}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
