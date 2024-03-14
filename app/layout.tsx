import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navigator from "./components/Navigator";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "George Tsimis",
  description: "This is my personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='bg-sky-950 scroll-smooth'>
      <body className={`${inter.className} h-screen w-screen relative`}>
        <Navigator />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
