import type { Metadata } from "next";
import { Inter, Bai_Jamjuree } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import Head from "next/head";

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

      <body className={`${inter.variable} ${baijamjuree.variable} font-sans text-sm`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
