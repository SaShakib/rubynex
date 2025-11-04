"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"

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
]

export default function FeaturedBlogs() {
  const containerRef = useRef(null)

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
      },
    }),
  }

  return (
    <section id="blogs" ref={containerRef} className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground">Insights and stories from our team of experts</p>
        </div>

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
                      quality={85}
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
  )
}
