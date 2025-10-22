"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const containerRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Build the Future with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Modern Tech</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed text-balance">
              We craft exceptional digital experiences using cutting-edge technologies and innovative design. Transform
              your vision into reality with our expert team.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          <motion.div variants={videoVariants} initial="hidden" animate="visible" className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-primary/20">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/tech-video-background.jpg" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
