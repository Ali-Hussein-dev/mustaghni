import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Providers } from "@/hooks/providers";
import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { useLocale } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://mustaghni.org"),
  title: "Mustaghni",
  description:
    "Easily search for brands & corporations associated with genocide in Palestine.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  return (
    <html lang={locale || "en"} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="relative scroll-smooth antialiased">
        <div className="bg">
          <Providers>
            <div
              className={`min-h-screen bg-gradient-to-r from-gray-50 via-transparent to-gray-50 font-sans flex-col-center ${inter.variable}`}
            >
              {children}
              <Footer />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
