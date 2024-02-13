import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import ThemeToggler from "@/components/ThemeToggler";

type Props = {
  children: ReactNode;
  href: string;
};

const socialLinks = [
  {
    href: "https://github.com/Raylooper",
    label: "Twitter",
    icon: (
      <svg
        className="w-8"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Twitter</title>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
  {
    href: "https://github.com/Raylooper",
    label: "LinkedIn",
    icon: (
      <svg
        className="w-8"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    href: "https://github.com/Raylooper",
    label: "GitHub",
    icon: (
      <svg
        className="w-8"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/darwin_7u/",
    label: "Instagram",
    icon: (
      <svg
        className="w-8"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Instagram</title>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
];

const ExternalLink = ({ href, children }: Props) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  const { resolvedTheme, setTheme } = useTheme();
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    setThemeReady(true);
  }, [themeReady]);

  return (
    <>
      <div>
        <span className="grid w-10 bottom-0 lg:fixed max-lg: max-lg:flex max-lg:w-full lg:after:h-14 lg:after:block lg:after:bg-black lg:dark:after:bg-white lg:after:w-px lg:after:m-auto">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`p-4 ${
                  themeReady && resolvedTheme === "dark"
                    ? "text-white"
                    : "text-gunmetal"
                } transition`}
              >
                {link.icon}
              </div>
            </Link>
          ))}
        </span>
      </div>
    </>
  );
}
