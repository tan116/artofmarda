"use client";

import React, { useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
// import { useThemeToggler } from "../hooks/use-theme-toggler";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded cursor-pointer transition duration-300"
    >
        {theme === "light" ? 
            <MdLightMode className="inline-block w-5 h-5" />
            : <MdDarkMode className="inline-block w-5 h-5" />}
    </button>
  );
}