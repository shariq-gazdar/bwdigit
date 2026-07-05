import Image from "next/image";
import { getMessages } from "../../i18n/request.js";
import { locales, defaultLocale } from "../../i18n/config.js";
import CtaButton from "@/components/CtaButton.jsx";
import { heritage, outcomes, platfrom, services, steps, studies } from '@/utils/home.js'
import { Check, Factory, Mail } from "lucide-react";

export default async function Home({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.home;

  return (
    <div className="pt-20 bg-background font-body w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className=" grid grid-cols-1 lg:grid-cols-2  py-10 gap-y-10 lg:gap-y-0  lg:mb-0">
        {/* Left */}
        <div className="flex flex-col gap-y-5 mx-10 ">
          <h1 className="hero-gradient text-6xl font-heading">
            {t.hero.title}
          </h1>
          <p className="text-primary">{t.hero.description}</p>
          <div className="mt-5 flex gap-x-2 gap-y-2 lg:gap-y-0">
            <CtaButton
              changeStyle={
                "bg-primary-accent text-primary-foreground px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
              }
            >
              {t.hero.cta}
            </CtaButton>
            <CtaButton
              changeStyle={
                "bg-background text-primary px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
              }
            >
              {"Request Demo"}
            </CtaButton>
          </div>
        </div>
        {/* Right */}
        <div className="relative hidden lg:block">
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-[85%] h-full bg-linear-to-br from-secondary-accent/20 to-primary-accent blur-2xl  z-10"></div>
          <Image
            src="/hero-image.jpeg"
            alt="Hero"
            className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl absolute z-20"
            width={800}
            height={600}
            priority
          />
        </div>
      </section>
      {/* Core Digital Services */}
      <section className="flex flex-col items-center my-10 lg:my-20">
        <h1 className="main-heading text-center">{t.services_section.title}</h1>
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 justify-between items-stretch gap-x-5">
          {t.services.map((service, index) => {
            const Icon = services[index].Icon;
            return (
              <div
                key={index}
                className="text-primary bg-card flex flex-col gap-x-5 gap-y-6 my-10 rounded-2xl hover:border-[0.5px] hover:border-primary-accent   transition-all overflow-hidden"
              >
                <div className="relative w-full h-80 ">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain p-10"
                    fill
                  />
                </div>
                <div className="p-10 pt-6 flex flex-col gap-y-6">
                  <h1 className="text-lg font-heading">{service.title}</h1>
                  <p className="font-body text-base">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Engineering + Software */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:my-20 my-10 mx-10 items-center justify-between gap-x-5 gap-y-10 lg:gap-y-0">
        {/* Left */}
        <div className="flex flex-col gap-y-4">
          <h1 className="main-heading">{t.engineering_section.title}</h1>
          <p className="text-primary/90 ">
            {t.engineering_section.description}
          </p>
          {t.engineering_section.points.map((point, index) => (
            <div key={index} className="flex gap-x-1 ">
              <Check className="text-primary-accent" />
              <p className="text-primary/70">{point}</p>
            </div>
          ))}
        </div>
        {/* Right */}
        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute left-[1.4rem] top-6 bottom-6 w-px bg-gradient-to-b from-primary-accent via-primary-accent/40 to-transparent"></div>

          <ol className="space-y-6">
            {t.steps.map((step, index) => (
              <li key={index} className="relative pl-14">
                {/* Step Number */}
                <div className="absolute left-0 top-5 grid w-11 h-11 place-items-center rounded-full border border-primary-accent/40 bg-card text-sm font-semibold text-primary-accent z-10">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="bg-[#11161c] rounded-2xl border border-primary-accent/10 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-heading text-primary">
                      {step.title}
                    </h3>

                    <Check className="w-4 h-4 text-primary-accent shrink-0 mt-1" />
                  </div>

                  <p className="mt-2 text-primary/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* Engineering Heritage  Operational */}
      <section
        className="flex flex-col items-center lg:my-20 my-10 mx-5 lg:mx-0 gap-y-5"
        id="portfolio"
      >
        <h1 className="main-heading text-center">{t.heritage_section.title}</h1>
        <p className="text-primary/70 text-center">
          {t.heritage_section.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-10 mt-5 max-w-6xl">
          {t.heritage.map((h, index) => {
            const Icon = heritage[index].icon;
            return (
              <div
                className="bg-card rounded-2xl overflow-hidden hover:border hover:border-primary-accent transition-all "
                key={index}
              >
                <div className="bg-card rounded-2xl p-6 hover:border hover:border-primary-accent transition-all">
                  <h3 className="text-lg font-heading text-primary">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-primary/70 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* The Platform */}
      <section
        className="flex flex-col items-center lg:my-20 my-10 mx-5 lg:mx-0 gap-y-5"
        id="about"
      >
        <h1 className="main-heading text-center">{t.platform_section.title}</h1>
        <p className="text-primary/70 text-center">
          {t.platform_section.description}
        </p>
        <Image
          src="/dashboard.png"
          alt="Platform"
          width={950}
          height={800}
          className="hidden lg:block"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10">
          {t.platform.map((p, index) => {
            return (
              <div
                className="bg-card rounded-2xl p-6 flex flex-row gap-x-5 hover:border hover:border-primary-accent transition-all "
                key={index}
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-heading text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-base text-primary/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Bussines Value */}
      <section className="flex flex-col items-center lg:my-20 my-10 gap-y-5 mx-5 lg:mx-0">
        <h1 className="main-heading text-center">{t.outcomes_section.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 mx-10">
          {t.outcomes.map((outcome, index) => {
            const Icon = outcomes[index].icon;
            return (
              <div
                key={index}
                className="text-primary bg-card p-10 flex flex-col gap-x-5 gap-y-6 my-10 rounded-2xl hover:border-[0.5px] hover:border-primary-accent   transition-all"
              >
                <div className="bg-secondary/10 w-fit p-3 rounded-2xl text-primary-accent">
                  <Icon />
                </div>
                <h1 className="text-2xl font-heading text-primary-accent">
                  {outcome.percentage}
                </h1>
                <h1 className="text-lg font-semibold font-heading">
                  {outcome.title}
                </h1>
                <p className="font-body text-base">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Case Study */}
      <section
        className="flex flex-col items-center mx-2 lg:my-20 my-10 gap-y-5  lg:mx-0"
        id="blog"
      >
        <h1 className="main-heading text-center">{t.studies_section.title}</h1>
        <p className="text-primary/70 text-center">
          {t.studies_section.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 mx-10">
          {t.studies.map((study, index) => {
            return (
              <div
                key={index}
                className={`text-primary p-10 flex flex-col gap-x-5 gap-y-6 my-10 rounded-2xl border-[0.5px] transition-all border-primary/30 ${
                  studies[index].hoverColor === "orange"
                    ? "bg-linear-to-b from-orange/30 to-card"
                    : studies[index].hoverColor === "blue"
                      ? "bg-linear-to-b from-secondary-accent/30 to-card"
                      : "bg-linear-to-b from-primary-accent/30 to-card"
                }`}
              >
                <h3 className="text-sm font-heading text-primary-accent">
                  {study.tagline}
                </h3>
                <h1 className="text-lg font-semibold font-heading">
                  {study.title}
                </h1>
                <p className="font-body text-base">{study.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Contact Form */}
      <section
        className="bg-linear-to-br from-background to-primary-accent/10 grid grid-cols-1 lg:grid-cols-2 px-10 py-10 gap-y-10 lg:gap-y-0"
        id="contact"
      >
        {/* Left */}
        <div className="flex flex-col gap-y-5 pt-12">
          <h1 className="main-heading">{t.contact_section.title}</h1>
          <p className="text-primary/70">{t.contact_section.description}</p>
          <div className="flex items-center gap-2">
            <Mail className="text-primary-accent" />
            <p className="text-primary/70">{t.contact_section.email_label}</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin size-4 text-primary-accent"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <p className="text-primary/70">
              {t.contact_section.linkedin_label}
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="bg-card border-primary-accent/40 border rounded-2xl p-10 flex flex-col gap-y-5">
          <label
            htmlFor="name"
            className="flex flex-col text-primary/80 uppercase text-sm"
          >
            {t.contact_form.name_label}
            <input
              type="text"
              id="name"
              className="border-primary/50 hover:border-primary-accent/50 border rounded-xl focus:outline-none p-2 mt-2"
            />
          </label>
          <label
            htmlFor="company"
            className="flex flex-col text-primary/80 uppercase text-sm"
          >
            {t.contact_form.company_label}
            <input
              type="text"
              id="company"
              className="border-primary/50 hover:border-primary-accent/50 border rounded-xl focus:outline-none p-2 mt-2"
            />
          </label>
          <label
            htmlFor="cemail"
            className="flex flex-col text-primary/80 uppercase text-sm"
          >
            {t.contact_form.email_label}
            <input
              type="text"
              id="cemail"
              className="border-primary/50 hover:border-primary-accent/50 border rounded-xl focus:outline-none p-2 mt-2"
            />
          </label>
          <label
            htmlFor="message"
            className="flex flex-col text-primary/80 uppercase text-sm"
          >
            {t.contact_form.message_label}
            <textarea
              name="message"
              id="message"
              className="border-primary/50 hover:border-primary-accent/50 border rounded-xl focus:outline-none p-2 mt-2"
            ></textarea>
          </label>
          <button type="submit">
            <CtaButton
              changeStyle={
                "bg-primary-accent text-primary-foreground px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
              }
            >
              {t.contact_form.submit}
            </CtaButton>
          </button>
        </div>
      </section>
    </div>
  );
}
