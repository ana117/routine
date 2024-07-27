import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/common/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Routine",
  description: "Your Daily Exercise Routine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />

    <body className={`${inter.className} flex flex-col min-h-screen`}>
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange
      >
        <NavBar />
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
