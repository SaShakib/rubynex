"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      onClick={scrollDown}
    >
      <motion.p
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors"
      >
        Scroll Please
      </motion.p>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <ChevronDown
          size={32}
          className="text-primary group-hover:text-accent transition-colors"
        />
        <ChevronDown
          size={32}
          className="text-primary group-hover:text-accent transition-colors -mt-4 opacity-50"
        />
      </motion.div>
    </motion.div>
  )
}

