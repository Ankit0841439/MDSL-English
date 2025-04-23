import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButtons from "@/components/whatsapp-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MDSL English - Your Journey of English Learning Begins Here!",
  description: "Basic to Advanced level Spoken English coaching institute",
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon.png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButtons />
      </body>
    </html>
  )
}
