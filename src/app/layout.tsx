import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Plateforme Algoréa - LMS Nouvelle Génération",
  description: "Transformez l'éducation avec Algoréa, la plateforme d'apprentissage révolutionnaire qui utilise l'IA pour personnaliser l'expérience éducative.",
  keywords: ["LMS", "éducation", "apprentissage", "intelligence artificielle", "plateforme éducative"],
  authors: [{ name: "Plateforme Algoréa" }],
  openGraph: {
    title: "Plateforme Algoréa - LMS Nouvelle Génération",
    description: "Transformez l'éducation avec Algoréa, la plateforme d'apprentissage révolutionnaire qui utilise l'IA pour personnaliser l'expérience éducative.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plateforme Algoréa - LMS Nouvelle Génération",
    description: "Transformez l'éducation avec Algoréa, la plateforme d'apprentissage révolutionnaire qui utilise l'IA pour personnaliser l'expérience éducative.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="algorea-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
