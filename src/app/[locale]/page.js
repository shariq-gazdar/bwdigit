import Image from "next/image";
import { getMessages } from "../../i18n/request.js";
import { locales, defaultLocale } from "../../i18n/config.js";
import CtaButton from "@/components/CtaButton.jsx";
import AnimateIn from "@/components/AnimateIn.jsx";
import { heritage, outcomes, platfrom, services, steps, studies } from '@/utils/home.js'
import { Check, Factory, Mail } from "lucide-react";
import Link from "next/link.js";

export default async function Home({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.home;

  return (
    <div className="pt-20 bg-background font-body overflow-x-hidden ">
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 py-10 gap-y-10 lg:gap-y-0 lg:mb-0 ">
        {/* Mobile Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-secondary-accent/5 to-primary-accent/20 blur-2xl z-0 lg:hidden"></div>
        {/* Left */}
        <div className="relative z-10 flex flex-col gap-y-5 mx-10 ">
          <h1 className="hero-gradient text-5xl text-center lg:text-start lg:text-6xl font-heading">
            {t.hero.title}
          </h1>
          <p className="text-primary/70 text-lg text-center lg:text-start">
            {t.hero.description}
          </p>
          <div className="mt-5 flex flex-col lg:flex-row gap-x-2 gap-y-5 lg:gap-y-0">
            <Link href={"/#about"}>
              <CtaButton
                changeStyle={
                  "bg-transparent text-primary px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
                }
              >
                {t.hero.cta}
              </CtaButton>
            </Link>
            {/* <Link href={"/#contact"}>
            <CtaButton
              changeStyle={
                "bg-transparent text-primary px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center flex flex-row justify-center items-center "
              }
              >
              {"Request Demo"}
            </CtaButton>
              </Link> */}
          </div>
        </div>
        {/* Right */}
        <div className="relative hidden lg:block">
          {/* Gradient Overlay */}
          <div className="absolute top-5 left-0 w-[85%] h-full bg-linear-to-br from-secondary-accent/20 to-primary-accent/5 blur-2xl  z-10"></div>
          <Image
            src="/hero-image.png"
            alt="Hero"
            className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl absolute z-20"
            width={800}
            height={600}
            priority
          />
        </div>
      </section>
      {/* Core Digital Services */}
      <section className="flex flex-col items-center my-10 lg:my-20 mx-5 lg:mx-10">
        <h1 className="main-heading text-center">{t.services_section.title}</h1>
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-2 lg:mx-5 justify-between items-stretchh gap-x-5">
          {t.services.map((service, index) => {
            const Icon = services[index].Icon;
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div className="text-primary bg-card flex flex-col gap-x-5 gap-y-6 lg:my-10 my-5 rounded-2xl hover:border-[0.5px] hover:border-primary-accent    transition-all overflow-hidden lg:h-[85%] h-auto">
                  <div className="p-10 pt-6 flex  flex-col gap-y-6 ">
                    <Image
                      src={service.image}
                      width={200}
                      height={200}
                      alt={service.title}
                      className="self-center"
                    />
                    {/* <div className="bg-secondary/10  w-fit p-3 rounded-2xl text-primary-accent self-center">
                      <Icon size={42} />
                    </div> */}
                    <h1 className="text-xl font-heading font-bold text-primary">
                      {service.title}
                    </h1>
                    <p className="font-body text-base text-primary/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>
      {/* Engineering + Software */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:my-20 my-10 mx-5 lg:mx-10 items-stretch justify-between gap-x-5 gap-y-10 lg:gap-y-0">
        {/* Left */}
        <div className="flex flex-col gap-y-4 mt-5">
          <h1 className="main-heading text-center lg:text-start">
            {t.engineering_section.title}
          </h1>
          <p className="text-primary/70 text-lg text-center lg:text-start">
            {t.engineering_section.description}
          </p>
          {/* {t.engineering_section.points.map((point, index) => (
            <div key={index} className="flex gap-x-1 ">
              <Check className="text-primary-accent" />
              <p className="text-primary/70">{point}</p>
            </div>
          ))} */}
        </div>
        {/* Right */}
        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute left-[1.4rem] top-6 bottom-6 w-px bg-gradient-to-b from-primary-accent via-primary-accent/40 to-transparent"></div>

          <ol className="space-y-6">
            {t.steps.map((step, index) => (
              <li key={index} className="relative pl-14">
                {/* Step Number */}
                <div className="absolute left-0 top-5 grid w-11 h-11 place-items-center rounded-full border border-primary-accent/40 bg-card text-base font-semibold text-primary-accent z-10">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="bg-card rounded-2xl border border-primary-accent/10 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-heading text-primary ">
                      {step.title}
                    </h3>

                    <Check className="w-4 h-4 text-primary-accent shrink-0 mt-1" />
                  </div>

                  <p className="mt-2 text-primary/70 leading-relaxed text-base">
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
        className="flex flex-col lg:flex-row justify-between mx-5 lg:mx-10 gap-y-5 lg:gap-y-0 my-10 "
        id="portfolio"
      >
        {" "}
        <div className="mt-10 w-full lg:w-1/2">
          <h1 className="main-heading text-center lg:text-start">
            {t.heritage_section.title}
          </h1>
          <p className="text-primary/70 text-lg text-center lg:text-start">
            {t.heritage_section.description}
          </p>
        </div>
        <div className="flex flex-col gap-y-3 w-full lg:w-[40%] ">
          {t.heritage.map((h, index) => {
            const Icon = heritage[index].icon;
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden hover:border hover:border-primary-accent transition-all h-full flex flex-col justify-center items-center">
                  <div className="bg-card rounded-2xl p-6 w-screen lg:w-auto  transition-all flex-col flex items-center justify-center">
                    <h3 className="text-xl font-heading text-primary">
                      {h.title}
                    </h3>
                    {/* <p className="mt-2 text-primary/70 leading-relaxed">
                      {h.description}
                    </p> */}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>
      {/* The Platform */}
      <section
        className="flex flex-col items-center lg:my-20 my-10 mx-5 lg:mx-10 gap-y-5"
        id="about"
      >
        <h1 className="main-heading text-center">{t.platform_section.title}</h1>
        <p className="text-primary/70 text-lg text-center">
          {t.platform_section.description}
        </p>
        <div className="w-[90vw] h-[300px] lg:h-[800px]  relative">
          <Image
            src="/dashboard.png"
            alt="Platform"
            fill
            className="object-fill rounded-2xl"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:mx-10 mx-2">
          {t.platform.map((p, index) => {
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 gap-x-5 hover:border hover:border-primary-accent transition-all items-center">
                  <div className="flex flex-col items-start lg:flex-row lg:items-center gap-x-5  col-span-1">
                    <p className="text-primary-accent text-sm mb-1 lg:mb-0">
                      {"0" + (index + 1)}
                    </p>
                    <h3 className="text-xl font-heading text-primary">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-base text-primary/70 leading-relaxed col-span-2">
                    {p.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>
      {/* Service Section */}
      {/* <section
        className="flex flex-col items-center gap-y-5 mx-5 lg:mx-0"
        id="service"
      >
        <h1 className="main-heading text-center">{t.services_section.title}</h1>
        <p className="text-primary/70 text-lg text-center">
          {t.services_section.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:mx-10 mx-2">
          {t.digital_services.map((service) => (
            <div
              key={service.id}
              className="bg-card text-primary p-6 rounded-xl flex flex-col gap-y-5 hover:border hover:border-primary-accent"
            >
              <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 items-start lg:items-center gap-x-5">
                <Image
                  src={service.image}
                  width={50}
                  height={50}
                  alt={service.title}
                  className="self-start lg:self-center"
                />
                <div>
                  <h2 className="text-xl font-heading text-primary">
                    {service.title}
                  </h2>
                  <p className="font-body text-base text-primary/70">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-y-2 list-disc list-inside ">
                {service.points.map((point, index) => (
                  <li
                    key={index}
                    className="font-body text-base text-primary/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}
      {/* Bussines Value Outcome*/}
      <section className="flex flex-col items-center lg:my-20 my-10 lg:gap-y-5 gap-y-3 mx-5 lg:mx-10">
        <h1 className="main-heading text-center">{t.outcomes_section.title}</h1>
        <div className="items-stretch  grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-0">
          {t.outcomes.map((outcome, index) => {
            const Icon = outcomes[index].icon;
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div className="text-primary bg-card p-10 flex flex-col gap-x-5 gap-y-6 lg:my-10 my-5 rounded-2xl hover:border-[0.5px] hover:border-primary-accent   transition-all lg:h-[80%] h-full">
                  <div className="flex flex-col items-start lg:flex-row lg:items-center gap-x-5 gap-y-5 lg:gap-y-0">
                    <Image
                      src={outcome.image}
                      alt={outcome.title}
                      width={100}
                      height={100}
                      className="rounded-2xl"
                    />
                    <h1 className="text-xl font-heading text-primary-accent">
                      {outcome.percentage}
                    </h1>
                    <h1 className="text-xl font-semibold font-heading text-primary">
                      {outcome.title}
                    </h1>
                  </div>
                  <p className="font-body text-base text-primary/70">
                    {outcome.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>
      {/* Case Study Colored Cards */}
      <section
        className="flex flex-col items-center mx-5 lg:my-20 my-10 gap-y-5  lg:mx-10"
        id="blog"
      >
        <h1 className="main-heading text-center">{t.studies_section.title}</h1>
        <p className="text-primary/70 text-lg text-center">
          {t.studies_section.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 ">
          {t.studies.map((study, index) => {
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div
                  className={`text-primary p-10 flex flex-col gap-x-5 gap-y-6 lg:my-10 my-5 rounded-2xl border-[0.5px] transition-all  border-primary/30 h-auto lg:h-[80%] justify-between ${
                    studies[index].hoverColor === "orange"
                      ? "bg-linear-to-b from-orange/30 to-card"
                      : studies[index].hoverColor === "blue"
                        ? "bg-linear-to-b from-secondary-accent/30 to-card"
                        : "bg-linear-to-b from-primary-accent/30 to-card"
                  }`}
                >
                  <h3 className="text-xl font-heading text-primary font-bold">
                    {study.tagline}
                  </h3>
                  <h1 className="text-sm font-heading -mt-4 text-primary/80">
                    {study.title}
                  </h1>
                  <p className="font-body text-base text-primary/70">
                    {study.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>
      {/* Contact Form */}
      <section
        className="bg-linear-to-br from-background to-primary-accent/10 flex flex-col  px-10 lg:py-10 gap-x-20 gap-y-10 lg:gap-y-5 -mt-10 pb-10 lg:mt-0 lg:pb-10 items-center justify-center w-full "
        id="contact"
      >
        {/* Left */}
        <div className="flex flex-col gap-y-5 pt-12 items-center">
          <h1 className="main-heading">{t.contact_section.title}</h1>
          <p className="text-primary/70 text-lg">
            {t.contact_section.description}
          </p>
        </div>
        {/* Right */}
        <form
          className="bg-card border-primary-accent/40 border rounded-2xl p-5 lg:p-10 flex flex-col gap-y-5 w-full lg:w-[65%]"
          action={"https://formspree.io/f/xqevnjrq"}
          method="POST"
        >
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
                "bg-transparent hover:text-primary text-primary-accent px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
              }
            >
              {t.contact_form.submit}
            </CtaButton>
          </button>
        </form>
      </section>
    </div>
  );
}
