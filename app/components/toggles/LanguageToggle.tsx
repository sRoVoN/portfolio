"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import clsx from "clsx";

const locales = [
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" }, // هنوز فایل نداری، ولی آماده‌ست
];

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.replace(newPath);
  };

  return (
    <div className="flex flex-row items-center space-y-2">
      {locales.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={clsx(
            "flex items-center gap-2 px-3 py-1 rounded-md text-sm transition",
            "hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer",
            locale === code
              ? "bg-gray-200 dark:bg-neutral-600 font-bold"
              : "text-gray-600 dark:text-gray-300"
          )}
        >
          <span className="text-xl">{flag}</span>
          <span className="hidden 2xl:flex p-0">{label}</span>
        </button>
      ))}
    </div>
  );
}
