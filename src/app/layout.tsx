import { Nunito } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Header } from "@/widgets";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Next Pizza - самая вкусная пицца в мире",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", nunito.variable)}
    >
      <body>
        <ThemeProvider forcedTheme="light">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
