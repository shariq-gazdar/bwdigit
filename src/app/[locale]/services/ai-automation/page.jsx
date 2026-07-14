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
  Target,
  Pen,
  Clock3,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Image from 'next/image';
import TestimonialsSection from '@/components/Service/Testimonial';
import Projects from '@/components/Service/Projects';
import CtaButton from '@/components/CtaButton';


function page() {
    const resources = [
      {
        title: "Smart AI Tools & Integrations",
        description:
          "Tools for writing, scheduling and automation with guides to help you start fast.",
        icon: Bot,
        features: [
          "ChatGPT integration setups",
          "AI writing tools for faster content",
          "Scheduling and time management apps",
          "Data analysis powered by AI",
        ],
      },
      {
        title: "Step-by-Step Guides",
        description:
          "Simple tutorials to help you automate everyday tasks like content planning, onboarding and emails.",
        icon: BookOpen,
        features: [
          "How-to videos and written walkthroughs",
          "Setup tips and best practices",
          "Easy workflows you can use today",
        ],
      },
      {
        title: "Everyday AI In Action",
        description:
          "See how AI fits into your daily business routine without extra tools or tech stress.",
        icon: Lightbulb,
        features: [
          "Write better emails faster",
          "Prioritize tasks with AI tools",
          "Get meeting summaries and smart suggestions",
        ],
      },
      {
        title: "Ready-to-Use Templates",
        description:
          "Save time with plug-and-play templates for Notion, Airtable and Canva built to simplify your workday.",
        icon: Wrench,
        features: [
          "Project management templates",
          "Workflow automations",
          "Standard operating procedures",
          "Easy to connect with your tools",
        ],
      },
      {
        title: "Courses & Learning Resources",
        description:
          "Learn to use AI for real business tasks with short, practical content.",
        icon: FileText,
        features: [
          "Short video courses",
          "Real-world case studies",
          "Interviews with experts",
          "Practical implementation guides",
        ],
      },
    ];
    const audience = [
      {
        icon: PlayCircle,
        title: "Freelancers & Solopreneurs",
      },
      {
        icon: FileText,
        title: "Content Creators & Bloggers",
      },
      {
        icon: CircleCheckBig,
        title: "Online Entrepreneurs",
      },
      {
        icon: Lightbulb,
        title: "Remote Workers & Digital Nomads",
      },
      {
        icon: Check,
        title: "Small Business Owners",
      },
    ];
    const checklist = [
        "Free and Premium AI Tools",
        "1-on-1 Consulting",
        "Ready-Made Templates & Toolkits",
        "Custom AI Solutions"
    ]
    const Popresources = [
      {
        icon: Pen,
        badge: "AI Writing Guide",
        title: "How to Use ChatGPT for Freelance Writing",
        description:
          "A complete walkthrough for creating AI-assisted content with ready-to-use prompts, writing workflows and practical tips.",
        href: "#",
      },
      {
        icon: FileText,
        badge: "Business Plan Template",
        title: "AI-Powered Business Plan Generator (Notion)",
        description:
          "Create professional business plans in minutes using our AI-powered Notion template with built-in prompts.",
        href: "#",
      },
      {
        icon: Clock3,
        badge: "Workflow Automation Tutorial",
        title: "Save Time with Notion + Zapier",
        description:
          "Learn how to automate your daily workflow across Notion, Gmail, Slack and other productivity tools.",
        href: "#",
      },
    ];
    const features = [
      {
        icon: Clock3,
        title: "Explore Resources",
        description: "Tools, templates and guides to help you get started.",
      },
      {
        icon: Bot,
        title: "Book a 1:1 Session",
        description: "Personalized support to build your automation plan.",
      },
      {
        icon: TrendingUp,
        title: "Work Smarter",
        description: "Use AI to handle repetitive work and free up your time.",
      },
      {
        icon: BarChart3,
        title: "Scale Faster",
        description:
          "Build systems that help your business grow with less effort.",
      },
    ];
  return (
    <div>
      {/* Hero */}
      <Hero
        title="AI and Automation Solutions"
        description={
          "We build smart AI tools to automate tasks, save time and help your business grow, whether you run a startup, online shop or freelance business."
        }
        cta={"Get Started"}
        image={"/service/hero/ai.png"}
      />
      {/* What You Will Find */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">
              What You'll Find Inside
            </h2>

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
                    Learn More
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
            <h2 className="main-heading">
              Who Can Use Our AI & Automation Tools?
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              Our solutions are built for anyone who wants to save time, reduce
              manual tasks and work smarter.
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
                If your to-do list keeps growing, we'll help you shrink it with
                automation that actually works.
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
            <h2 className="main-heading">
              {"Custom UI/UX Design Services"}
            </h2>

            <p className="mt-5 text-xl font-medium text-primary-accent">
              Built Around How People Use Your Product
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-primary/70 ">
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
            <h2 className="main-heading">
              Popular AI & Automation Resources
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              Use our most popular tools and guides to save time and boost
              productivity.
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
                    Learn More
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
              <h2 className="main-heading">
                Get Started with{" "}
                <span className="text-primary-accent">AI Automation</span>
                <br />
                Without the Overwhelm
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-primary/70 ">
                Cut down on repetitive tasks and focus on work that actually
                moves your business forward.
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
              <CtaButton >
                Explore Tools Now
              </CtaButton>

              <CtaButton changeStyle={"outline-button"}>
                Book Your Free Call
                
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