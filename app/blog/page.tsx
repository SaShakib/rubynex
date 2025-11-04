"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"

const blogs = [
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build web applications and improve user experiences.",
    author: "Sarah Johnson",
    date: "Mar 15, 2024",
    category: "AI & Technology",
    image: "/ai-technology-abstract.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Scaling Your Startup: Cloud Infrastructure Best Practices",
    excerpt:
      "Learn the essential strategies for building scalable cloud infrastructure that grows with your business needs.",
    author: "Michael Chen",
    date: "Mar 12, 2024",
    category: "Cloud Solutions",
    image: "/cloud-infrastructure.jpg",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Mobile-First Design: Creating Experiences for Everyone",
    excerpt:
      "Discover the principles of mobile-first design and how to create seamless experiences across all devices.",
    author: "Emma Rodriguez",
    date: "Mar 10, 2024",
    category: "Design",
    image: "/mobile-design.jpg",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Stop Managing Tech, Start Growing Your Business",
    excerpt:
      "Discover how custom software automation can free your team from repetitive tasks and unlock true business growth.",
    author: "Rubynex Team",
    date: "Mar 8, 2024",
    category: "Strategy",
    image: "/analytics-dashboard.png",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "From Spreadsheets to Success: CRM Implementation Guide",
    excerpt:
      "Learn how to move from manual lead tracking to an automated CRM system that never lets opportunities slip away.",
    author: "Rubynex Team",
    date: "Mar 5, 2024",
    category: "Operations",
    image: "/ecommerce-platform.jpg",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Digital Transformation: A Complete Roadmap",
    excerpt:
      "A step-by-step guide to transforming your offline business into a fully scaled, digital-first operation.",
    author: "Rubynex Team",
    date: "Mar 1, 2024",
    category: "Strategy",
    image: "/mobile-app.jpg",
    gradient: "from-teal-500/20 to-cyan-500/20",
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
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen py-20 px-4 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center pt-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              >
                The Digital Growth{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Blog
                </span>
                : Tech & Strategy Insights
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance max-w-4xl mx-auto"
              >
                Go beyond the code. Our blog is your resource for actionable advice on real-world digital transformation. We share expert insights on custom software, AI automation, and data-driven marketing to help you stop managing tech and start growing your business.
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

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group h-full"
                >
                  <div className={`bg-gradient-to-br ${blog.gradient} rounded-2xl p-1 h-full overflow-hidden`}>
                    <div className="bg-card rounded-2xl h-full overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden h-48 md:h-56">
                        <Image
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                            {blog.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">{blog.excerpt}</p>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pt-4 border-t border-border/50">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            {blog.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {blog.date}
                          </div>
                        </div>

                        <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link cursor-pointer">
                          Read More
                          <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

