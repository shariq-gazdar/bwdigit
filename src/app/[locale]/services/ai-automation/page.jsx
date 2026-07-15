import Hero from '@/components/Service/Hero'
import React from 'react'
import {
  ArrowRight,
  BookOpen,
  Bot,
  Lightbulb,
  Wrench,
  PlayCircle,
  FileText,
  CircleCheckBig,
  Check,
  Sparkles,
  CheckCircle2,
  Pen,
  Clock3,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import TestimonialsSection from "@/components/Service/Testimonial";
import Projects from "@/components/Service/Projects";
import CtaButton from "@/components/CtaButton";
import { getMessages } from "@/i18n/request";

async function page({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services_pages.ai_automation;
  const common = messages.services_pages.common;

  const iconMap = [Bot, BookOpen, Lightbulb, Wrench, FileText];
  const resources = t.resources.map((item, index) => ({
    ...item,
    icon: iconMap[index],
  }));

  const audienceIconMap = [
    PlayCircle,
    FileText,
    CircleCheckBig,
    Lightbulb,
    Check,
  ];
  const audience = t.audience.map((title, index) => ({
    icon: audienceIconMap[index],
    title,
  }));

  const checklist = t.checklist;

  const popResourceIconMap = [Pen, FileText, Clock3];
  const Popresources = t.popular_items.map((item, index) => ({
    ...item,
    icon: popResourceIconMap[index],
    href: "#",
  }));

  const featureIconMap = [Clock3, Bot, TrendingUp, BarChart3];
  const features = t.cta_features.map((item, index) => ({
    ...item,
    icon: featureIconMap[index],
  }));
  return (
    <div>
      {/* Hero */}
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        cta={t.hero.cta}
        image={"/service/hero/ai.png"}
      />
      {/* What You Will Find */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">{t.what_you_find.title}</h2>

            <p className="mt-4 text-xl font-semibold text-primary-accent">
              {t.what_you_find.subtitle}
            </p>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.what_you_find.description}
            </p>
          </div>

          {/* Cards */}

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
      {/* Who Can Use */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="main-heading">{t.who_can_use.title}</h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.who_can_use.description}
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {audience.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent/10 text-primary-accent">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-14 flex justify-center">
            <div className="flex max-w-3xl items-center gap-4 rounded-3xl border border-accent/15 bg-primary-accent/10 px-8 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-accent/15 text-primary-accent">
                <Sparkles className="h-6 w-6" />
              </div>

              <p className="text-center text-lg font-medium leading-relaxed text-primary-accent">
                {t.highlight}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Service */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="main-heading">{t.about_service.title}</h2>

            <p className="mt-5 text-xl font-medium text-primary-accent">
              {t.about_service.subtitle}
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-primary/70 ">
              {t.about_service.description}
            </p>

            <h3 className="mt-10 text-2xl font-semibold text-primary">
              {t.about_service.what_we_do}
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
      {/* Popular Resources */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="main-heading">{t.popular_resources.title}</h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.popular_resources.description}
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {Popresources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Header */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent/10">
                      <Icon className="h-6 w-6 text-primary-accent" />
                    </div>

                    <span className="rounded-full bg-primary-accent/10 px-4 py-2 text-sm font-medium text-primary-accent">
                      {resource.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-3xl font-bold leading-tight text-primary">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 text-lg leading-relaxed text-primary/70 ">
                    {resource.description}
                  </p>

                  {/* CTA */}
                  <article
                    href={resource.href}
                    className="inline-flex items-center gap-2 font-semibold text-primary-accent transition-all hover:gap-3"
                  >
                    {common.learn_more}
                    <ArrowRight className="h-5 w-5" />
                  </article>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Cta */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-4xl bg-card p-8 shadow-xl md:p-14">
            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="main-heading">{t.cta_section.title}</h2>

              <p className="mt-6 text-lg leading-relaxed text-primary/70 ">
                {t.cta_section.description}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-background/10 p-7 text-center transition hover:-translate-y-1 hover:border-primary-accent/30"
                  >
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent/10">
                      <Icon className="h-7 w-7 text-primary-accent" />
                    </div>

                    <h3 className="text-xl font-semibold text-primary">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-primary/70 text-lg">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaButton>{t.explore_tools}</CtaButton>

              <CtaButton changeStyle={"outline-button"}>
                {t.book_call}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialsSection />
      {/* Projects */}
      <Projects />
    </div>
  );
}

export default page