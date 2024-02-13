import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.scss";
import ThemeClient from "@/components/ThemeClient";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeClient>
          <body className={inter.className}>{children}</body>
        </ThemeClient>
      </body>
    </html>
  );
}
