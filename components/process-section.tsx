"use client"

import { motion } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your vision, goals, and challenges to create a strategic roadmap.",
    icon: "💡",
    hasImage: true,
  },
  {
    number: "02",
    title: "Development",
    description: "Our expert team builds your solution using agile methodologies and modern tech stacks.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Testing",
    description: "Rigorous quality assurance ensures your software is bulletproof before launch.",
    icon: "✓",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
    icon: "🚀",
    hasImage: true,
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
      ease: "easeOut",
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
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-24 left-full w-16 h-1 items-center justify-center">
                  <div className="w-full h-1 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"></div>
                  <div className="absolute right-0 w-0 h-0 border-l-6 border-l-primary/60 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                {/* Icon Box with Image */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center mb-6 group hover:border-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 overflow-hidden relative">
                  {step.hasImage ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 group-hover:from-primary/60 group-hover:to-accent/60 transition-all duration-300 flex items-center justify-center">
                      <img
                        src={`/.jpg?height=96&width=96&query=${step.title} process image`}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </span>
                  )}
                </div>

                {/* Step Number */}
                <span className="text-sm font-bold text-accent mb-3">{step.number}</span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
