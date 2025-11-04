"use client"

import { motion } from "framer-motion"
import { AlertCircle, Mail, Clock, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Mail,
    text: "Are you losing valuable leads in spreadsheets or missed emails?",
  },
  {
    icon: Clock,
    text: "Is your team wasting hours on repetitive tasks that could be automated?",
  },
  {
    icon: AlertCircle,
    text: "Does your website look dated, unprofessional, or fail to bring in customers?",
  },
  {
    icon: TrendingUp,
    text: "Are you worried your competitors are scaling faster than you?",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

export default function ProblemSection() {
  return (
    <>
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            >
              Are You Stuck Focusing on the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Wrong Problems?
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Most businesses aren't held back by their product. They're held back by broken, manual processes.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <p className="text-lg font-medium text-foreground pt-2">{problem.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Full-width digital backend banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Code/Matrix pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)
              `,
            }}
          />
        </div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,0,0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-30"></div>
        
        {/* Border glow effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        {/* Content */}
        <div className="relative px-4 md:px-8 py-20 md:py-32 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Tech badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/20 border border-primary/50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-green-400 font-semibold">SYSTEM ACTIVE</span>
            </div>

            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              We solve this by building your complete digital{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  "backend"
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></span>
              </span>{" "}
              so you can focus on what you do best.
            </p>

            {/* Decorative code snippet */}
            <div className="mt-8 flex justify-center items-center gap-4 text-xs md:text-sm font-mono text-slate-400 opacity-50">
              <span className="text-green-400">{"{"}</span>
              <span>infrastructure</span>
              <span className="text-primary">:</span>
              <span className="text-accent">"scalable"</span>
              <span className="text-green-400">{"}"}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

