import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-geist',
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  preload: false,
  variable: '--font-geist-mono',
})

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
  generator: "Rubynex Technologies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="eGQtz7CYFCvJ6zzshmeW_s6LMKRYKe4OaYxO4F3pXVA" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        {/* Tawk.to Script */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/690abe501384f91953f5c36b/1j98verit';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
