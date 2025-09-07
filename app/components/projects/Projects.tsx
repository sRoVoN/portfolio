"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
        {t("title")}
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow transition-shadow duration-300 hover:shadow-xl"
          >
            {/* کارت پروژه - کلیک‌پذیر */}
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="group relative block overflow-hidden rounded-t-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="relative z-10 p-6 backdrop-blur-[2px] bg-white/50 dark:bg-neutral-900/50 rounded-t-2xl">
                <h2 className="text-xl font-semibold text-neutral-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                  {t(`${project.slug}.title`)}
                </h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {t(`${project.slug}.short`)}
                </p>

                {project.tech && (
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-300">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>

            {/* لینک‌های جداگانه - پایین کارت */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 px-6 py-3 flex gap-6 text-sm">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
