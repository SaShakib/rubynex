"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory and payment processing",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/ecommerce-dashboard.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization with advanced filtering and reporting",
    tags: ["React", "D3.js", "Node.js"],
    image: "/analytics-dashboard-charts.png",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application with offline capabilities",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/mobile-app-interface.png",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
]

export default function ProjectShowcase() {
  const containerRef = useRef(null)
  const projectsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 70%",
          },
          opacity: 0,
          y: 80,
          scale: 0.85,
          rotation: index % 2 === 0 ? -2 : 2,
          duration: 0.8,
          ease: "back.out",
        })

        const image = project.querySelector("img")
        if (image) {
          gsap.set(image, { transformOrigin: "center center" })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">Showcase of our latest work and innovations</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) projectsRef.current[index] = el
              }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-1 overflow-hidden`}>
                <div className="bg-card rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <div className="relative rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                          <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group/btn">
                            View Project{" "}
                            <ExternalLink size={20} className="group-hover/btn:rotate-45 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full`}></div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                          Project {index + 1}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground rounded-full text-sm font-semibold border border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                        Explore More{" "}
                        <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
