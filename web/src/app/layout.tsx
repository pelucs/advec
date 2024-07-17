import "./globals.css";

import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter, Bai_Jamjuree } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baijamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["700"], variable: "--font-baijamjuree" });

export const metadata: Metadata = {
  title: "ADVEC Campina Grande",
  description: "Plataforma de avisos e treinamentos da ADVEC Campina Grande",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="../../public/icon.svg"/>
      </Head>

      <body className={`${inter.variable} ${baijamjuree.variable} font-sans text-sm antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
