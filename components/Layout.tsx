"use client";

import Head from "next/head";
import { ReactNode } from "react";
import cn from "classnames";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
  title?: string;
};

const meta = {
  title: "Darwin Qiu - Developer, CS Student",
  description: `Just a Computer Science Student.`,
  type: "website",
};

const Layout: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
      </main>
    </div>
  );
};
export default Layout;
