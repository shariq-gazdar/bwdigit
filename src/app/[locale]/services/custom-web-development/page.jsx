import CtaButton from '@/components/CtaButton';
import Hero from '@/components/Service/Hero'
import Projects from '@/components/Service/Projects';
import TestimonialsSection from '@/components/Service/Testimonial';
import {
  Building,
  Check,
  CheckCircle2,
  Gauge,
  Globe,
  Layout,
  Link,
  Rocket,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { getMessages } from "@/i18n/request";

async function page({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services_pages.custom_web_development;

  const checklist = t.checklist;
  const resources = t.resources;
  const features = t.features.map((title, index) => {
    const icons = [Rocket, Building, Building, Globe, Users, Wrench];
    return {
      id: index + 1,
      icon: icons[index],
      title,
    };
  });
  const problems = t.problems.map((problem, index) => {
    const icons = [Layout, Gauge, Link, TrendingUp];
    return {
      id: index + 1,
      icon: icons[index],
      title: problem.title,
      description: problem.description,
    };
  });
  return (
    <div>
      {/* Hero */}
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        cta={t.hero.cta}
        image={"/service/hero/web.png"}
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
          </div>

          {/* Right Illustration */}
          <div className="order-1 flex justify-center lg:order-2">
            <Image
              src="/service/web-about.png"
              alt="UI UX Checklist"
              width={620}
              height={620}
              className="h-auto w-full max-w-md lg:max-w-xl"
              priority
            />
          </div>
        </div>
      </section>
      {/* Tech We Used */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">{t.tech_section.title}</h2>

            <p className="mt-4 text-xl font-semibold text-primary-accent">
              {t.tech_section.subtitle}
            </p>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              {t.tech_section.description}
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-10">
            {resources.map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
      </section>
      {/* Costumized website */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="main-heading">{t.features_section.title}</h2>

          <p className="mt-4 text-xl font-semibold text-primary-accent mb-5">
            {t.features_section.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-primary-accent/5 rounded-2xl p-6  md:p-8 text-center hover:shadow-xl transition-all duration-300 border border-primary-accent/10 hover:border-primary-accent/30 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-accent/10 text-primary-accent group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl text-primary mb-2 group-hover:text-primary-accent transition-colors">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Cta */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          {/* Heading - Static Text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center max-w-4xl mx-auto mb-4">
            {t.problems_section.title}
          </h2>

          {/* Description - Static Text */}
          <p className="text-primary/70 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            {t.problems_section.description}
          </p>

          {/* Cards Grid - Using array of objects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.id}
                  className="group bg-primary-accent/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform duration-300 mb-4">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-primary/70 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button - Static Text */}
          <div className="text-center">
            <CtaButton>{t.cta}</CtaButton>
          </div>
        </div>
      </section>
      {/* Projects */}
      <Projects />
      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}

export default page