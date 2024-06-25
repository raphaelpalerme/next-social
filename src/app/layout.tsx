import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Social Media App",
  description:
    "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header
          className={cn(
            "w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"
          )}
        >
          <Navbar />
        </header>
        <div
          className={cn(
            "bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
