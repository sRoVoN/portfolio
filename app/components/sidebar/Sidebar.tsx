// components/Sidebar.tsx

import Logo from "../Logo";
import ThemeToggle from "@/app/components/toggles/ThemeToggle";
import LanguageToggle from "../toggles/LanguageToggle";
import SideProfile from "./SideProfile";
import NavigationBar from "../NavigationBar";

type TFunction = (key: string, values?: Record<string, any>) => string;

type Props = {
  navLinks: { href: string; labelKey: string }[];
  tSidebar: TFunction;
  tNav: TFunction;
  tHero: TFunction;
  tAbout: TFunction
};

export default function Sidebar({ navLinks, tSidebar, tNav, tHero, tAbout }: Props) {
  // const date = new Date();
  // const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
<div className="w-full min-h-screen bg-white dark:bg-neutral-800 border-r border-gray-200 dark:border-neutral-700 sticky top-0">
      <div className="flex h-screen flex-col justify-between px-4 py-6">
        {/* بخش بالا: پروفایل و لینک‌ها */}
        <div>
          {/* پروفایل */}
          <div className="text-center mb-8">
            <SideProfile tSidebar={tSidebar} />

            <div className="mx-auto w-16 h-16 mt-2">
              <Logo
                alt={tHero("logoAlt")}
                className="mx-auto"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold">{tSidebar("name")}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tSidebar("title")}
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {tSidebar("bio")}
            </p>
          </div>

          {/* لینک‌ها */}
          <NavigationBar navLinks={navLinks} tNav={tNav} variant="desktop" />
        </div>

        {/* جداکننده خطی */}
        <div className="my-6 border-t border-gray-300 dark:border-gray-600" />

        {/* بخش پایین: تاگل‌ها و ساعت */}
        <div className="flex flex-col items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />

          {/* سال*/}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Frontend Developer – Soode Arvin – 2025
          </p>
        </div>
      </div>
    </div>
  );
}
