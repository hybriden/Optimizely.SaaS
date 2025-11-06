import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerContext } from "@/lib/optimizely-cms/rsc";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Proxima - Professional Digital Solutions",
  description: "Expert consulting and development services powered by Optimizely",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale } = await getServerContext();
  return (
    <html lang={locale ?? "en"} className="dark scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
