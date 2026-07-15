import CTASection from "@/components/Service/Cta";
import Hero from "@/components/Service/Hero";
import Projects from "@/components/Service/Projects";
import TestimonialsSection from "@/components/Service/Testimonial";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Brain,
  Check,
  CheckCircle2,
  Handshake,
  Lightbulb,
  LineChart,
  RefreshCw,
  Rocket,
  ShoppingCart,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { getMessages } from "@/i18n/request";

async function UiUxDesign({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services_pages.ui_ux_design;

  const checklist = t.checklist;

  const getCardIconMap = [Users, Check, Boxes, Handshake];
  const getCards = t.get_cards.map((item, index) => ({
    ...item,
    icon: getCardIconMap[index],
  }));

  const audienceIconMap = [Lightbulb, RefreshCw, LineChart, ShoppingCart];
  const audienceCards = t.audience_cards.map((title, index) => ({
    icon: audienceIconMap[index],
    title,
  }));

  const toolIcons = [
    "/service/tools/figma.svg",
    "/service/tools/xd.svg",
    "/service/tools/sketch.svg",
    "/service/tools/linkedn.svg",
    "/service/tools/miro.svg",
    "/service/tools/webflow.svg",
  ];
  const tools = t.tool_names.map((name, index) => ({
    name,
    icon: toolIcons[index],
  }));

  const includedItems = t.special_offer.included_items;

  return (
    <div>
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        cta={t.hero.cta}
        image={"/service/hero/ui.png"}
      />
      {/* About */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {t.about.title}
            </h2>

            <p className="mt-5 text-xl font-medium text-primary-accent">
              {t.about.subtitle}
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-primary/70">
              {t.about.description}
            </p>

            <h3 className="mt-10 text-2xl font-semibold text-primary">
              {t.about.what_we_do}
            </h3>

            <ul className="mt-8 space-y-5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-6 w-6 shrink-0 text-primary-accent"
                    strokeWidth={2.5}
                  />

                  <span className="text-lg leading-7 text-primary/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-5">
              <Target className="mt-0.5 h-6 w-6 shrink-0 text-primary-accent" />

              <p className="text-lg leading-7 text-primary">{t.target_note}</p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="order-1 flex justify-center lg:order-2">
            <Image
              src="/service/about-ui.png"
              alt="UI UX Checklist"
              width={620}
              height={620}
              className="h-auto w-full max-w-md lg:max-w-xl"
              priority
            />
          </div>
        </div>
      </section>
      {/* {t.what_you_get.title} */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary">
              {t.what_you_get.title}
            </h2>

            <p className="mt-5 text-xl font-semibold text-primary-accent">
              {t.what_you_get.subtitle}
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary/70">
              {t.what_you_get.description}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {getCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group rounded-3xl border border-primary/10 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-accent/10">
                      <Icon
                        className="h-5 w-5 text-primary-accent"
                        strokeWidth={2.3}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-base leading-8 text-primary/70">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Benifits */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              {t.benefits.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
              {t.benefits.description}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
            {audienceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-primary/10 bg-card p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-accent/10">
                    <Icon className="h-8 w-8 text-primary-accent" />
                  </div>

                  <p className="mt-8 text-center text-base leading-relaxed text-primary/80">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Highlight */}
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-primary-accent/10 bg-primary-accent/10 px-8 py-8 shadow-sm ">
            <div className="flex items-center justify-center gap-3">
              <Brain className="h-6 w-6 shrink-0 text-primary-accent" />

              <p className="text-center text-base font-semibold leading-relaxed text-primary-accent">
                {t.benefit_note}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tools */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {t.tools.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
              {t.tools.description}
            </p>
          </div>

          {/* Tools */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
            {tools.map((tool) => {
              return (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center rounded-3xl border border-primary/10 bg-card px-6 py-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-accent/30 hover:shadow-xl "
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl   transition group-hover:scale-110">
                    <Image
                      src={tool.icon}
                      fill
                      alt={tool.name}
                      className="text-primary-accent"
                    />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-primary">
                    {tool.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Special Offer */}
      <section className="bg-background py-20 px-10">
        <div className="container">
          <div className="overflow-hidden rounded-4xl bg-card p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
              {/* Left */}
              <div className="relative border-l-4 border-primary-accent pl-6">
                <span className="inline-flex items-center rounded-full border border-primary-accent/30 bg-primary-accent/10 px-5 py-2 font-semibold uppercase tracking-wide text-primary-accent text-xs">
                  {t.special_offer.badge}
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-4xl">
                  {t.special_offer.title}
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90">
                  {t.special_offer.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-primary-accent px-8 py-4 font-semibold text-white transition hover:opacity-90">
                    {t.special_offer.get_started}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20">
                    {t.special_offer.view_examples}
                  </button>
                </div>

                <div className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-accent/20">
                      <Rocket className="h-5 w-5 text-primary-accent" />
                    </div>

                    <p className="text-base text-white/90">
                      {t.special_offer.ideal_for}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-accent/20">
                      <Lightbulb className="h-5 w-5 text-primary-accent" />
                    </div>

                    <p className="text-base text-white/90">
                      {t.special_offer.results}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold leading-relaxed">
                  {t.special_offer.included_title}
                </h3>

                <div className="my-8 h-px bg-white/10" />

                <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-accent" />

                      <p className="text-base text-white/85">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-primary-accent/20 bg-primary-accent/10 p-6">
                  <div className="flex gap-4">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-primary-accent" />

                    <p className="text-base leading-relaxed text-primary-accent">
                      {t.special_offer.guarantee}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <TestimonialsSection />
      {/* Projects */}
      <Projects />
      {/* Cta */}
      <CTASection
        title={<>{t.cta.title}</>}
        description={t.cta.description}
        primaryText={t.cta.primary}
        secondaryText={t.cta.secondary}
      />
    </div>
  );
}

export default UiUxDesign;

