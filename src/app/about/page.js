import { getMessages } from "../../i18n/request.js";
import { locales, defaultLocale } from "../../i18n/config.js";
import Link from "next/link";

export default async function About() {
  const messages = await getMessages(defaultLocale);
  const t = messages.about;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Language Switcher */}
        <div className="flex gap-2 mb-4">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={loc === defaultLocale ? '/about' : `/${loc}/about`}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                defaultLocale === loc
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-zinc-200 text-black hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              }`}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t.title}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t.description}
          </p>
        </div>

        <Link
          href="/"
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
