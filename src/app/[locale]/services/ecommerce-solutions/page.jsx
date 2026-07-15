import CtaButton from "@/components/CtaButton";
import Hero from "@/components/Service/Hero";
import Projects from "@/components/Service/Projects";
import TestimonialsSection from "@/components/Service/Testimonial";
import {
  Cog,
  Globe,
  Shield,
  Smartphone,
  Store,
  Check,
  RefreshCcw,
  Cloud,
  Heart,
  MonitorSmartphone,
  Utensils,
  GraduationCap,
  HeartPulse,
  Shirt,
  ArrowRight,
  TrendingUp,
  Settings,
  Palette,
  Lightbulb,
} from "lucide-react";
import React from "react";
import {
  SiShopify,
  SiWoocommerce,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiStripe,
  SiPaypal,
  SiKlarna,
} from "react-icons/si";
import { getMessages } from "@/i18n/request";

const badgeStyles = [
  "bg-gradient-to-r from-red-500 to-orange-500",
  "bg-green-500",
  "bg-gradient-to-r from-yellow-500 to-orange-500",
];

async function page({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services_pages.ecommerce_solutions;
  const common = messages.services_pages.common;

  const resourceIcons = [Store, Smartphone, Shield, Globe, Cog];
  const resources = t.resources.map((item, index) => ({
    icon: resourceIcons[index],
    ...item,
  }));

  const industryIcons = [
    Shirt,
    HeartPulse,
    GraduationCap,
    Utensils,
    MonitorSmartphone,
    Heart,
    Cloud,
    RefreshCcw,
  ];
  const industries = t.industry_names.map((title, index) => ({
    icon: industryIcons[index],
    title,
  }));

  const platformIcons = [
    SiShopify,
    SiWoocommerce,
    SiNextdotjs,
    SiReact,
    SiLaravel,
    SiStripe,
    SiPaypal,
    SiKlarna,
  ];
  const platformColors = [
    "#95BF47",
    "#96588A",
    "#000000",
    "#61DAFB",
    "#FF2D20",
    "#635BFF",
    "#00457C",
    "#FFB3C7",
  ];
  const tools = t.platform_names.map((title, index) => ({
    icon: platformIcons[index],
    title,
    color: platformColors[index],
  }));

  const whyFeatureIcons = [TrendingUp, Palette, Settings, Lightbulb];
  const features = t.why_features.map((feature, index) => ({
    id: index + 1,
    icon: whyFeatureIcons[index],
    ...feature,
  }));

  const ctafeatures = t.offer.features.map((feature, index) => ({
    id: index + 1,
    ...feature,
    badgeStyle: badgeStyles[index],
  }));

  return (
    <div>
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        cta={t.hero.cta}
        image={"/service/hero/ecom.png"}
      />
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">{t.what_we_offer.title}</h2>

            <p className="mt-4 text-xl font-semibold text-primary-accent">
              {t.what_we_offer.subtitle}
            </p>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.what_we_offer.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-10">
            {resources.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent/10">
                      <Icon className="h-7 w-7 text-primary-accent" />
                    </div>

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

                  <button className="mt-8 inline-flex items-center gap-2 font-medium text-primary-accent transition hover:gap-3">
                    {common.learn_more}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="container">
          <div className="rounded-3xl bg-background   p-8 md:p-12 lg:p-16 shadow-sm">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
                {t.industries.title}
              </h2>

              <p className="mt-5 text-lg text-primary/70">
                {t.industries.description}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.title}
                    className="group rounded-2xl border border-secondary/50 bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:shadow-lg"
                  >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-accent/10 transition-colors group-hover:bg-primary-accent/15">
                      <Icon className="h-9 w-9 text-primary-accent" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-primary">
                      {industry.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              {t.platforms.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
              {t.platforms.description}
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="main-heading mb-4">{t.why_us.title}</h2>
            <p className="text-primary/70 text-lg md:text-xl">
              {t.why_us.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-6 md:gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="border-primary/10 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border bg-card group hover:scale-[1.02] group"
                >
                  <div className="text-primary mb-4 p-3 rounded-xl group-hover:text-primary-accent inline-block bg-primary-accent/20">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-primary-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container  px-4 md:px-6  rounded-2xl ">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t.offer.title}
            </h2>
            <p className="text-primary/70 text-lg md:text-xl">
              {t.offer.description}
            </p>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-primary-accent">
              {t.offer.whats_included}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {ctafeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div
                  className={`inline-block ${feature.badgeStyle} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit`}
                >
                  {feature.badge}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>

                <p className="text-primary/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <CtaButton>{t.offer.book_call}</CtaButton>

            <CtaButton changeStyle="outline-button">
              {t.offer.request_quote}
            </CtaButton>
          </div>
        </div>
      </section>
      <Projects />
      <TestimonialsSection />
    </div>
  );
}

export default page;
