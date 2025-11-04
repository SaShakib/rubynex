"use client"

import { Button } from "@/components/ui/button"

export default function AIChatSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Decorative dots */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-primary"></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Use the Power of{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI to Get</span>
                <br />
                Ahead of the Competition?
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Let's bring it to life together! Hire top talents from Ontik Technology.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full cursor-pointer">
                Let's have a Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
