import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Footer } from "../components/Footer";
import { Providers } from "@/hooks/providers";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Mustaghni",
  description:
    "Easily search for brands & corporations associated with genocide in Palestine.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased">
        <Providers>
          <div className={`font-sans flex-col-center ${inter.variable}`}>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
