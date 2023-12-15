import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { Providers } from "@/hooks/providers";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Mustaghni",
  description:
    "Support Palestinian by boycotting companies that support genocide",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} min-h-screen bg-gray-50 text-neutral-800 flex-col-start`}
      >
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
