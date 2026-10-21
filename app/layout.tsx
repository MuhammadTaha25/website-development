import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { dentistLocalBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.practiceName} | Dentist in ${siteConfig.address.city}, ${siteConfig.address.state}`,
  description: siteConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900 pb-16 sm:pb-0">
        <JsonLd data={dentistLocalBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        <GoogleAnalytics />
        {/*
          TODO: Call-tracking (e.g. CallRail) placeholder.
          Once NEXT_PUBLIC_CALLRAIL_SWAP_ID is set, load the CallRail swap script here, e.g.:
          <Script src={`https://cdn.callrail.com/companies/XXXX/${swapId}/12/swap.js`} strategy="afterInteractive" />
          and ensure every rendered phone number uses the data-tel attribute CallRail expects.
        */}
      </body>
    </html>
  );
}
