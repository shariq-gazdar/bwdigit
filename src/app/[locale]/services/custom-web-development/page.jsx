import CtaButton from '@/components/CtaButton';
import Hero from '@/components/Service/Hero'
import { ArrowRight, Building, Check, CheckCircle2, Gauge, Globe, Layout, Link, Rocket, Target, TrendingUp, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function page() {
    const checklist = [
      "Mobile-First Design: Responsive layouts that work on every device",
      "Custom Code: Clean, scalable and built for long-term growth",
      "SEO-Ready Structure: Fast load times, clean code and smart structure for search engines",
      "Third-Party Integration: Connect your site with CRMs, APIs, payment gateways and more",
      "CMS Options: WordPress or other systems if you want full content control",
    ];
    const resources = [
      {
        id: 1,
        title: "Frameworks & Languages",
        description:
          "We use proven frameworks and backend languages for fast and flexible development.",
        features: [
          "React, Next.js, Vue.js",
          "Node.js, PHP, Laravel",
          "Python (Django, FastAPI)",
        ],
      },
      {
        id: 2,
        title: "Styling & UI Libraries",
        description:
          "For clean, responsive interfaces that look good on any device.",
        features: ["Tailwind CSS", "Bootstrap", "Styled Components"],
      },
      {
        id: 3,
        title: "CMS & Headless Platforms",
        description:
          "Manage content your way with flexible CMS and headless systems.",
        features: [
          "WordPress (Classic & Headless)",
          "Sanity, Strapi, Contentful",
        ],
      },
      {
        id: 4,
        title: "Databases & Backend Tools",
        description:
          "Secure, scalable databases and backend support for all types of web applications.",
        features: ["MongoDB, PostgreSQL, MySQL", "Firebase, Supabase"],
      },
      {
        id: 5,
        title: "DevOps & Deployment",
        description:
          "We use trusted tools for deployment, performance and updates.",
        features: [
          "Docker, Vercel, Netlify",
          "GitHub Actions",
          "Cloudflare for security and speed",
        ],
      },
    ];
      const features = [
        {
          id: 1,
          icon: Rocket,
          title: "Startups launching MVPs or building new web platforms",
        },
        {
          id: 2,
          icon: Building,
          title: "Small businesses looking to grow their online presence",
        },
        {
          id: 3,
          icon: Building,
          title: "Enterprises modernizing outdated systems and workflows",
        },
        {
          id: 4,
          icon: Globe,
          title:
            "Creative professionals and personal brands needing a strong web presence",
        },
        {
          id: 5,
          icon: Users,
          title:
            "Agencies that need reliable frontend or backend development support",
        },
        {
          id: 6,
          icon: Wrench,
          title:
            "Internal teams building dashboards, portals or custom business tools",
        },
    ];
     const problems = [
       {
         id: 1,
         icon: Layout,
         title: "Generic Templates That Don't Fit Your Brand",
         description:
           "We build fully custom websites, no cookie-cutter themes.",
       },
       {
         id: 2,
         icon: Gauge,
         title: "A Slow Website That Ranks Poorly",
         description:
           "Our sites are fast, lightweight, and built with SEO best practices from day one.",
       },
       {
         id: 3,
         icon: Link,
         title: "Disconnected Tools and Systems",
         description:
           "We integrate your website with CRMs, APIs, booking tools and more, so everything works together.",
       },
       {
         id: 4,
         icon: TrendingUp,
         title: "No Clear Strategy for Growth",
         description:
           "We help you define a smart, scalable path forward with a website that supports your business goals.",
       },
     ];
  return (
    <div>
      {/* Hero */}
      <Hero
        title={"Custom Web Development Built for Your Growth"}
        description={
          "From fast-loading landing pages to full-scale web platforms, we build custom websites that are secure, scalable and made to fit your business goals."
        }
        cta={"Let's build it right – together"}
        image={"/service/hero/web.png"}
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
              Whether launching something new or improving an existing product,
              we focus on making every click count.
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
            <h2 className="main-heading">What You'll Find Inside</h2>

            <p className="mt-4 text-xl font-semibold text-primary-accent">
              AI Tools That Make Work Easier
            </p>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              We offer tested AI tools and resources that help you save time,
              stay organized, and run your business more smoothly.
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
          <h2 className="main-heading">What You'll Find Inside</h2>

          <p className="mt-4 text-xl font-semibold text-primary-accent mb-5">
            AI Tools That Make Work Easier
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
            We Solve Real Web Development Problems
          </h2>

          {/* Description - Static Text */}
          <p className="text-primary/70 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            If your current website is holding you back, we're here to fix it
            with clean, fast and custom-built solutions that help your business
            stand out online.
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
            <CtaButton
            >
              Start Your Project Today
           
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page