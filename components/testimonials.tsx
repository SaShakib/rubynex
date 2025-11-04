"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "/professional-woman.png",
    quote:
      "Rubynex is a trusted, agile partner who delivers real impact—so much so, we brought them into our next big venture.",
    description:
      "Rubynex has been an incredible tech partner from day one—turning our vision for Timunar into a modern, high-impact brand and website. Their team is agile, transparent, and deeply committed to delivering real value.",
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLabs",
    image: "/professional-man.png",
    quote: "Their expertise in cloud solutions transformed our entire infrastructure. Highly recommended!",
    description:
      "Working with this team was a game-changer for our startup. They understood our vision and delivered beyond expectations. The quality of their work and attention to detail is unmatched.",
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager, CloudFirst",
    image: "/professional-woman-2.png",
    quote: "Best decision we made for our digital transformation journey.",
    description:
      "From initial consultation to final deployment, every step was handled professionally. Their team's technical knowledge combined with business acumen made all the difference.",
  },
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Clients'{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thoughts</span>
          </h2>
          <p className="text-lg text-muted-foreground">Hear from the companies we've partnered with</p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-200/50 min-h-96">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              {/* Left side - Client image and name */}
              <div className="flex flex-col justify-between">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-primary shadow-lg">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              {/* Right side - Large quote and description */}
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="text-8xl text-primary/20 leading-none mb-4">"</div>
                  <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed text-foreground">
                    {testimonials[currentIndex].quote}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {testimonials[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 z-10 p-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-all hover:scale-110 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-8 z-10 p-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-all hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlay(false)
                  setCurrentIndex(index)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
