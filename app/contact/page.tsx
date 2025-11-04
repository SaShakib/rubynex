"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"

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

const budgetOptions = [
  "<$1000 (Exploring Ideas)",
  "$1000 - $2500",
  "$2500 - $5000",
  "$5000 - $10000",
  "$10000+",
  "Not Sure Yet (Let's discuss in the audit)",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    challenge: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success")
      setFormData({
        fullName: "",
        companyName: "",
        workEmail: "",
        phoneNumber: "",
        challenge: "",
        budget: "",
      })
      setIsSubmitting(false)

      setTimeout(() => setSubmitStatus(""), 5000)
    }, 1000)
  }

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
                Let's Build Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Future, Together
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance max-w-4xl mx-auto"
              >
                You're one call away from solving your biggest operational headaches. Please complete the form below to
                receive a complimentary, no-obligation strategy audit from our expert team.
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

        {/* Contact Form & Info Section */}
        <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto w-full">
            {/* Contact Form Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="relative"
            >
              {/* Glassmorphism Card */}
              <motion.div
                variants={itemVariants}
                className="relative backdrop-blur-xl bg-card/80 border border-primary/20 rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50"></div>
                <div className="absolute inset-[1px] bg-background/95 rounded-3xl"></div>

                <div className="relative p-8 md:p-12">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  >
                    Send Us a Message
                  </motion.h2>
                  <p className="text-center text-muted-foreground mb-8">
                    We'll get back to you within 24 hours
                  </p>

                  <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2 text-foreground group-focus-within:text-primary transition-colors">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/60"
                            placeholder="John Doe"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-focus-within:via-primary/5 group-focus-within:to-accent/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2 text-foreground group-focus-within:text-primary transition-colors">
                          Company Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/60"
                            placeholder="Acme Inc."
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-focus-within:via-primary/5 group-focus-within:to-accent/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2 text-foreground group-focus-within:text-primary transition-colors">
                          Work Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="workEmail"
                            value={formData.workEmail}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/60"
                            placeholder="john@company.com"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-focus-within:via-primary/5 group-focus-within:to-accent/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2 text-foreground group-focus-within:text-primary transition-colors">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/60"
                            placeholder="+1 (709) 377-3777"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-focus-within:via-primary/5 group-focus-within:to-accent/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 text-foreground group-focus-within:text-primary transition-colors">
                        What's your biggest business challenge?
                      </label>
                      <div className="relative">
                        <textarea
                          name="challenge"
                          value={formData.challenge}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none placeholder:text-muted-foreground/60"
                          placeholder="Tell us about your challenges..."
                        ></textarea>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-focus-within:via-primary/5 group-focus-within:to-accent/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 text-foreground group-focus-within:text-primary transition-colors">
                        What is your approximate project budget?
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-focus-within:via-primary/5 group-focus-within:to-accent/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-primary via-primary to-accent text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer flex items-center justify-center gap-2 group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 rounded-xl text-green-600 text-center backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="font-semibold">Thank you! We'll get back to you soon with your free strategy audit.</span>
                        </div>
                      </motion.div>
                    )}
                  </motion.form>
                </div>
              </motion.div>

              {/* Contact Info Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="mt-16"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  Or Reach Us Directly
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {/* Column 1: Email */}
                  <div className="group backdrop-blur-xl bg-card/60 border-2 border-border hover:border-primary/50 p-6 rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <Mail className="text-primary" size={28} />
                    </div>
                    <h3 className="font-bold mb-2 text-lg text-foreground">Email Us</h3>
                    <a
                      href="mailto:hello@rubynex.ca"
                      className="text-primary hover:text-accent transition-colors text-lg font-medium"
                    >
                      hello@rubynex.ca
                    </a>
                  </div>

                  {/* Column 2: Phone */}
                  <div className="group backdrop-blur-xl bg-card/60 border-2 border-border hover:border-primary/50 p-6 rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <Phone className="text-primary" size={28} />
                    </div>
                    <h3 className="font-bold mb-2 text-lg text-foreground">Call Us</h3>
                    <a
                      href="tel:+17093773777"
                      className="text-primary hover:text-accent transition-colors text-lg font-medium"
                    >
                      +1 709 377 3777
                    </a>
                  </div>

                  {/* Column 3: Location */}
                  <div className="group backdrop-blur-xl bg-card/60 border-2 border-border hover:border-primary/50 p-6 rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <MapPin className="text-primary" size={28} />
                    </div>
                    <h3 className="font-bold mb-2 text-lg text-foreground">Location</h3>
                    <p className="text-muted-foreground">St. John's, Newfoundland, Canada</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
