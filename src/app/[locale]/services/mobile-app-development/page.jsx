import CtaButton from "@/components/CtaButton";
import Hero from "@/components/Service/Hero";
import Projects from "@/components/Service/Projects";
import TestimonialsSection from "@/components/Service/Testimonial";
import {
  ArrowRight,
  Check,
  Code2,
  Gift,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  Server,
  ShoppingBag,
  Smartphone,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import React from "react";
import {
  SiFlutter,
  SiReact,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiNodedotjs,
  SiLaravel,
} from "react-icons/si";
import { getMessages } from "@/i18n/request";

async function page({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services_pages.mobile_app_development;

  const resources = t.resources;

  const toolIcons = [
    SiFlutter,
    SiReact,
    SiSwift,
    SiKotlin,
    SiFirebase,
    SiNodedotjs,
    SiLaravel,
  ];
  const toolColors = [
    "#02569B",
    "#61DAFB",
    "#F05138",
    "#7F52FF",
    "#FFCA28",
    "#339933",
    "#FF2D20",
  ];
  const tools = t.tool_names.map((title, index) => ({
    icon: toolIcons[index],
    title,
    color: toolColors[index],
  }));

  const solutionIcons = [
    ShoppingBag,
    Wrench,
    Smartphone,
    Users,
    MessageCircle,
  ];
  const solutions = t.solutions.map((solution, index) => ({
    icon: solutionIcons[index],
    ...solution,
  }));

  const featureIcons = [Rocket, Code2, Server];
  const features = t.feature_section.map((feature, index) => ({
    icon: featureIcons[index],
    ...feature,
  }));

  const includedIcons = [Smartphone, Palette, Server];
  const includedItems = t.cta.included_items.map((text, index) => ({
    icon: includedIcons[index],
    text,
  }));

  const getIcons = [Phone, Zap, Target, Users];
  const getItems = t.cta.get_items.map((text, index) => ({
    icon: getIcons[index],
    text,
  }));

  return (
    <div>
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        cta={t.hero.cta}
        image={"/service/hero/mobile.png"}
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

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="main-heading">{t.difference.title}</h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.difference.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent/10">
                      <Icon className="h-6 w-6 text-primary-accent" />
                    </div>
                  </div>

                  <h3 className="mb-5 text-3xl font-bold leading-tight text-primary">
                    {solution.title}
                  </h3>

                  <p className="mb-8 text-lg leading-relaxed text-primary/70 ">
                    {solution.description}
                  </p>

                  <article className="inline-flex items-center gap-2 font-semibold text-primary-accent transition-all hover:gap-3">
                    {solution.cta}
                    <ArrowRight className="h-5 w-5" />
                  </article>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-primary-accent/5 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 border border-primary-accent/10 hover:border-primary-accent/30 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-accent/10 text-primary-accent group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-primary-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-accent/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-primary-accent/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-primary-accent/10 text-primary-accent px-4 py-2 rounded-full text-sm font-semibold border border-primary-accent/20">
              <Gift size={16} strokeWidth={2} />
              <span>{t.cta.badge}</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center max-w-4xl mx-auto mb-4">
            {t.cta.title}
          </h2>

          <p className="text-primary/70 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            {t.cta.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-accent/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="text-primary-accent">✦</span>{" "}
                {t.cta.whats_included}
              </h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 shrink-0 mt-0.5 text-primary-accent">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-primary/80">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-primary-accent/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="text-primary-accent">✦</span>{" "}
                {t.cta.what_you_get}
              </h3>
              <ul className="space-y-4">
                {getItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 shrink-0 mt-0.5 text-primary-accent">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-primary/80">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p className="text-primary/60 text-center text-sm md:text-base italic mb-8">
            {t.cta.ideal_for}
          </p>

          <div className="text-center">
            <CtaButton>{t.cta.button}</CtaButton>
          </div>
        </div>
      </section>
      <Projects />
      <TestimonialsSection />
    </div>
  );
}

export default page;
