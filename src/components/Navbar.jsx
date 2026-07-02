"use client";
import React, { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import CtaButton from "./CtaButton";

const Navbar = ({ messages, locale, defaultLocale }) => {
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navbar = messages?.navbar || { links: [] };

  const handleLanguageChange = (newLocale) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
    setOpenLang(false);
  };

  const getLocaleLabel = (loc) => {
    const labels = {
      en: "English",
      de: "Deutsch",
      sr: "Srpski",
    };
    return labels[loc] || loc.toUpperCase();
  };

  return (
    <nav className="w-full fixed flex flex-row items-center justify-between px-10 py-5 bg-background/90 z-999 text-primary">
      {/* Logo */}
      <Image
        src="https://www.bwdigit.com/assets/bw-logo-BX0g2QWa.png"
        width={100}
        height={50}
        alt="logo"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row gap-x-5 items-center">
        {navbar.links.map((link, index) => (
          <a
            key={index}
            className="text-primary hover:text-primary-accent transition-colors"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Consultation Button */}
      <div className="flex flex-row items-center gap-x-5">
        <CtaButton className="hover:text-primary-accent transition-colors">
          Consultation
          </CtaButton>
      {/* Desktop Language selector */}
      <div
        className="relative hidden md:block"
        onMouseEnter={() => setOpenLang(true)}
        onMouseLeave={() => setOpenLang(false)}
        >
        <button className="flex flex-row items-center gap-2">
          <Globe size={20} />
          <span>{getLocaleLabel(locale)}</span>
          <ChevronDown size={16} />
        </button>
        {openLang && (
          <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-2 min-w-30">
            {locales.map((loc) => (
              <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-background ${
                loc === locale ? "font-semibold" : ""
              }`}
              >
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
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg p-5 md:hidden flex flex-col gap-4">
          {navbar.links.map((link, index) => (
            <a
              key={index}
              className="text-primary hover:text-primary-accent transition-colors"
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="text-primary hover:text-primary-accent transition-colors">
            Consultation
          </button>
          <div className="border-t border-primary/20 pt-4">
            <div className="flex flex-col gap-2">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`flex flex-row items-center gap-2 text-primary hover:text-primary-accent transition-colors ${
                    loc === locale ? "font-semibold" : ""
                  }`}
                >
                  <Globe size={16} />
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

