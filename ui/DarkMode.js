import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React from "react";
import { useTheme } from "../context/theme";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className="border h-8 w-8 inline-flex items-center justify-center border-neutral-500 rounded-lg focus:outline-2 focus:outline-transparent 
  focus:ring transition-all ease-in-out duration-200 transform focus:border-transparent dark:focus:ring-teal-400 focus:ring-teal-700"
      onClick={themeHandler}
    >
      {theme === "light" ? (
        <MoonIcon className="w-6 h-6 dark:text-neutral-300 text-neutral-700" />
      ) : (
        <SunIcon className="w-6 h-6 dark:text-neutral-300 text-neutral-700" />
      )}
    </button>
  );
};

export default DarkMode;
