import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'George Tsimis',
  description: 'This is my personal site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className="bg-black bg-[url('/images/bricks.jpeg')] bg-no-repeat bg-cover"
    >
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
