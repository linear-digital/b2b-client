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
  title: "Shoppanorma E-commerce Platform",
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
