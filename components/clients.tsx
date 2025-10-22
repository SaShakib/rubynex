"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

const scrollItems = ["Launch Scalable Products", "Build Your MVP", "Augment Your Team", "Outsource Without Limits"]

const clientLogos = [
  { name: "TechCorp" },
  { name: "InnovateLabs" },
  { name: "CloudFirst" },
  { name: "DataFlow" },
  { name: "SecureNet" },
  { name: "DigitalHub" },
  { name: "VisionAI" },
  { name: "NexGen" },
  { name: "TechCorp" },
  { name: "InnovateLabs" },
]

export default function Clients() {
  const scrollRef = useRef(null)
  const logoScrollRef = useRef(null)
  const containerRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [logoScrollWidth, setLogoScrollWidth] = useState(0)

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
    }
    if (logoScrollRef.current) {
      setLogoScrollWidth(logoScrollRef.current.scrollWidth - logoScrollRef.current.clientWidth)
    }
  }, [])

  return (
    <section id="clients" ref={containerRef} className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Infinite Scrolling Banner */}
        <div className="mb-20">
          <div className="overflow-hidden bg-primary/15 rounded-2xl py-8 md:py-12">
            <motion.div
              ref={scrollRef}
              className="flex gap-8 md:gap-12 whitespace-nowrap px-4 will-change-transform"
              animate={{ x: -scrollWidth }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...scrollItems, ...scrollItems, ...scrollItems].map((item, index) => (
                <div key={index} className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                  <span className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    {item}
                  </span>
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trusted By Section - Text-based Logos */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by 350+ businesses around the world</h2>
            <p className="text-lg text-muted-foreground">Join industry leaders transforming their digital presence</p>
          </div>

          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-white py-12 px-4">
            <motion.div
              ref={logoScrollRef}
              className="flex gap-12 md:gap-16 will-change-transform justify-center"
              animate={{ x: -logoScrollWidth }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary/70 to-accent/70 bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-300 cursor-default"
                >
                  {client.name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
