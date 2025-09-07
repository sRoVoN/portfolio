// app/[locale]/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { getMessages } from "@/lib/getMessages";
import { NextIntlClientProvider } from "next-intl";
import '../globals.css';
import Providers from "../../providers/theme-provider";
import Sidebar from "../components/sidebar/Sidebar";
import { getNavLinks } from "@/lib/navigation";
import { getAllTranslations } from "@/lib/getAllTranslations";

const vazirmatn = localFont({
  src: '../../fonts/Vazirmatn-Regular.woff2',
  variable: "--font-vazir",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My multilingual portfolio",
};

export default async function LocaleLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
const { locale } = await params;
const selectedLocale = locale ?? 'en'
const messages = await getMessages(selectedLocale);
  const isRTL = locale === "fa";
  const navLinks = await getNavLinks((await params).locale);
const { sidebar, nav, hero, about } = await getAllTranslations(locale, ['sidebar', 'nav', 'hero', 'about']);


  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`${isRTL ? vazirmatn.variable : inter.variable} font-sans bg-slate-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-100 min-h-screen`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="flex flex-col md:flex-row min-h-screen">
            <aside className="min-h-screen hidden md:block md:w-1/4 lg:w-1/5 w-full border-r border-gray-200 dark:border-neutral-700">
              <Sidebar navLinks={navLinks} tSidebar={sidebar} tNav={nav} tHero={hero} tAbout={about}  />
            </aside>
            <main className="md:w-3/4 lg:w-4/5 flex-1 ">
              {children}
            </main>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
