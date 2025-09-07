"use client"
// app/[locale]/projects/[project]/page.tsx
import { use } from 'react';
import { notFound } from 'next/navigation';
import { useTranslations,  } from 'next-intl';
import Link from 'next/link';

type Props = {
  params: {
    project: string;
  };
};

export default function ProjectPage({ params }: { params: Promise<{ locale: string; project: string }> }) {
  const { locale, project } = use(params);
  const t = useTranslations(`projects.${project}`);
  const detailsTitle = t('detailsTitle');
  const details: string[] = t.raw('details');

  // const locale = useLocale();

  try {
    return (
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">{t('title')}</h1>
        <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t('full')}
        </p>
        {detailsTitle && details && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 dark:text-yellow-300">{detailsTitle}</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-800 dark:text-neutral-200">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
        <div className="mt-8">
          <Link
            href={`/${locale}/projects`}
            className="text-blue-600 hover:underline text-sm"
          >
            {t('back')}
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
