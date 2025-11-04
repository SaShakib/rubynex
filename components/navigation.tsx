"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Rubynex</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#featured" className="text-sm hover:text-primary transition">
              Featured
            </Link>
            <Link href="#clients" className="text-sm hover:text-primary transition">
              Clients
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary transition">
              Projects
            </Link>
            <Link href="#tech" className="text-sm hover:text-primary transition">
              Tech Stack
            </Link>
            <Link href="#faq" className="text-sm hover:text-primary transition">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg transition cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#featured" className="block px-4 py-2 hover:bg-muted rounded">
              Featured
            </Link>
            <Link href="#clients" className="block px-4 py-2 hover:bg-muted rounded">
              Clients
            </Link>
            <Link href="#projects" className="block px-4 py-2 hover:bg-muted rounded">
              Projects
            </Link>
            <Link href="#tech" className="block px-4 py-2 hover:bg-muted rounded">
              Tech Stack
            </Link>
            <Link href="#faq" className="block px-4 py-2 hover:bg-muted rounded">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
