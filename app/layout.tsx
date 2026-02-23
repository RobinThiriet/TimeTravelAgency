import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TimeTravel Agency | Voyagez dans le Temps",
  description:
    "Webapp interactive de voyage temporel: destinations immersives, chatbot, quiz personnalise et reservation.",
};

export const viewport: Viewport = {
  themeColor: "#0d0f14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
