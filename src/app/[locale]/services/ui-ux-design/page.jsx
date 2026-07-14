import CTASection from "@/components/Service/Cta";
import Hero from "@/components/Service/Hero";
import Projects from "@/components/Service/Projects";
import TestimonialsSection from "@/components/Service/Testimonial";
import { ArrowRight, BadgeCheck, Boxes, Brain, Check, CheckCircle2, Handshake, Lightbulb, LineChart, RefreshCw, Rocket, ShoppingCart, Sparkles, Target, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UiUxDesign() {
    const checklist = [
      "UI aligned with your brand to build trust",
      "UX research grounded in heatmaps, A/B tests & analytics",
      "Wireframes and clickable prototypes",
      "Easy-to-use mobile and desktop layouts",
      "Full revamps or small updates that improve results",
      "Accessibility-friendly design for better reach and inclusivity",
    ];
    const getCards = [
      {
        icon: Users,
        title: "User Flows & Personas",
        description:
          "We map how real users move through your site or app, helping us design with purpose and clarity.",
      },
      {
        icon: Check,
        title: "High-Fidelity Mockups",
        description:
          "Clear, detailed visuals that show exactly how your product will look before development begins.",
      },
      {
        icon: Boxes,
        title: "Clickable Prototypes",
        description:
          "Interactive demos to test before launch. Experience your product like a real user would!",
      },
      {
        icon: Handshake,
        title: "Design Workshops",
        description:
          "We run hands-on sessions to shape your ideas and align them with your brand and business goals.",
      },
    ];
    const audienceCards = [
      {
        icon: Lightbulb,
        title: "Startups launching MVPs that need simple, clear user flows.",
      },
      {
        icon: RefreshCw,
        title:
          "Businesses updating old websites or apps that no longer feel modern and need fresh structure.",
      },
      {
        icon: LineChart,
        title:
          "SaaS platforms looking to improve user retention and ease of use.",
      },
      {
        icon: ShoppingCart,
        title:
          "eCommerce stores that want to increase sales and reduce cart abandonment.",
      },
    ];
    const tools = [
      {
        name: "Figma",
        icon: "/service/tools/figma.svg",
      },
      {
        name: "Adobe XD",
        icon: "/service/tools/xd.svg",
      },
      {
        name: "Sketch",
        icon: "/service/tools/sketch.svg",
      },
      {
        name: "InVision",
        icon: "/service/tools/linkedn.svg",
      },
      {
        name: "Miro",
        icon: "/service/tools/miro.svg",
      },
      {
        name: "Webflow",
        icon: "/service/tools/webflow.svg",
      },
  ];
  const includedItems = [
    "UX strategy based on user behavior",
    "Wireframes and interactive prototypes",
    "Clean, modern UI that fits your brand",
    "Up to 2 rounds of revisions for fine-tuning design",
    "1-hour strategy call with our design team",
    "Quick turnaround for fast launches",
    "Layouts built to convert",
    "Focus on ease of use and clear messaging",
  ];

    return (
      <div>
        <Hero
          title={"Smart UI/UX Design That Moves Users to Action"}
          description={
            "At BW Digit, we create websites and apps that feel simple from the first click, designed to guide, respond and convert with minimal effort."
          }
          cta={"Faster. Clear. Easy to use."}
          image={"/service/hero/ui.png"}
        />
        {/* About */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {"Custom UI/UX Design Services"}
              </h2>

              <p className="mt-5 text-xl font-medium text-primary-accent">
                Built Around How People Use Your Product
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-primary/70">
                We craft layouts that are easy to follow and enjoyable to use,
                with every detail tuned for clarity and smooth interaction.
                Whether launching something new or improving an existing
                product, we focus on making every click count.
              </p>

              <h3 className="mt-10 text-2xl font-semibold text-primary">
                What We Do
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

                <p className="text-lg leading-7 text-primary">
                  Everything we design helps users find what they need faster
                  and act with confidence.
                </p>
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
        {/* What You Get */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-primary">
                What You Get
              </h2>

              <p className="mt-5 text-xl font-semibold text-primary-accent">
                Our Collaborative Design Process From Idea to Clickable
                Prototype
              </p>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary/70">
                You’ll work directly with our designers to shape designs that
                align with your brand and work best for your users.
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
                Who Benefits From UI/UX Design?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
                Our UI/UX design services help growing teams, startups, SaaS
                tools and E-commerce brands solve key user experience problems
                to raise engagement and conversion rates.
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
                  If users get stuck or leave too soon, we redesign the
                  experience to keep them engaged.
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
                Design Tools That Fit Your Workflow
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
                We use design tools that make collaboration easy, letting
                reviews and feedback happen faster. Developers know and clients
                love platforms like Figma, Adobe XD and InVision.
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
                    Special Offer
                  </span>

                  <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-4xl">
                    High-
                    <span className="text-primary-accent">
                      Converting Landing
                    </span>
                    <br />
                    Page UI/UX
                    <span className="text-primary-accent"> Redesign</span>
                    <br />
                    Services
                  </h2>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90">
                    Need better results from your landing page? Struggling with
                    low conversions? Let's Fix That.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <button className="inline-flex items-center gap-2 rounded-xl bg-primary-accent px-8 py-4 font-semibold text-white transition hover:opacity-90">
                      Get Started Now
                      <ArrowRight className="h-5 w-5" />
                    </button>

                    <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20">
                      🔍 View Examples
                    </button>
                  </div>

                  <div className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-accent/20">
                        <Rocket className="h-5 w-5 text-primary-accent" />
                      </div>

                      <p className="text-base text-white/90">
                        Ideal for product launches, service pages and lead
                        generation campaigns.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-accent/20">
                        <Lightbulb className="h-5 w-5 text-primary-accent" />
                      </div>

                      <p className="text-base text-white/90">
                        Results: Faster load times, better engagement, more
                        signups.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold leading-relaxed">
                    It will be visually aligned with your brand, load fast and
                    get more clicks. Here's what's included:
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
                        We redesign underperforming landing pages into fast,
                        mobile-first layouts optimized for speed, with a clear
                        call to action. All designs are optimized for Core Web
                        Vitals and built to meet Google's UX standards.
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
          title={
            <>
              Want A{" "}
              <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-yellow-300 bg-clip-text text-transparent">
                Landing Page
              </span>{" "}
              That Brings In More Leads And Converts Better?
            </>
          }
          description="Don't settle for a layout that just looks good. Let's design one that delivers faster load times, better UX, and more conversions across devices."
          primaryText="Book a Free Consultation"
          secondaryText="Request a Free Quote"
        />
      </div>
    );
}


