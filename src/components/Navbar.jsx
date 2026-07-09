"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import CtaButton from "./CtaButton";
import Link from "next/link";

const Navbar = ({ messages, locale, defaultLocale }) => {
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const navbar = messages?.navbar || { links: [] };

  const handleLanguageChange = (newLocale) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
    setOpenLang(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLocaleLabel = (loc) => {
    const labels = {
      en: "English",
      de: "Deutsch",
      sr: "Srpski",
    };
    return labels[loc] || loc.toUpperCase();
  };

  const getFlag = (loc) => {
    const flags = {
      en: (
        <svg
          viewBox="0 0 24 16"
          className="h-4 w-6 shrink-0 overflow-hidden rounded-sm"
          aria-hidden="true"
          role="img"
        >
          <rect width="24" height="16" fill="#012169"></rect>
          <path
            d="M0,0 L24,16 M24,0 L0,16"
            stroke="#FFFFFF"
            stroke-width="3.2"
          ></path>
          <path
            d="M0,0 L24,16 M24,0 L0,16"
            stroke="#C8102E"
            stroke-width="1.6"
          ></path>
          <path
            d="M9.6,0 H14.4 V16 H9.6 Z M0,5.6 H24 V10.4 H0 Z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M10.8,0 H13.2 V16 H10.8 Z M0,6.8 H24 V9.2 H0 Z"
            fill="#C8102E"
          ></path>
        </svg>
      ),
      de: (
        <svg
          viewBox="0 0 24 16"
          className="h-4 w-6 shrink-0 overflow-hidden rounded-sm"
          aria-hidden="true"
          role="img"
        >
          <rect width="24" height="5.33" fill="#000000"></rect>
          <rect y="5.33" width="24" height="5.34" fill="#DD0000"></rect>
          <rect y="10.67" width="24" height="5.33" fill="#FFCE00"></rect>
        </svg>
      ),
      sr: (
        <svg
          viewBox="0 0 24 16"
          className="h-4 w-6 shrink-0 overflow-hidden rounded-sm"
          aria-hidden="true"
          role="img"
        >
          <rect width="24" height="5.33" fill="#EE1C25"></rect>
          <rect y="5.33" width="24" height="5.34" fill="#0C4675"></rect>
          <rect y="10.67" width="24" height="5.33" fill="#FFFFFF"></rect>
        </svg>
      ),
    };
    return flags[loc] || "🏳️";
  };

  return (
    <nav className="w-screen fixed flex flex-row items-center justify-between px-10 py-5 bg-background/90 z-999 text-primary">
      {/* Logo */}
      <Image src="/logo.png" width={100} height={50} alt="logo" />

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row gap-x-5 items-center">
        {navbar.links.map((link, index) => {
          const sectionId = link.href.replace("/#", "");
          const isActive = activeSection === sectionId;
          return (
            <a
              key={index}
              className={`transition-colors ${
                isActive
                  ? "text-primary-accent"
                  : "text-primary hover:text-primary-accent"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          );
        })}
        {/* <button onClick={() => setServiceOpen(!serviceOpen)} className="relative">
          Service {serviceOpen ? "↑" : "↓"}
      
            <div className="absolute top-9 rounded-2xl left-0 bg-background border border-gray-200 shadow-lg grid grid-cols-2 w-96 p-2 ">
              {navbar.services.map((service, index) => (
                <a
                  key={index}
                  className="block px-4 py-2 text-primary hover:text-primary-accent transition-colors"
                  href={`/service/${index+1}`}
                >
                  {service.title}
                </a>
              ))}
            </div>
      
        </button> */}
      </div>

      {/* Consultation Button */}
      <div className=" flex-row items-center gap-x-5 hidden lg:flex ">
        <Link href={"/#contact"}>
          <CtaButton className="hover:text-primary-accent transition-colors">
            Consultation
          </CtaButton>
        </Link>
        {/* Desktop Language selector */}
        <div
          className="relative hidden md:block border border-primary-accent hover:bg-primary-accent p-4 rounded-sm"
          onMouseEnter={() => setOpenLang(true)}
          onMouseLeave={() => setOpenLang(false)}
        >
          <button className="flex flex-row items-center gap-2">
            <span className="text-xl">{getFlag(locale)}</span>
            <span>{getLocaleLabel(locale)}</span>
            <ChevronDown size={16} />
          </button>
          {openLang && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-2 min-w-30">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`items-center w-full text-left px-4 py-2 flex flex-row rounded hover:bg-gray-100 text-background ${
                    loc === locale
                      ? "bg-primary-accent text-primary-foreground font-semibold"
                      : ""
                  }`}
                >
                  <span className="mr-2">{getFlag(loc)}</span>
                  {getLocaleLabel(loc)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg p-5 md:hidden flex flex-col gap-4 h-screen">
          {navbar.links.map((link, index) => {
            const sectionId = link.href.replace("/#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={index}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-primary-accent"
                    : "text-primary hover:text-primary-accent"
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}

          <CtaButton
            changeStyle={
              "bg-primary-accent text-primary-foreground px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Consultation
          </CtaButton>
          <div className="border-t border-primary/20 pt-4">
            <div className="grid grid-cols-3 gap-2">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`flex flex-row items-center justify-center gap-2 p-2 rounded-2xl bg-card text-primary hover:text-primary-accent transition-colors ${
                    loc === locale
                      ? "bg-primary-accent text-primary-foreground font-semibold"
                      : ""
                  }`}
                >
                  <span className="text-xl">{getFlag(loc)}</span>
                  {getLocaleLabel(loc)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

