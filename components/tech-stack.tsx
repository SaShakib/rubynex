"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const allTechs = [
  { name: "AI & ML", icon: "🧠" },
  { name: "React", icon: "</>" },
  { name: "TypeScript", icon: "</>" },
  { name: "Node.js", icon: "⬜" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "🔶" },
  { name: "Azure", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "⚓" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Next.js", icon: "▲" },
  { name: "React Native", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
]

export default function TechStack() {
  const containerRef = useRef(null)
  const techsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      techsRef.current.forEach((tech, index) => {
        gsap.from(tech, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.5,
          delay: index * 0.03,
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="tech" ref={containerRef} className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Technology</span>{" "}
            Stack
          </h2>
          <p className="text-lg text-slate-400">
            Leveraging cutting-edge technologies including AI, machine learning, and modern software engineering
            practices to build intelligent, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 w-full">
          {allTechs.map((tech, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) techsRef.current[index] = el
              }}
              className="group bg-slate-900 rounded-xl p-3 border border-primary/40 hover:border-primary/80 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 cursor-default overflow-hidden relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <p className="font-bold text-white text-xs">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
