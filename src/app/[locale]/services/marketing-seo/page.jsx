import Hero from '@/components/Service/Hero'
import { ArrowRight, Check, Cog, Globe, Shield, Smartphone, Store } from 'lucide-react';
import React from 'react'
import {
  SiGoogleanalytics,
  SiSemrush,
  Si1And1,
  SiGoogle,
  SiHotjar,
  SiMeta,
  SiMailchimp,
  SiMagasinsu
} from 'react-icons/si';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import CtaButton from '@/components/CtaButton';
import TestimonialsSection from '@/components/Service/Testimonial';
import Projects from '@/components/Service/Projects';

function page() {
     const resources = [
       {
         icon: Store,
         title: "SEO That Covers It All",
         description:
           "We handle every part of SEO, so your site performs better and ranks higher:",
         features: [
           "Full on-page, off-page and technical SEO",
           "Detailed SEO audits and keyword research",
           "Site speed, mobile structure & indexing fixes",
           "SEO content strategy based on real user intent",
         ],
       },
       {
         icon: Smartphone,
         title: "Paid Ads That Reach the Right Audience",
         description:
           "We run ad campaigns that bring traffic and conversions without wasting budget. We focus on data, not guesswork:",
         features: [
           "Google Ads setup and management",
           "Facebook and Instagram ad campaigns",
           "TikTok, LinkedIn Ads and more",
           "Retargeting for warm leads",
           "Ad performance tracking and reporting",
         ],
       },
       {
         icon: Shield,
         title: "Local SEO for Nearby Customers",
         description:
           "We help local businesses get found in their area:",
         features: [
           "Google Business Profile setup and optimization",
           "Local keywords that match search habits",
           "Managing reviews and building citations",
         ],
       },
       {
         icon: Globe,
         title: "Content That Brings in Leads",
         description:
           "We create content that’s easy to find and worth reading:",
         features: [
           "SEO blog posts and service pages",
           "Email campaigns that keep users engaged",
           "Lead magnets and funnel content to drive action",
         ],
       },
    ];
    const offers = [
      {
        id: "full-seo-services",
        title: "Full SEO Services",
        description:
          "We help your website get seen by the right audience and perform better in search:",
        features: [
          "Keyword research & competitor analysis",
          "On-page SEO (titles, structure, metadata)",
          "Technical fixes (speed, mobile, indexing)",
          "Backlink building for long-term growth",
          "Google Business Profile optimization",
        ],
      },
      {
        id: "paid-advertising",
        title: "Paid Advertising",
        description:
          "We create and manage ad campaigns that drive real traffic and leads.",
        features: [
          "Google Ads: search, display & video",
          "Facebook and Instagram ads",
          "LinkedIn campaigns for B2B",
          "Retargeting and funnel strategy",
        ],
      },
      {
        id: "content-email-marketing",
        title: "Content & Email Marketing",
        description:
          "We write content that ranks and emails that get responses:",
        features: [
          "Blog posts optimized for SEO",
          "Email sequences that build trust and drive conversions",
          "Lead magnets and newsletters to grow your list",
        ],
      },
    ];
      const tools = [
        {
          icon: SiGoogleanalytics,
          title: "Google Analytics",
          color: "#F59E0B", // Orange-500
          iconColor: "text-orange-500",
          bgColor: "bg-orange-50",
          featured: false,
          tooltip: "Website analytics and tracking",
        },
        {
          icon: SiSemrush,
          title: "SEMrush",
          color: "#EA580C", // Orange-600
          iconColor: "text-orange-600",
          bgColor: "bg-orange-50",
          featured: false,
          tooltip: "SEO and competitive research",
        },
        {
          icon: HiMagnifyingGlassPlus,
          title: "Ahrefs",
          color: "#2563EB", // Blue-600
          iconColor: "text-blue-600",
          bgColor: "bg-blue-50",
          featured: false,
          tooltip: "SEO toolset and backlink analysis",
        },
        {
          icon: SiGoogle,
          title: "Search Console",
          color: "#3B82F6", // Blue-500
          iconColor: "text-blue-500",
          bgColor: "bg-blue-50",
          featured: false,
          tooltip: "Google Search performance monitoring",
        },
        {
          icon: SiHotjar,
          title: "Hotjar",
          color: "#1D4ED8", // Blue-700
          iconColor: "text-blue-700",
          bgColor: "bg-blue-50",
          featured: false,
          tooltip: "User behavior analytics",
        },
        {
          icon: SiMeta,
          title: "Meta Ads Manager",
          color: "#EAB308", // Yellow-500
          iconColor: "text-yellow-500",
          bgColor: "bg-yellow-50",
          featured: true,
          tooltip: "Facebook and Instagram advertising",
        },
        {
          icon: SiMailchimp,
          title: "Mailchimp",
          color: "#2563EB", // Blue-600
          iconColor: "text-blue-600",
          bgColor: "bg-blue-50",
          featured: false,
          tooltip: "Email marketing platform",
        },
    ];
     const ctacards = [
       {
         id: 1,
         title: "SEO Audit Overview",
         description:
           "We'll run a complete check of your website's SEO, from technical issues to content gaps.",
         buttonText: "Get Started Now →",
       },
       {
         id: 2,
         title: "Personalized Strategy Call",
         description:
           "We'll run a complete check of your website's SEO, from technical issues to content gaps.",
         buttonText: "Learn More →",
       },
       {
         id: 3,
         title: "Clear Step-by-Step Action Plan",
         description:
           "We'll run a complete check of your website's SEO, from technical issues to content gaps.",
         buttonText: "Get Started Now →",
       },
     ];
  return (
    <div>
      {/* Hero */}
      <Hero
        title={"Marketing and SEO Services That Actually Deliver"}
        description={
          "Want to attract more visitors and turn them into real customers? At BW Digit, we build smart, results-driven SEO and marketing strategies that get your business in front of the right people Let's turn searches into sales!"
        }
        cta={"Book a Free Strategy Call"}
        image={"/service/hero/seo.png"}
      />
      {/* Features */}
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
      {/* Offer */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="main-heading">What We Offer: All in One Place</h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              From ranking on Google to paid Marketing and Emails that convert,
              we handle all your needs under one roof. smoothly.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-10">
            {offers.map((item) => {
              return (
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
              );
            })}
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
              We use design tools that make collaboration easy, letting reviews
              and feedback happen faster. Developers know and clients love
              platforms like Figma, Adobe XD and InVision.
            </p>
          </div>

          {/* Tools */}
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
      {/* Cta */}
      <section className="py-16 md:py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
            LIMITED TIME OFFER
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Free SEO Audit + Strategy Session
          </h2>

          {/* Description */}
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto">
            When you book any marketing package with BW Digit, you'll get a full
            SEO audit and consultation at no extra cost.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctacards.map((card) => (
              <div
                key={card.id}
                className="bg-primary-accent/5 rounded-xl p-6 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 text-left"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-primary/70 mb-6">{card.description}</p>
              </div>
            ))}
          </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-10">
            <CtaButton>Book a Free Strategy Call</CtaButton>
                      
            <CtaButton changeStyle="outline-button">
            Request a Custom Quote
            </CtaButton>
            </div>
        </div>
          </section>
          {/* Testimonial */}
          <TestimonialsSection />
          {/* Project */}
          <Projects />
    </div>
  );
}

export default page