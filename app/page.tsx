import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProblemSection from "@/components/problem-section"
import EnterpriseSolutions from "@/components/enterprise-solutions"
import Clients from "@/components/clients"
import ProjectShowcase from "@/components/project-showcase"
import TechStack from "@/components/tech-stack"
import Testimonials from "@/components/testimonials"
import CraftingRelationships from "@/components/crafting-relationships"
import Partnerships from "@/components/partnerships"
import AIChatSection from "@/components/ai-chat-section"
import FeaturedBlogs from "@/components/featured-blogs"
import FAQ from "@/components/faq"
// import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
// import MessageWidget from "@/components/message-widget"
import CTASection from "@/components/cta-section"
import ProcessSection from "@/components/process-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <ProblemSection />
      <EnterpriseSolutions />
      <Clients />
      <ProjectShowcase />
      <TechStack />
      <Testimonials />
      <CraftingRelationships />
      <Partnerships />
      <AIChatSection />
      <FeaturedBlogs />
      <FAQ />
      <CTASection />
      <ProcessSection />
      {/* <ContactForm /> */}
      <Footer />
      {/* <MessageWidget /> */}
    </main>
  )
}
