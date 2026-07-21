import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./sidenav";
import { inter } from '@/app/fonts';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}

      <body className={`${inter.className} antialiased`}>{children}</body>

      {/* <body
        className={`${inter.className} antialiased`}
      >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </body> */}
    </html>
  );
}

