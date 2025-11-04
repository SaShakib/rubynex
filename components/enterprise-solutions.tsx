"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    number: "1",
    title: "Strategy & Design",
    description:
      "We audit your brand and design a modern, trustworthy identity—from your logo to your app's UI/UX—that builds confidence and converts visitors.",
    icon: "🎨",
  },
  {
    number: "2",
    title: "Custom Development",
    description:
      "We build your digital headquarters. From blazing-fast Next.js websites to AI-powered automation tools in Python, we build the platform you need to operate efficiently.",
    icon: "⚙️",
  },
  {
    number: "3",
    title: "Sales & Marketing",
    description:
      "We install a CRM that ensures you never miss a lead, then run SEO and PPC campaigns to drive qualified traffic and fill your new sales pipeline.",
    icon: "📈",
  },
  {
    number: "4",
    title: "Cloud & Scalability",
    description:
      "We provide total peace of mind. We host your system on AWS or Azure and use Docker & Kubernetes to ensure it's secure, fast, and can scale to 10 million users.",
    icon: "☁️",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // easeOut cubic bezier
    },
  },
}

export default function EnterpriseSolutions() {
  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Complete{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transformation Framework
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build one piece of the puzzle. We provide the full, end-to-end solution.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-default overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{solution.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {solution.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer group"
          >
            Explore Our Technical Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
