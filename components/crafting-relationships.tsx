"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const teamImages = [
  { src: "/team-collaboration-1.jpg", alt: "Team collaboration 1" },
  { src: "/team-collaboration-2.jpg", alt: "Team collaboration 2" },
  { src: "/team-collaboration-3.jpg", alt: "Team collaboration 3" },
  { src: "/team-collaboration-4.jpg", alt: "Team collaboration 4" },
  { src: "/team-collaboration-5.jpg", alt: "Team collaboration 5" },
  { src: "/team-collaboration-6.jpg", alt: "Team collaboration 6" },
]

export default function CraftingRelationships() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
    }
  }, [])

  return (
    <section id="relationships" ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* First Row: Title and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-primary font-semibold mb-2">#YOUAREONTIK</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Crafting{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Long-Term</span>
              <br />
              Relationships
            </h2>
          </div>

          <div className="pt-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ontik Technology, we see you as a partner, where your goals become our mission. Your success is the
              inspiration of our works, and your growth is the real measure of our achievements.
            </p>
          </div>
        </div>

        <div className="overflow-hidden pt-12 pb-12" style={{ minHeight: "700px" }}>
          <motion.div
            ref={scrollRef}
            className="flex gap-6 will-change-transform"
            animate={{ x: -scrollWidth }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...teamImages, ...teamImages, ...teamImages].map((image, index) => {
              const startOffset = index % 2 === 0 ? 0 : 100
              return (
                <div
                  key={`image-${index}`}
                  className="flex-shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{
                    width: "288px",
                    height: "500px",
                    marginTop: `${startOffset}px`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="288px"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                    />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
