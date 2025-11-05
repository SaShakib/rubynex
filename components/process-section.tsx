"use client"

import { motion } from "framer-motion"
import { Lightbulb, Code, CheckCircle2, Rocket } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your vision, goals, and challenges to create a strategic roadmap.",
    icon: Lightbulb,
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/40",
    hoverBorder: "hover:border-yellow-500/80",
    shadowColor: "hover:shadow-yellow-500/50",
  },
  {
    number: "02",
    title: "Development",
    description: "Our expert team builds your solution using agile methodologies and modern tech stacks.",
    icon: Code,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/40",
    hoverBorder: "hover:border-blue-500/80",
    shadowColor: "hover:shadow-blue-500/50",
  },
  {
    number: "03",
    title: "Testing",
    description: "Rigorous quality assurance ensures your software is bulletproof before launch.",
    icon: CheckCircle2,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    borderColor: "border-green-500/40",
    hoverBorder: "hover:border-green-500/80",
    shadowColor: "hover:shadow-green-500/50",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
    icon: Rocket,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/40",
    hoverBorder: "hover:border-purple-500/80",
    shadowColor: "hover:shadow-purple-500/50",
  },
]

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // easeOut cubic bezier
    },
  },
}

export default function ProcessSection() {
  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Process</span>
          </h2>
          <p className="text-lg text-slate-400">
            A proven methodology that transforms ideas into exceptional software products.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative"
                whileHover={{ y: -5 }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 left-full w-16 h-1 items-center justify-center z-0">
                    <div className="w-full h-1 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"></div>
                    <div className="absolute right-0 w-0 h-0 border-l-6 border-l-primary/60 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
                  </div>
                )}

                <div className="flex flex-col items-center text-center group">
                  {/* Icon Box */}
                  <motion.div 
                    className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${step.gradient} backdrop-blur-sm border-2 ${step.borderColor} ${step.hoverBorder} flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden relative cursor-pointer ${step.shadowColor} hover:shadow-xl`}
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent 
                        className={`${step.iconColor} group-hover:scale-110 transition-transform duration-300`}
                        size={40}
                        style={{
                          filter: 'drop-shadow(0 0 12px currentColor)',
                        }}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>

                  {/* Step Number */}
                  <span className="text-sm font-bold text-accent mb-3 group-hover:text-accent/80 transition-colors">{step.number}</span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
