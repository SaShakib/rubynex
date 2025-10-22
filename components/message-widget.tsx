"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function MessageWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-border/50 p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Message us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Have a question? We'd love to hear from you. Send us a message!
          </p>
          <input
            type="text"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-lg border border-border/50 focus:outline-none focus:border-primary mb-3"
          />
          <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Send
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Open message widget"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
