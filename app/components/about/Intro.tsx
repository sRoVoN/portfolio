"use client"
// app/components/about/Intro.tsx

import { useTranslations } from "next-intl";

export default function Intro() {
    const t = useTranslations('about');
    console.log(t("intro"), "intro")
  return (
      <section className="w-full max-w-4xl px-6 py-8">
        <p className="text-justify text-lg indent-8  text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("intro")}
        </p>
      </section>
  );
}
