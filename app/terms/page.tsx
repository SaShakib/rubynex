"use client"

import { motion } from "framer-motion"
import { FileText, Scale, AlertTriangle, CheckCircle, Gavel, Calendar } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

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

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using the Rubynex website and services, you accept and agree to be bound by these Terms and Conditions.",
      "If you do not agree with any part of these terms, you must not use our website or services.",
      "We reserve the right to update, change, or replace any part of these Terms and Conditions at any time without prior notice.",
    ],
  },
  {
    icon: CheckCircle,
    title: "Use of Services",
    content: [
      "You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.",
      "You must not use our services in any way that violates any applicable laws or regulations.",
      "You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.",
      "We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.",
    ],
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of Rubynex or its content suppliers and is protected by copyright and other intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works of, publicly display, or use any content from our website without our prior written consent.",
      "Rubynex trademarks and logos may not be used without our express written permission.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: [
      "Rubynex shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.",
      "We do not guarantee that our website will be available at all times or that it will be error-free, secure, or free from viruses or other harmful components.",
      "Your use of our services is at your sole risk. Our services are provided on an 'as is' and 'as available' basis.",
    ],
  },
  {
    icon: Gavel,
    title: "Service Agreements",
    content: [
      "Specific service agreements, project contracts, and statements of work will be governed by separate written agreements between Rubynex and the client.",
      "These Terms and Conditions apply to general website usage and may be supplemented by additional terms for specific services.",
      "In case of conflict between these Terms and Conditions and a specific service agreement, the service agreement shall prevail.",
    ],
  },
]

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-12"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <FileText className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">Terms and Conditions</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              >
                Terms of{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Service
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Last updated: {currentDate}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="space-y-16"
            >
              {/* Introduction */}
              <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions ("Terms") govern your access to and use of the Rubynex website and services. Please read these Terms carefully before using our services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Rubynex ("we," "our," or "us") operates this website and provides digital transformation services. By accessing or using our website, you agree to be bound by these Terms.
                </p>
              </motion.div>

              {/* Sections */}
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                    </div>
                    <ul className="space-y-4 ml-16">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}

              {/* Payment Terms */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms for our services will be specified in individual service agreements or project contracts. Generally:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-2">•</span>
                    <span>Payment schedules and methods will be agreed upon before project commencement.</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-2">•</span>
                    <span>Late payments may incur additional fees as specified in the service agreement.</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-2">•</span>
                    <span>Refund policies will be outlined in specific service agreements.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Confidentiality */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our engagement. Detailed confidentiality provisions will be included in specific service agreements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We respect your business information and will not disclose it to third parties without your consent, except as required by law.
                </p>
              </motion.div>

              {/* Termination */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice, for any breach of these Terms and Conditions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may terminate your use of our services at any time by discontinuing use of our website and notifying us in writing.
                </p>
              </motion.div>

              {/* Governing Law */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where Rubynex operates.
                </p>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-foreground">Rubynex</p>
                  <p>Email: legal@rubynex.com</p>
                  <p>Website: <a href="/contact" className="text-primary hover:underline">Contact Page</a></p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

