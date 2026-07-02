import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { getMessages } from "../../i18n/request.js";
import { defaultLocale } from "../../i18n/config.js";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BW Digit",
  description: "BW Digit - Digital Solutions",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar
          messages={messages}
          locale={locale}
          defaultLocale={defaultLocale}
        />
        {children}
        <Footer
          messages={messages}
          locale={locale}
          defaultLocale={defaultLocale}
        />
      </body>
    </html>
  );
}
