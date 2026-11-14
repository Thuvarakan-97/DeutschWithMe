import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { metadataBase, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: "Learn German Online | DeutschWithMe",
  description:
    "Explore German A1 and A2 classes online or in person, plus exam preparation for Goethe-Zertifikat, ÖSD, and telc exams.",
  applicationName: "DeutschWithMe",
  openGraph: {
    title: "Learn German Online | DeutschWithMe",
    description:
      "Explore German A1 and A2 classes online or in person, plus exam preparation for Goethe-Zertifikat, ÖSD, and telc exams.",
    siteName: "DeutschWithMe",
    locale: "en_GB",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn German Online | DeutschWithMe",
    description:
      "Explore German A1 and A2 classes online or in person, plus exam preparation for Goethe-Zertifikat, ÖSD, and telc exams.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <a className="skip-link" href="#home">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
