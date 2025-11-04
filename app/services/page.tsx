"use client"

import { motion } from "framer-motion"
import { ArrowRight, Target, Palette, Layout, Globe, Smartphone, ShoppingCart, Code, Brain, Database, Search, Megaphone, FileText, Cloud, Shield, Users, Sparkles, Calendar } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"

const services = [
  {
    category: "1. We Build Your Digital Identity & Strategy",
    categoryShort: "Digital Identity",
    description: "Where your brand story begins",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    bgGradient: "from-purple-500/10 via-pink-500/10 to-red-500/10",
    iconBg: "from-purple-500/20 to-pink-500/20",
    items: [
      {
        title: "Brand & Strategy Audit",
        description:
          "First, we establish a plan. We analyze your market, competitors, and goals to create a clear roadmap that ensures every decision serves your business objectives.",
        icon: Target,
        highlight: "Strategic Foundation",
      },
      {
        title: "Brand Identity & Logo Design",
        description:
          "Our graphics design team builds your visual identity from the ground up. We create a memorable logo, color palette, and style guide that makes your brand look professional and builds instant trust.",
        icon: Palette,
        highlight: "Visual Excellence",
      },
      {
        title: "UI/UX Design (User Experience)",
        description:
          "We design the entire experience of your digital platform. Our UI/UX experts map out user journeys, create wireframes, and design a beautiful, intuitive interface that makes your website or app easy to use and converts visitors into customers.",
        icon: Layout,
        highlight: "User-Centric Design",
      },
    ],
  },
  {
    category: "2. We Create Your 24/7 Digital Sales Platform",
    categoryShort: "Digital Sales Platform",
    description: "Your business never sleeps",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    iconBg: "from-blue-500/20 to-cyan-500/20",
    items: [
      {
        title: "Web Development",
        description:
          'We build your "digital headquarters" using modern tech like React and Next.js. This creates an incredibly fast, secure, and engaging platform that converts visitors into customers.',
        icon: Globe,
        highlight: "Lightning Fast",
      },
      {
        title: "Mobile App Development",
        description:
          "We use React Native to build high-performance, cross-platform apps for both iOS and Android, putting your business directly in your customer's pocket.",
        icon: Smartphone,
        highlight: "Always Accessible",
      },
      {
        title: "E-commerce",
        description:
          "We build powerful, easy-to-manage online stores that make buying from you a seamless, secure experience.",
        icon: ShoppingCart,
        highlight: "Seamless Shopping",
      },
    ],
  },
  {
    category: "3. We Build Your Central Operations Hub",
    categoryShort: "Operations Hub",
    description: "Automation that works while you sleep",
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    bgGradient: "from-emerald-500/10 via-green-500/10 to-lime-500/10",
    iconBg: "from-emerald-500/20 to-green-500/20",
    items: [
      {
        title: "Custom Software & AI",
        description:
          "We replace your manual tasks with a custom-fit backend built on powerful, scalable technologies like Python, Node.js, and FastAPI.",
        icon: Code,
        highlight: "Intelligent Automation",
      },
      {
        title: "Data & ML",
        description:
          "We use AI, Machine Learning, and TensorFlow to build true automation, turning your raw data (from PostgreSQL or MongoDB databases) into actionable insights.",
        icon: Brain,
        highlight: "AI-Powered Insights",
      },
      {
        title: "CRM That Works",
        description:
          "We install and customize a system to ensure you never miss a lead again. Every inquiry is captured, tracked, and automatically sent to your sales team.",
        icon: Database,
        highlight: "Zero Missed Leads",
      },
    ],
  },
  {
    category: "4. We Bring You the Customers",
    categoryShort: "Customer Acquisition",
    description: "Turn browsers into buyers",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    iconBg: "from-orange-500/20 to-amber-500/20",
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "We don't just build your site; we make it visible. Our team optimizes your platform's code, content, and structure to ensure you rank high on Google for the keywords your target customers are actively searching for.",
        icon: Search,
        highlight: "Top Rankings",
      },
      {
        title: "Paid Advertising (PPC & SEM)",
        description:
          "We drive immediate, qualified traffic to your new platform. We design and manage targeted Google, LinkedIn, and social media ad campaigns focused on generating high-quality leads.",
        icon: Megaphone,
        highlight: "Instant Traffic",
      },
      {
        title: "Content & Social Media Strategy",
        description:
          "We establish your brand as an authority. By developing a strategy for blogs, case studies, and social media, we build trust with your audience and nurture potential customers.",
        icon: FileText,
        highlight: "Authority Building",
      },
    ],
  },
  {
    category: "5. We Manage Your \"Day 2\" and Beyond",
    categoryShort: "Day 2 & Beyond",
    description: "Your long-term success partner",
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
    bgGradient: "from-indigo-500/10 via-purple-500/10 to-violet-500/10",
    iconBg: "from-indigo-500/20 to-purple-500/20",
    items: [
      {
        title: "Cloud & DevOps",
        description:
          "We provide complete peace of mind. We manage your entire system on the world's best cloud infrastructure, AWS and Azure.",
        icon: Cloud,
        highlight: "Always Online",
      },
      {
        title: "Scalability & Security",
        description:
          "Using Docker and Kubernetes, we build a system that can infinitely scale—so you are always secure and your platform never crashes, even with 10 million users.",
        icon: Shield,
        highlight: "Infinitely Scalable",
      },
      {
        title: "Ongoing Support & Training",
        description:
          "Our partnership doesn't end at launch. We provide full team training and ongoing support to guarantee your investment pays off for years to come.",
        icon: Users,
        highlight: "Lifetime Partnership",
      },
    ],
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
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

const categoryHeaderVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full blur-3xl"
            ></motion.div>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4"
              >
                <Sparkles className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">Complete Digital Transformation</span>
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance"
              >
                Transform Your Business into a{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Scalable Digital Operation
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Every step designed to take you from <span className="font-semibold text-foreground">offline & overwhelmed</span> to{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">digital & dominant</span>
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
        <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="text-center mb-12"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                >
                  Our Mission: From{" "}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Offline & Overwhelmed
                  </span>{" "}
                  to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Digital & Dominant
                  </span>
                </motion.h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-3">📊</div>
                  <p className="text-sm font-semibold text-red-400 mb-2">The Problem</p>
                  <p className="text-sm text-muted-foreground">
                    Trapped by offline processes, losing customers, fighting spreadsheets
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-2 border-yellow-500/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-3">⚡</div>
                  <p className="text-sm font-semibold text-yellow-400 mb-2">The Solution</p>
                  <p className="text-sm text-muted-foreground">
                    Complete digital transformation across all operations
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-3">🚀</div>
                  <p className="text-sm font-semibold text-green-400 mb-2">The Result</p>
                  <p className="text-sm text-muted-foreground">
                    Fully scaled, digital-first operations that grow with you
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-center font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed"
              >
                We solve this by becoming your dedicated digital partner. We handle your entire{" "}
                <span className="text-foreground">"backend"</span> so you can focus on your{" "}
                <span className="text-foreground">"front end."</span>
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_50%)]"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <Sparkles className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">Step-by-Step Transformation</span>
              </motion.div>
              
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              >
                Your Complete Digital{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Transformation Journey
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Each phase carefully crafted to build upon the last, creating a seamless path to digital excellence
              </motion.p>
            </motion.div>

            <div className="space-y-24">
              {services.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={containerVariants}
                  className="relative"
                >
                  {/* Category Header */}
                  <motion.div
                    variants={categoryHeaderVariants}
                    className={`relative mb-12 rounded-3xl overflow-hidden bg-gradient-to-r ${category.bgGradient} backdrop-blur-sm border-2 border-transparent bg-clip-padding`}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${category.bgGradient})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
                    <div className="relative p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.iconBg} flex items-center justify-center shadow-lg`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="text-3xl font-black text-white">{categoryIndex + 1}</span>
                            </motion.div>
                            <div>
                              <h3 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                                {category.categoryShort}
                              </h3>
                              <p className="text-muted-foreground text-lg italic">{category.description}</p>
                            </div>
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl">
                            {category.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((service, index) => {
                      const Icon = service.icon
                      return (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={cardVariants}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="group relative h-full"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                          
                          <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-border group-hover:border-primary/50 transition-all duration-500 overflow-hidden">
                            {/* Animated Background Gradient */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                              initial={false}
                            ></motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                              {/* Icon */}
                              <motion.div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                              >
                                <Icon className="text-primary" size={28} />
                              </motion.div>

                              {/* Highlight Badge */}
                              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent border border-primary/20`}>
                                {service.highlight}
                              </div>

                              {/* Title */}
                              <h4 className="text-2xl font-black mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                                {service.title}
                              </h4>

                              {/* Description */}
                              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors duration-500">
                                {service.description}
                              </p>

                              {/* Learn More Link */}
                              <motion.div
                                className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                whileHover={{ x: 5 }}
                              >
                                <span>Learn more</span>
                                <ArrowRight size={16} />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl"
            ></motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4"
              >
                <Sparkles className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">Ready to Transform?</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              >
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Digital Transformation?
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                Get your free strategy audit and discover how we can transform your business into a digital powerhouse
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary via-primary to-accent text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    Get Your Free Strategy Audit
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  ></motion.span>
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
