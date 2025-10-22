"use client"

import { motion } from "framer-motion"

const solutions = [
  {
    title: "Artificial Intelligence",
    description: "We design and deploy AI strategies using cutting-edge models to scale with your business.",
    icon: "🤖",
  },
  {
    title: "UI/UX",
    description: "We craft intuitive digital experiences that combine user empathy with strategic design.",
    icon: "🎨",
  },
  {
    title: "Web Development",
    description: "Scalable, responsive, and secure websites built for growth and seamless user experience.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "High-performance native and cross-platform apps—built to engage and scale in the real world.",
    icon: "📱",
  },
  {
    title: "Web3.0 Development",
    description: "To decentralize your tech platforms or services avail an advanced secure solution.",
    icon: "⛓️",
  },
  {
    title: "Data Science",
    description: "Turn raw data into insights with machine learning, analytics, and visual dashboards.",
    icon: "📊",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud systems—optimized for performance, automation, and cost.",
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
      ease: "easeOut",
    },
  },
}

export default function EnterpriseSolutions() {
  return (
    <section id="solutions" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Grade{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services designed to transform your business and drive innovation
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-default overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{solution.title}</h3>
              <p className="text-slate-600 leading-relaxed">{solution.description}</p>
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
