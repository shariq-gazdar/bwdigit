import CtaButton from '@/components/CtaButton';
import Hero from '@/components/Service/Hero'
import Projects from '@/components/Service/Projects';
import TestimonialsSection from '@/components/Service/Testimonial';
import { ArrowRight, Check, Code2, Gift, MessageCircle, Palette, Phone, Rocket, Server, ShoppingBag, Smartphone, Target, Users, Wrench, Zap } from 'lucide-react';
import React from 'react'
import {
  SiFlutter,
  SiReact,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiNodedotjs,
  SiLaravel,
} from "react-icons/si";
function page() {
    const resources = [
      {
     
        title: "IOS & Android Native App Development",
        description:
          "We craft high-performance native apps tailored for each platform:",
        features: [
          "Swift development for iOS",
          "Kotlin development for Android",
          "Fast, stable apps with native features",
          "UI designs aligned with Apple and Google guidelines",
        ],
      },
      {

        title: "Cross-Platform App Solutions",
        description: "Build once and run everywhere:",
        features: [
          "Flutter app development",
          "React Native for iOS & Android",
          "Unified codebase = consistent experience",
          "Reduced development time and cost",
        ],
      },
      {
 
        title: "End-To-End Mobile App Services",
        description:
          "We handle the entire development process so you don't have to:",
        features: [
          "User-focused UI/UX design & prototyping",
          "Scalable backend systems and API integrations",
          "QA testing, app optimization and publishing",
          "Full support for App Store and Google Play submission",
        ],
      },
    ];
    const tools = [
      {
        icon: SiFlutter,
        title: "Flutter",
        color: "#02569B",
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50",
        featured: false,
        tooltip: "Cross-platform UI framework",
      },
      {
        icon: SiReact,
        title: "React Native",
        color: "#61DAFB",
        iconColor: "text-blue-400",
        bgColor: "bg-blue-50",
        featured: false,
        tooltip: "Cross-platform mobile framework",
      },
      {
        icon: SiSwift,
        title: "Swift",
        color: "#F05138",
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50",
        featured: false,
        tooltip: "iOS native development",
      },
      {
        icon: SiKotlin,
        title: "Kotlin",
        color: "#7F52FF",
        iconColor: "text-purple-600",
        bgColor: "bg-purple-50",
        featured: false,
        tooltip: "Android native development",
      },
      {
        icon: SiFirebase,
        title: "Firebase",
        color: "#FFCA28",
        iconColor: "text-yellow-500",
        bgColor: "bg-yellow-50",
        featured: false,
        tooltip: "Backend and analytics platform",
      },
      {
        icon: SiNodedotjs,
        title: "Node.js",
        color: "#339933",
        iconColor: "text-green-600",
        bgColor: "bg-green-50",
        featured: false,
        tooltip: "Backend runtime environment",
      },
      {
        icon: SiLaravel,
        title: "Laravel",
        color: "#FF2D20",
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
        featured: false,
        tooltip: "PHP backend framework",
      },
    ];
    const solutions = [
      {
        id: 1,
        icon: ShoppingBag,
        title: "On-demand service apps",
        description:
          "Delivery, healthcare, or home repair give your users instant access and smooth booking experiences!",
        cta: "Explore Solution",
      },
      {
        id: 2,
        icon: Wrench,
        title: "Business productivity tools",
        description:
          "Improve workflows, communication, and team coordination with smart mobile tools and task management.",
        cta: "See in Action",
      },
      {
        id: 3,
        icon: Smartphone,
        title: "E-commerce & marketplace apps",
        description:
          "Give your customers a smooth shopping experience, from browsing to checkout, with secure payment integration.",
        cta: "See How It Works",
      },
      {
        id: 4,
        icon: Users,
        title: "Travel and lifestyle",
        description:
          "Create engaging mobile experiences that support users on the go from planning trips to finding local recommendations. Perfect for tourism, events, and local guides.",
        cta: "Explore Solution",
      },
      {
        id: 5,
        icon: MessageCircle,
        title: "Social networking apps",
        description:
          "Launch platforms for community, messaging, and real-time interaction with strong backend performance and modern UI.",
        cta: "Discover More",
      },
    ];
     const features = [
       {
         icon: Rocket,
         title: "Fast Development",
         description: "Quick turnaround with quality code",
       },
       {
         icon: Code2,
         title: "Clean Code",
         description: "Maintainable & scalable architecture",
       },
       {
         icon: Server,
         title: "Robust Backend",
         description: "Secure & scalable infrastructure",
       },
    ];
      const includedItems = [
        { icon: Smartphone, text: "Custom mobile app development" },
        { icon: Palette, text: "UI/UX design built for real users" },
        { icon: Server, text: "Backend setup and third-party integration" },
      ];

      const getItems = [
        { icon: Phone, text: "Free Consultation" },
        {
          icon: Zap,
          text: "Fast development timeline to reach the market faster",
        },
        {
          icon: Target,
          text: "Conversion-focused design that encourages user action",
        },
        { icon: Users, text: "User-first experience that keeps users engaged" },
      ];
  return (
    <div>
      <Hero
        title={"Custom Mobile App Development"}
        description="We build mobile apps that are fast, reliable, and easy to use whether you're starting a new project or improving an existing one. At BW Digit, we transform your app idea into a functional product with a clean design and smart, scalable technology."
        cta={"Start your project"}
        image={"/service/hero/mobile.png"}
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

      {/* Difference */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="main-heading">
              Where Mobile Apps Make a Real Difference
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-primary/70 ">
              Our mobile app solutions are built to match the needs of your
              business and industry. Here's how we help companies grow through
              smart, effective apps:
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Header */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent/10">
                      <Icon className="h-6 w-6 text-primary-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-3xl font-bold leading-tight text-primary">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 text-lg leading-relaxed text-primary/70 ">
                    {solution.description}
                  </p>

                  {/* CTA */}
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
      {/* Feature Section */}
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
      {/* Cta */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-accent/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-primary-accent/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          {/* Badge — plain text */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-primary-accent/10 text-primary-accent px-4 py-2 rounded-full text-sm font-semibold border border-primary-accent/20">
              <Gift size={16} strokeWidth={2} />
              <span>SPECIAL OFFER</span>
            </div>
          </div>

          {/* Heading — plain text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center max-w-4xl mx-auto mb-4">
            App Launch Package: Everything You Need to Go Live
          </h2>

          {/* Description — plain text */}
          <p className="text-primary/70 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            Ready to take your idea from concept to app store? Want to launch
            fast, without cutting corners? Our App Launch Package covers
            everything you need to go live with confidence.
          </p>

          {/* Two columns with card objects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12">
            {/* What's Included — plain header */}
            <div className="bg-primary-accent/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="text-primary-accent">✦</span> What's Included
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

            {/* What You Get — plain header */}
            <div className="bg-primary-accent/5 rounded-2xl p-6 md:p-8 border border-primary-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="text-primary-accent">✦</span> What You Get
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

          {/* "Ideal for" — plain text */}
          <p className="text-primary/60 text-center text-sm md:text-base italic mb-8">
            Ideal for startups and growing businesses ready to scale.
          </p>

          {/* CTA — plain text */}
          <div className="text-center">
            <CtaButton> Book Your Free Consultation! </CtaButton>
          </div>
        </div>
          </section>
          {/* Projects */}
          <Projects />
          {/* Testimonial */}
          <TestimonialsSection/>
    </div>
  );
}

export default page