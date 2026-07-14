import { ArrowRight } from "lucide-react";
import CtaButton from "../CtaButton";

export default function CTASection({
  title,
  description,
  primaryText = "Get Started",
  secondaryText = "Request a Quote",
  primaryAction = "#",
  secondaryAction = "#",
}) {
  return (
    <section className="py-24 bg-background px-20">
      <div className="container">
        <div className="rounded-3xl bg-card border border-border px-8 py-16 shadow-sm lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
              {description}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaButton>
                <a href={primaryAction}>
                  {primaryText}
                </a>
              </CtaButton>

              <CtaButton
                changeStyle={
                  "bg-transparent text-primary px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center hover:text-background"
                }
              >
                <a href={secondaryAction}>{secondaryText}</a>
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
