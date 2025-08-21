import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knotty Studios | We craft beautiful applications that help your business grow.",
  description:
    "We design and build robust, scalable applications that grow with your business, are secure by design, and fast by default.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${openSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
