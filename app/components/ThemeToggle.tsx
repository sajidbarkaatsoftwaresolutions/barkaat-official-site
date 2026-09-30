"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
  }

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-md bg-obsidian-800 border border-border-primary text-text-secondary hover:text-accent-crimson transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md hover:border-accent-crimson"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 animate-fade-in" />
      ) : theme === "light" ? (
        <Sun className="w-5 h-5 animate-fade-in" />
      ) : (
        <Monitor className="w-5 h-5 animate-fade-in" />
      )}
    </button>
  );
}
