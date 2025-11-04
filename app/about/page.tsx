"use client"

import { motion } from "framer-motion"
import { Target, Rocket, Code, Zap, TrendingUp, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"

const processSteps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business to understand your real bottlenecks and goals. We analyze your brand, market, and competitors to build a crystal-clear roadmap.",
    icon: Target,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "2",
    title: "Design & Prototype",
    description:
      "Our UI/UX and brand designers create a modern, professional identity and an intuitive user experience. You approve every screen before a single line of code is written.",
    icon: Rocket,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    number: "3",
    title: "Develop & Automate",
    description:
      "Our expert engineers build your platform using our modern tech stack (React, Python, AWS). We automate your manual tasks and build your central operations hub.",
    icon: Code,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    number: "4",
    title: "Launch & Market",
    description:
      "This is just the beginning. We launch your platform and immediately execute a digital marketing plan (SEO, PPC) to drive qualified traffic and fill your new CRM.",
    icon: Zap,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    number: "5",
    title: "Support & Scale (Day 2 & Beyond)",
    description:
      "We are your long-term partner. We provide ongoing support, secure cloud management, and team training to ensure your new system is adopted, secure, and scales with you.",
    icon: TrendingUp,
    gradient: "from-indigo-500/20 to-purple-500/20",
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            >
              We're Not Just a Dev Shop.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                We're Your Digital Growth Partner.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance max-w-4xl mx-auto"
            >
              Many agencies can build you a website. We're here to build your entire digital operation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-4"
            >
              <motion.a
                href="https://calendly.com/rubynextech/strategy-audit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-pointer text-lg group"
              >
                <Calendar size={20} />
                Join Free Strategy Session
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-8"
            >
              Our Mission: To Unleash Your Business from{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bad Tech
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We founded this company because we saw countless businesses like manufacturers, service providers, and
                retailers, who were experts in their field but were trapped by inefficient, offline processes.
              </p>

              <p className="text-xl font-semibold text-foreground">
                They were fighting with spreadsheets, losing leads, and working in their business instead of on it.
              </p>

              <p>
                Our mission is to solve this. We exist to transform these established businesses into fully scaled,
                digital-first operations. We handle your entire "backend" of technology, operations, and marketing, so
                you can get back to focusing on what you do best: serving your customers and growing your company.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Proven Process: Your Roadmap to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Success
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
              We don't guess. We follow a battle-tested process that guarantees results.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-1 overflow-hidden`}
                >
                  <div className="bg-card rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-12 gap-8 items-center p-8 md:p-12">
                      {/* Number & Icon */}
                      <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="text-primary" size={32} />
                        </div>
                        <span className="text-3xl font-black text-primary">{step.number}</span>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Ready to Partner{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                With Us?
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Let our team of strategists, designers, and engineers become your team.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-lg"
              >
                Start Your Transformation
                <ArrowRight size={24} className="group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}

