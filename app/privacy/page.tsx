"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Calendar } from "lucide-react"
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
    icon: Eye,
    title: "Information We Collect",
    content: [
      "We collect information that you provide directly to us, including name, email address, phone number, company information, and project details when you contact us or request our services.",
      "We automatically collect certain information when you visit our website, including IP address, browser type, device information, and usage data through cookies and similar technologies.",
      "We may collect information from third-party sources such as social media platforms when you interact with us through those channels.",
    ],
  },
  {
    icon: FileText,
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve our services and website functionality.",
      "To communicate with you about our services, respond to inquiries, and provide customer support.",
      "To send you marketing communications, newsletters, and updates about our services (you can opt-out at any time).",
      "To analyze usage patterns and trends to improve user experience and website performance.",
      "To comply with legal obligations and protect our rights and interests.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
      "We use encryption, secure servers, and access controls to safeguard your data.",
      "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      "You have the right to access, update, or delete your personal information at any time.",
      "You can opt-out of marketing communications by clicking the unsubscribe link in our emails.",
      "You can request a copy of your personal data or request that we restrict processing of your data.",
      "For any privacy-related requests, please contact us at the email address provided below.",
    ],
  },
]

export default function PrivacyPolicyPage() {
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
                <Shield className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">Privacy Policy</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              >
                Your Privacy{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Matters
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
                  At Rubynex ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
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

              {/* Cookies */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </motion.div>

              {/* Third-Party Services */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services for analytics, hosting, and communication purposes. These services may collect information about your use of our website. We encourage you to review the privacy policies of these third-party providers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to external sites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </motion.div>

              {/* Data Retention */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </motion.div>

              {/* Changes to Policy */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-foreground">Rubynex</p>
                  <p>Email: privacy@rubynex.com</p>
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

