import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VLibras from "@/components/VLibras";
import LeitorTexto from "@/components/LeitorTexto";
import QueryProvider from "@/providers/query-provider";
import HighContrastButton from "@/components/ButaoAltasLuzes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cardapio Acessivel",
  description: "Cardapio Acessivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
  
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <QueryProvider>
        {children}
        
        
        </QueryProvider>
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 99999,
          }}
        >
            <HighContrastButton />
        <LeitorTexto />
        <VLibras />
        </div>
        
      </body>
    </html>
  );
}
