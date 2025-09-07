'use client';

import { useTranslations, useLocale } from "next-intl";
import Logo from "@/public/logo.png";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  return (
    <section className="flex flex-col items-center p-5">
      <div className="p-5 flex justify-center items-center">
        <Image src={Logo} alt={t("logoAlt")} width={100} height={100} />
      </div>
      <h1 className="text-4xl font-bold text-black dark:text-white">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
        {t("subtitle")}
      </p>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {t.rich("projectInfo", {
          link: (chunks) => (
            <a
              href={`/${locale}/projects`}
              className="underline text-blue-600 dark:text-blue-400"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </section>
  );
}
