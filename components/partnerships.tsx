"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const partners = [
  { name: "IOT Lab BD", logo: "/iot-lab-bd-logo.jpg" },
  { name: "de tempête", logo: "/de-temp-te-logo.jpg" },
  { name: "Kraftwerk", logo: "/kraftwerk-logo.jpg" },
  { name: "TechTrioz", logo: "/techtrioz-logo.jpg" },
  { name: "Texon", logo: "/texon-logo.jpg" },
  { name: "deWare", logo: "/deware-logo.jpg" },
  { name: "IOT Lab BD", logo: "/iot-lab-bd-logo.jpg" },
  { name: "de tempête", logo: "/de-temp-te-logo.jpg" },
  { name: "Kraftwerk", logo: "/kraftwerk-logo.jpg" },
  { name: "TechTrioz", logo: "/techtrioz-logo.jpg" },
]

const slidingTexts = ["Be a partner", "Grow Together", "Scale Your Business", "Join Our Network"]

export default function Partnerships() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const topRowRef = useRef(null)
  const bottomRowRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [topScrollWidth, setTopScrollWidth] = useState(0)
  const [bottomScrollWidth, setBottomScrollWidth] = useState(0)

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
    }
    if (topRowRef.current) {
      setTopScrollWidth(topRowRef.current.scrollWidth - topRowRef.current.clientWidth)
    }
    if (bottomRowRef.current) {
      setBottomScrollWidth(bottomRowRef.current.scrollWidth - bottomRowRef.current.clientWidth)
    }
  }, [])

  return (
    <section id="partnerships" ref={containerRef} className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl py-6 md:py-8">
            <motion.div
              ref={scrollRef}
              className="flex gap-8 md:gap-12 whitespace-nowrap px-4"
              animate={{ x: -scrollWidth }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...slidingTexts, ...slidingTexts, ...slidingTexts].map((text, index) => (
                <div key={index} className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                  <span className="text-xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    {text}
                  </span>
                  <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Collaborations
              </span>{" "}
              That Established Our Identity
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our clients speak about our expertise and the success we can bring to your projects.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
              Be a partner
            </Button>
          </div>

          <div className="space-y-4">
            {/* Top Row */}
            <div className="overflow-hidden">
              <motion.div
                ref={topRowRef}
                className="flex gap-4"
                animate={{ x: -topScrollWidth }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-32 w-40"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="overflow-hidden">
              <motion.div
                ref={bottomRowRef}
                className="flex gap-4"
                animate={{ x: -bottomScrollWidth }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {[...partners.slice(5), ...partners.slice(5), ...partners.slice(5)].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-32 w-40"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
