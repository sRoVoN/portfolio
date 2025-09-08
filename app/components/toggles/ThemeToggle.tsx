"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-between w-10 h-10 rounded-full px-0 transition-colors duration-300 cursor-pointer bg-transparent border-none shadow-none"
    >
      <Moon
        className={`w-5 h-5 transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-30"
        }`}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-gray-400" />
      <Sun
        className={`w-5 h-5 transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-30"
        }`}
      />
    </button>
  );
}
