import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./tailwind.css";

import { ConfigProvider } from "antd";
import 'animate.css';
import { Toaster } from "react-hot-toast";
import MainLayout from "@/Components/RootLayout";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Shoppanorma B2B E-commerce Platform",
  description: "At Shoppanorama, we bring together products from different merchants so you can easily compare prices, features, and reviews. Using advanced technology, we provide real-time data to make sure the information you see is accurate and up-to-date.",
  metadataBase: new URL("https://www.shoppanorma.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shoppanorma - Your Go-To B2B E-commerce Platform",
    description: "Discover and compare products from diverse merchants on Shoppanorma's comprehensive B2B platform. Real-time data ensures accuracy in price, features, and reviews.",
    url: "https://www.shoppanorma.com",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shoppanorma B2B E-commerce Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoppanorma B2B E-commerce Platform",
    description: "Browse and compare products from different merchants with real-time data on Shoppanorma.",
    images: ["/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#8E9E84',
              // Alias Token
            },
          }}
        >
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster />
        </ConfigProvider>
      </body>
    </html>
  );
}
