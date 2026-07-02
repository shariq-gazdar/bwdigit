"use client";
import React, { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/config";

const Navbar = ({ messages, locale, defaultLocale }) => {
  const [openService, setOpenService] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navbar = messages?.navbar || { links: [], services: [] };

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
    <nav className="w-full fixed  flex flex-row items-center justify-between px-10 py-5 bg-background/90 z-999 text-primary">
      {/* Logo */}
      <Image
        src="https://www.bwdigit.com/assets/bw-logo-BX0g2QWa.png"
        width={100}
        height={50}
        alt="logo"
      />
      {/* Links */}
      <div className="flex flex-row gap-x-5 ">
        {navbar.links.map((link, index) => (
          <a key={index} className="text-primary" href={link.href}>
            {link.label}
          </a>
        ))}
        <div
          className="relative"
          onMouseEnter={() => setOpenService(true)}
          onMouseLeave={() => setOpenService(false)}
        >
          <button className="flex flex-row items-start">
            Services
            <ChevronDown />
          </button>
          {openService && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4">
              {navbar.services.map((service, index) => (
                <a
                  key={index}
                  className="block px-4 py-2 text-black"
                  href={service.href}
                >
                  {service.title}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Consultation BUtton */}
        <div>
          <button>Consultation</button>
        </div>
      </div>

      {/* Language selector */}
      <div
        className="relative"
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
    </nav>
  );
};

export default Navbar;

