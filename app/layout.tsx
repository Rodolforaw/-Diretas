import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})

export const metadata: Metadata = {
  title: "SOMAR +Diretas - Sistema de Obras Públicas",
  description: "Sistema completo de gestão de obras públicas para a Prefeitura de Maricá - RJ",
  keywords: ["obras públicas", "gestão", "maricá", "somar", "infraestrutura"],
  authors: [{ name: "SOMAR - Soluções em Obras e Meio Ambiente" }],
  creator: "SOMAR",
  publisher: "SOMAR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://somar-diretas.vercel.app"),
  openGraph: {
    title: "SOMAR +Diretas",
    description: "Sistema de Controle de Obras Públicas - Maricá/RJ",
    url: "https://somar-diretas.vercel.app",
    siteName: "SOMAR +Diretas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SOMAR +Diretas - Sistema de Obras Públicas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMAR +Diretas",
    description: "Sistema de Controle de Obras Públicas - Maricá/RJ",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://somar-diretas.vercel.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
