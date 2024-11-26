import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RecoilContextProvider from "./lib/RecoilContextProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SMAQ | AI Data Analyt for Business Users",
  description: "SMAQ is a platform that provides a wide range of AI tools and services to help you make data-driven decisions 10x faster with our AI-powered data chatbot, customizable dashboards, and automated reporting. Unlock insights effortlessly, visualize trends instantly, and streamline your decision-making process like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <RecoilContextProvider>
        {children}
      </RecoilContextProvider>
      </body>
    </html>
  );
}
