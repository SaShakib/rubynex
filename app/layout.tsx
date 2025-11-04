import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rubynex - Modern Software Development Agency",
  description:
    "Build exceptional digital experiences with our expert software development team. Cloud-native solutions, modern tech stack, and innovative design.",
  keywords: "software development, web development, cloud solutions, tech agency, digital transformation",
  openGraph: {
    title: "Rubynex - Modern Software Development Agency",
    description: "Build exceptional digital experiences with our expert software development team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubynex - Modern Software Development Agency",
    description: "Build exceptional digital experiences with our expert software development team.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="eGQtz7CYFCvJ6zzshmeW_s6LMKRYKe4OaYxO4F3pXVA" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
