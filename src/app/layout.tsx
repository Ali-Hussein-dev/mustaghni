import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mustaghni.org"),
  title: "Mustaghni",
  description:
    "Easily search for brands associated with genocide in Palestine.",
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
  return children;
}
