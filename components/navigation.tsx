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
            <Link href="/" className="text-sm hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition">
              About
            </Link>
            <Link href="/services" className="text-sm hover:text-primary transition">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm hover:text-primary transition">
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm hover:text-primary transition">
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg transition cursor-pointer"
            >
              Contact
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
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-muted rounded">
              About
            </Link>
            <Link href="/services" className="block px-4 py-2 hover:bg-muted rounded">
              Services
            </Link>
            <Link href="/case-studies" className="block px-4 py-2 hover:bg-muted rounded">
              Case Studies
            </Link>
            <Link href="/blog" className="block px-4 py-2 hover:bg-muted rounded">
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded cursor-pointer"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
