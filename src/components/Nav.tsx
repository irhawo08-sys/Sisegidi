
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { href: "/insights", label: "Learn" },
  { href: "/platform-work", label: "Platform Work" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function RosetteMark() {
  return (
    <svg viewBox="0 0 120 120" width="18" height="18" aria-hidden="true">
      <g fill="currentColor">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`translate(60,60) rotate(${angle})`}>
            <polygon points="0,-38 7,-16 0,-9 -7,-16" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("sisegidi-theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const useDarkMode =
      savedTheme === "dark" ||
      (savedTheme === null && prefersDark);

    document.documentElement.classList.toggle("dark", useDarkMode);
    setDarkMode(useDarkMode);
    setThemeReady(true);
  }, []);

  function toggleTheme() {
    const nextMode = !darkMode;

    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem(
      "sisegidi-theme",
      nextMode ? "dark" : "light"
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold text-navy"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sunshine">
            <RosetteMark />
          </span>
          Ṣiṣẹ́ gidi
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/insights" className="btn-primary hidden lg:inline-flex">
            Start Learning
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            disabled={!themeReady}
            className="rounded-full p-2 text-navy transition-colors hover:bg-teal/20"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <Sun size={21} /> : <Moon size={21} />}
          </button>

          <button
            className="rounded-lg p-2 text-navy hover:bg-teal/20 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 bg-cream px-6 pb-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-teal/20 hover:text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/insights"
            className="btn-primary mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Start Learning
          </Link>
        </nav>
      )}
    </header>
  );
}
