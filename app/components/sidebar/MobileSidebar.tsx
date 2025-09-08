// components/sidebar/MobileSidebar.tsx
import ThemeToggle from "@/app/components/toggles/ThemeToggle";
import LanguageToggle from "../toggles/LanguageToggle";
import NavigationBar from "../NavigationBar";

type TFunction = (key: string, values?: Record<string, any>) => string;

type Props = {
  navLinks: { href: string; labelKey: string }[];
  tNav: TFunction;
};

export default function MobileSidebar({ navLinks, tNav }: Props) {
  return (
    <>
      {/* Top Navigation */}
      <div className="md:hidden w-full bg-white dark:bg-neutral-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Navigation tabs افقی */}
          <nav className="flex-1 flex space-x-4 overflow-x-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 whitespace-nowrap"
              >
                {tNav(link.labelKey)}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Dark Mode Toggle پایین سمت راست */}
      <div className="md:hidden fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-lg">
        <ThemeToggle />
      </div>

      {/* Language Toggle پایین سمت چپ */}
      <div className="md:hidden fixed bottom-4 left-10 z-50 w-12 h-12  flex items-center justify-center ">
        <LanguageToggle />
      </div>
    </>
  );
}
