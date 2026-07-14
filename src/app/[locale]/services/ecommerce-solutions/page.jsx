import CtaButton from '@/components/CtaButton';
import Hero from '@/components/Service/Hero'
import Projects from '@/components/Service/Projects';
import TestimonialsSection from '@/components/Service/Testimonial';
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
  BarChart3,
  Users,
  Rocket,
  Settings,
  Palette,
  TrendingUp,
  Headphones,
  Lightbulb,
  FileText,
  Sparkles,
  Phone,
  Clock,
  CheckCircle,
  Gift,
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
function page() {
  const resources = [
    {
      icon: Store,
      title: "Custom Store Development",
      description:
        "Build your online store with the right tools Shopify, WooCommerce or custom CMS solutions.",
      features: [
        "Custom themes that match your brand",
        "Plugin and app integrations",
        "Payment gateway setup",
        "Store speed and structure optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Your store will look and function great on every screen size, especially on mobile devices.",
      features: [
        "Responsive layouts for phones and tablets",
        "Easy navigation with touch-friendly design",
        "Fast mobile load times",
        "App-like user experience",
      ],
    },
    {
      icon: Shield,
      title: "Payments & Security",
      description:
        "We set up secure systems to protect customer data and build trust.",
      features: [
        "SSL certificate and data encryption",
        "Payment gateway integration (Stripe, PayPal and more)",
        "Built-in fraud prevention tools",
      ],
    },
    {
      icon: Globe,
      title: "Multi-Language & Currency Support",
      description:
        "Sell globally with stores that speak your customers' language and match their local currency.",
      features: [
        "Switch languages and regions based on user location",
        "Auto currency conversion",
        "Local pricing and payment options",
      ],
    },
    {
      icon: Cog,
      title: "Backend Automation",
      description:
        "Save time with systems that handle inventory, orders and billing in the background.",
      features: [
        "Real-time stock updates and alerts",
        "Automated order processing",
        "Invoicing and sales reporting",
      ],
    },
  ];
  const industries = [
    {
      icon: Shirt,
      title: "Fashion & Apparel",
    },
    {
      icon: HeartPulse,
      title: "Health & Wellness",
    },
    {
      icon: GraduationCap,
      title: "Education",
    },
    {
      icon: Utensils,
      title: "Food & Drinks",
    },
    {
      icon: MonitorSmartphone,
      title: "Digital Products",
    },
    {
      icon: Heart,
      title: "Handmade & Art",
    },
    {
      icon: Cloud,
      title: "SaaS",
    },
    {
      icon: RefreshCcw,
      title: "Subscription Services",
    },
  ];
  const tools = [
    {
      icon: SiShopify,
      title: "Shopify",
      color: "#95BF47",
      featured: false,
    },
    {
      icon: SiWoocommerce,
      title: "WooCommerce",
      color: "#96588A",
      featured: true,
    },
    {
      icon: SiNextdotjs,
      title: "Next.js",
      color: "#000000",
      featured: false,
    },
    {
      icon: SiReact,
      title: "React",
      color: "#61DAFB",
      featured: false,
    },
    {
      icon: SiLaravel,
      title: "Laravel",
      color: "#FF2D20",
      featured: false,
    },
    {
      icon: SiStripe,
      title: "Stripe",
      color: "#635BFF",
      featured: false,
    },
    {
      icon: SiPaypal,
      title: "PayPal",
      color: "#00457C",
      featured: false,
    },
    {
      icon: SiKlarna,
      title: "Klarna",
      color: "#FFB3C7",
      featured: false,
    },
  ];
  const features = [
    {
      id: 1,
      title: "Scalable E-Commerce Development",
      description:
        "Built to grow with your business, no matter the size or product range.",
      icon: TrendingUp,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: 2,
      title: "Custom Store Design That Converts",
      description:
        "Clean, user-friendly layouts that guide visitors from product to checkout.",
      icon: Palette,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      id: 3,
      title: "Ongoing Support & Store Optimization",
      description:
        "We help you keep things running smoothly and improve performance over time.",
      icon: Settings,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      id: 4,
      title: "Ongoing Support & Store Optimization",
      description:
        "We help you keep things running smoothly and improve performance over time.",
      icon: Lightbulb,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ];
  // Card objects
  const ctafeatures = [
    {
      id: 1,
      title: "1-Page Custom E-Commerce Website",
      description:
        "A clean, high-performing landing page, built for quick setup and easy sales.",
      badge: "SPECIAL OFFER",
    },
    {
      id: 2,
      title: "Fully Responsive Design",
      description:
        "Looks great and works perfectly on desktop, tablet and mobile.",
      badge: "INCLUDED",
    },
    {
      id: 3,
      title: "Bonus: Free Strategy Session",
      description:
        "Get a one-on-one call to plan your product, goals and launch strategy.",
      badge: "BONUS",
    },
  ];

  return (
    <div>
      <Hero
        title={"E-Commerce Solutions That Help You Sell More"}
        description={
          "From new online stores to fast-growing brands, BW Digit builds e-commerce websites that are secure, mobile-ready and designed to turn visitors into buyers on every device."
        }
        cta={"Book a Free Strategy Call"}
        image={"/service/hero/ecom.png"}
      />
      {/* What we offer */}
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
      {/* Industry Section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="rounded-3xl bg-background   p-8 md:p-12 lg:p-16 shadow-sm">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
                Industries We Serve
              </h2>

              <p className="mt-5 text-lg text-primary/70">
                We create modern digital experiences tailored for businesses
                across multiple industries and markets.
              </p>
            </div>

            {/* Cards */}
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
      {/* Platforms */}
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
      {/* Why Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="main-heading mb-4">
              Why Work with BW Digit for E-Commerce?
            </h2>
            <p className="text-primary/70 text-lg md:text-xl">
              We help businesses launch and grow online stores that are fast,
              secure and built to convert.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-6 md:gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`border-primary/10 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border bg-card group hover:scale-[1.02] group`}
                >
                  <div
                    className={`text-primary mb-4 p-3 rounded-xl group-hover:text-primary-accent inline-block bg-primary-accent/20`}
                  >
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
      {/* Cta */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container  px-4 md:px-6  rounded-2xl ">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Limited-Time Offer: E-Commerce Starter Package
            </h2>
            <p className="text-primary/70 text-lg md:text-xl">
              Launch your online store with a simple and professional setup,
              ideal for small businesses or product testing.
            </p>
          </div>

          {/* What's Included */}
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-primary-accent">
              What's Included:
            </h3>
          </div>

          {/* Features Grid - Using objects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {ctafeatures.map((feature) => {
              // Badge styles based on type
              const badgeStyles = {
                "SPECIAL OFFER": "bg-gradient-to-r from-red-500 to-orange-500",
                INCLUDED: "bg-green-500",
                BONUS: "bg-gradient-to-r from-yellow-500 to-orange-500",
              };

              return (
                <div
                  key={feature.id}
                  className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Badge */}
                  <div
                    className={`inline-block ${badgeStyles[feature.badge]} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit`}
                  >
                    {feature.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <CtaButton>Book a Free Strategy Call</CtaButton>

            <CtaButton changeStyle="outline-button">
              Request a Custom Quote
            </CtaButton>
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