import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import 'animate.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B E-commerce Platform",
  description: "Find the Best Deals on the Latest Tech, Fashion, and More!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#8E9E84',
                // Alias Token
              },
            }}
          >
            {children}
          </ConfigProvider>
        </Suspense>
      </body>
    </html>
  );
}
