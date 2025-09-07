import Link from "next/link";

type Props = {
  navLinks: { href: string; labelKey: string }[];
  tNav: (key: string) => string; 
  variant?: "desktop" | "mobile"; 
};

export default function NavigationBar({navLinks, tNav, variant= "desktop"}: Props) {
  return (
      <nav className={`mt-8 space-y-2 ${variant === "mobile" ? "px-4 bg-gray-50 dark:bg-gray-900" : ""}`}>
      {navLinks.length > 0 ? (
        navLinks.map(({ href, labelKey }) => (
          <Link
            key={href}
            href={href}
            className={`group relative block overflow-hidden rounded-md px-4 py-2 font-medium transition-colors duration-200
              ${
                variant === "desktop"
                  ? "text-slate-700 dark:text-slate-200"
                  : "text-blue-600 dark:text-blue-400"
              }
            `}
          >
            <span
              className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0
                ${
                  variant === "desktop"
                    ? "bg-slate-100 dark:bg-neutral-700"
                    : "bg-blue-100 dark:bg-blue-900"
                }
              `}
            />
            <span className="relative z-10">{tNav(labelKey)}</span>
          </Link>
        ))
      ) : null}
    </nav>
  )
}
