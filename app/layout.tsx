import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
