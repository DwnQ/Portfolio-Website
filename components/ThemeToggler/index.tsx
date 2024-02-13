"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="cursor-pointer p-2 bg-gray-300 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      tabIndex={0}
      role="button"
    >
      {theme === "dark" ? <Sun /> : <Moon className="text-black" />}
    </div>
  );
}
