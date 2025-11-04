"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function CTASection() {
  const containerRef = useRef(null)

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + index * 0.1,
      },
    }),
  }

  return (
    <section ref={containerRef} className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
          <span className="text-sm font-semibold text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Let's Talk
          </span>
        </div>

        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Ready to Build Something{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
            Amazing Together?
          </span>
        </motion.h2>

        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Let's discuss your project and explore how we can help bring your vision to life with innovative software
          solutions.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            custom={0}
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
          >
            Get Started →
          </motion.button>
          <motion.button
            custom={1}
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="px-8 py-3 rounded-lg border border-slate-700 text-black font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Schedule a Call
          </motion.button>
        </div>
      </div>
    </section>
  )
}
