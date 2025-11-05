"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiAmazon, 
  SiDocker, 
  SiKubernetes, 
  SiTensorflow, 
  SiPython, 
  SiFastapi, 
  SiNextdotjs, 
  SiReact as SiReactNative, 
  SiTailwindcss,
  SiChakraui,
  SiFlask,
  SiDjango,
  SiGo,
  SiRust,
  SiSpringboot,
  SiLaravel,
  SiFlutter,
  SiOpenjdk,
  SiGraphql,
  SiRedis,
  SiElasticsearch,
  SiRabbitmq,
  SiApachekafka,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiFigma,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiSvelte
} from "react-icons/si"
import { Brain, Cloud } from "lucide-react"

const techCategories = {
  "Frontend": [
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React Native", icon: SiReactNative, color: "text-cyan-400" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
    { name: "Angular", icon: SiAngular, color: "text-red-500" },
    { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
    { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Chakra UI", icon: SiChakraui, color: "text-cyan-400" },
  ],
  "Backend": [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "Django", icon: SiDjango, color: "text-green-700" },
    { name: "Flask", icon: SiFlask, color: "text-gray-300" },
    { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
    { name: "Java", icon: SiOpenjdk, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "Go", icon: SiGo, color: "text-blue-400" },
    { name: "Rust", icon: SiRust, color: "text-orange-600" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Redis", icon: SiRedis, color: "text-red-500" },
    { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-500" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    { name: "Prisma", icon: SiPrisma, color: "text-gray-300" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
  ],
  "AI & ML": [
    { name: "AI & ML", icon: Brain, color: "text-purple-400" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
    { name: "PyTorch", icon: SiPytorch, color: "text-orange-400" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-600" },
    { name: "OpenCV", icon: SiOpencv, color: "text-green-500" },
    { name: "Pandas", icon: SiPandas, color: "text-blue-500" },
    { name: "NumPy", icon: SiNumpy, color: "text-blue-600" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
    { name: "Azure", icon: Cloud, color: "text-blue-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400" },
    { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500" },
    { name: "Apache Kafka", icon: SiApachekafka, color: "text-black" },
  ],
  "Tools": [
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
    { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },
    { name: "Jira", icon: SiJira, color: "text-blue-500" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  ],
}

export default function TechStack() {
  const containerRef = useRef(null)
  const [activeTab, setActiveTab] = useState<string>("Frontend")

  const techVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.04,
        ease: [0.25, 0.50, 0.70, 1.00] as [number, number, number, number],
      },
    }),
  }

  const tabs = Object.keys(techCategories)

  return (
    <section id="tech" ref={containerRef} className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Grid - Only render active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full"
        >
          {techCategories[activeTab as keyof typeof techCategories].map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={`${activeTab}-${index}`}
                custom={index}
                variants={techVariants}
                initial="hidden"
                animate="visible"
                className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/20 cursor-default overflow-hidden relative aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>

                <div className="flex flex-col items-center gap-3 text-center relative z-10">
                  <div className={`${tech.color} group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent size={32} />
                  </div>
                  <p className="font-semibold text-slate-200 text-xs group-hover:text-white transition-colors duration-200">{tech.name}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
