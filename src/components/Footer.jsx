import Link from "next/link";
import { CircleDot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-semibold text-primary">
                BW Digit
              </span>
            </div>

            <p className="mt-4 text-sm text-primary/70">
              Industrial Data Automation
            </p>

            <p className="mt-2 text-xs uppercase tracking-wider text-primary/50">
              Part of Backpack Wander GmbH
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Solutions
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-primary/70">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  MDR Automation
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Weld Traceability
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Compliance Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The GmbH Ecosystem
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-primary/70">
              <li>
                <Link
                  href="https://www.pipelinequality.com/en/"
                  className="hover:text-primary-accent transition-colors"
                >
                  Pipeline Quality
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.backpackwander.com/"
                  className="hover:text-primary-accent transition-colors"
                >
                  Backpack Wander
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Office
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-primary/70">
              <li>Berlin, Germany</li>

              <li>
                <a
                  href="mailto:info@bwdigit.com"
                  className="hover:text-primary-accent transition-colors"
                >
                  info@bwdigit.com
                </a>
              </li>

              <li className="flex items-center gap-2 bg-primary-accent rounded-2xl">
                <Link
                  href="https://www.linkedin.com/company/backpackwander/"
                  className="hover:text-primary-accent transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <p className="mx-auto mt-16 max-w-3xl border-t border-primary/10 pt-10 text-center text-sm text-primary/60">
          Technical quality services supported by proprietary digital solutions
          developed with BW Digit.
        </p>

        <p className="mt-8 text-center text-xs text-primary/50">
          © 2026 BW Digit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
