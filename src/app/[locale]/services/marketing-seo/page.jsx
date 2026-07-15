import Hero from "@/components/Service/Hero";
import { Check } from "lucide-react";
import React from "react";
import {
  SiGoogleanalytics,
  SiSemrush,
  SiGoogle,
  SiHotjar,
  SiMeta,
  SiMailchimp,
} from "react-icons/si";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import CtaButton from "@/components/CtaButton";
import TestimonialsSection from "@/components/Service/Testimonial";
import Projects from "@/components/Service/Projects";
import { getMessages } from "@/i18n/request";

async function page({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services_pages.marketing_seo;

  const resources = t.resources;
  const offers = t.offers;

  const toolIcons = [
    SiGoogleanalytics,
    SiSemrush,
    HiMagnifyingGlassPlus,
    SiGoogle,
    SiHotjar,
    SiMeta,
    SiMailchimp,
  ];
  const toolColors = [
    "#F59E0B",
    "#EA580C",
    "#2563EB",
    "#3B82F6",
    "#1D4ED8",
    "#EAB308",
    "#2563EB",
  ];
  const tools = t.tool_names.map((title, index) => ({
    icon: toolIcons[index],
    title,
    color: toolColors[index],
  }));

  const ctacards = t.cta.cards.map((card, index) => ({
    id: index + 1,
    ...card,
  }));

  return (
    <div>
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        cta={t.hero.cta}
        image={"/service/hero/seo.png"}
      />
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">{t.features.title}</h2>

            <p className="mt-4 text-xl font-semibold text-primary-accent">
              {t.features.subtitle}
            </p>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.features.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-10">
            {resources.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed text-primary/70  text-base">
                  {item.description}
                </p>

                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-primary/70 text-lg"
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary-accent" />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">{t.offer.title}</h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.offer.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-10">
            {offers.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl "
              >
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed text-primary/70  text-base">
                  {item.description}
                </p>

                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-primary/70 text-lg"
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary-accent" />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {t.tools.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
              {t.tools.description}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="group flex flex-col items-center rounded-3xl border border-primary/10 bg-card px-6 py-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-accent/30 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-background/10">
                    <Icon className="h-8 w-8" style={{ color: tool.color }} />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-primary">
                    {tool.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
            {t.cta.badge}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.cta.title}
          </h2>

          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctacards.map((card) => (
              <div
                key={card.id}
                className="bg-primary-accent/5 rounded-xl p-6 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 text-left"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-primary/70 mb-6">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-10">
            <CtaButton>{t.cta.book_call}</CtaButton>

            <CtaButton changeStyle="outline-button">
              {t.cta.request_quote}
            </CtaButton>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <Projects />
    </div>
  );
}

export default page;
