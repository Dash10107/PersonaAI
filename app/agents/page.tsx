"use client"

import { motion } from "framer-motion"
import {
  Brain,
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  Target,
  ArrowLeft,
  Database,
  Search,
  Globe,
  Cpu,
  Activity,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/Navbar"

const agents = [
  {
    id: 1,
    name: "Planner Agent",
    role: "Strategic Task Orchestrator",
    description:
      "Breaks down complex emotional intelligence goals into actionable steps and coordinates multi-agent workflows",
    detailedDescription:
      "The Planner Agent serves as the central coordinator, analyzing user requests and creating comprehensive action plans. It determines which agents and tools are needed for each task, ensuring efficient resource allocation and optimal outcomes.",
    color: "from-purple-500 to-purple-600",
    icon: Target,
    position: { x: 300, y: 100 },
    tools: [
      { name: "Task Decomposition", icon: BarChart3, description: "Breaks complex goals into manageable steps" },
      { name: "Resource Allocation", icon: Cpu, description: "Optimizes agent and tool usage" },
      { name: "Progress Tracking", icon: TrendingUp, description: "Monitors task completion and success metrics" },
    ],
    metrics: { accuracy: 94, speed: 87, satisfaction: 96 },
  },
  {
    id: 2,
    name: "Content Generator",
    role: "Personalized Learning Creator",
    description:
      "Creates tailored emotional intelligence content, exercises, and learning materials based on individual needs",
    detailedDescription:
      "This agent specializes in generating personalized content that adapts to each user's learning style, emotional intelligence level, and specific development goals. It creates engaging exercises, scenarios, and educational materials.",
    color: "from-blue-500 to-blue-600",
    icon: MessageSquare,
    position: { x: 600, y: 200 },
    tools: [
      { name: "Content RAG", icon: Database, description: "Retrieves relevant EQ knowledge and research" },
      { name: "Personalization Engine", icon: Users, description: "Adapts content to individual learning styles" },
      { name: "Exercise Generator", icon: Activity, description: "Creates interactive EQ practice scenarios" },
    ],
    metrics: { accuracy: 91, speed: 93, satisfaction: 89 },
  },
  {
    id: 3,
    name: "Doubt Solver",
    role: "Real-time Support Specialist",
    description: "Provides instant answers to emotional intelligence questions and clarifies complex concepts",
    detailedDescription:
      "The Doubt Solver agent offers immediate support when users encounter challenges or have questions about emotional intelligence concepts. It provides clear explanations and practical guidance in real-time.",
    color: "from-emerald-500 to-emerald-600",
    icon: Brain,
    position: { x: 150, y: 300 },
    tools: [
      { name: "Knowledge Base", icon: Search, description: "Searches comprehensive EQ research database" },
      { name: "Web Search", icon: Globe, description: "Finds latest emotional intelligence insights" },
      { name: "Context Analysis", icon: Zap, description: "Understands user's specific situation and needs" },
    ],
    metrics: { accuracy: 96, speed: 98, satisfaction: 94 },
  },
  {
    id: 4,
    name: "Analytics Agent",
    role: "Progress & Insights Analyzer",
    description:
      "Tracks emotional intelligence development and provides data-driven insights for continuous improvement",
    detailedDescription:
      "This agent continuously monitors user progress, analyzes behavioral patterns, and generates actionable insights. It helps users understand their emotional intelligence journey through comprehensive analytics and personalized recommendations.",
    color: "from-orange-500 to-orange-600",
    icon: BarChart3,
    position: { x: 450, y: 350 },
    tools: [
      { name: "Progress Analytics", icon: TrendingUp, description: "Tracks EQ development over time" },
      { name: "Pattern Recognition", icon: Activity, description: "Identifies behavioral and emotional patterns" },
      { name: "Insight Generation", icon: Brain, description: "Creates personalized improvement recommendations" },
    ],
    metrics: { accuracy: 93, speed: 85, satisfaction: 92 },
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "User Query",
    description: "User asks an emotional intelligence question or requests guidance",
    icon: MessageSquare,
    color: "from-slate-500 to-slate-600",
  },
  {
    step: 2,
    title: "Task Planning",
    description: "Planner Agent analyzes the request and creates an action plan",
    icon: Target,
    color: "from-purple-500 to-purple-600",
  },
  {
    step: 3,
    title: "Knowledge Retrieval",
    description: "Agents access relevant tools and databases for information",
    icon: Database,
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 4,
    title: "Content Creation",
    description: "Content Generator creates personalized response and materials",
    icon: Cpu,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    step: 5,
    title: "Analysis & Refinement",
    description: "Analytics Agent refines output and tracks progress",
    icon: BarChart3,
    color: "from-orange-500 to-orange-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null)
  const [hoveredConnection, setHoveredConnection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-blue-100/20 to-purple-100/20 animate-pulse"></div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Intelligent Agents
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed">
            Specialized, interconnected, and powered by agentic AI to solve complex emotional intelligence tasks
            seamlessly
          </p>
        </motion.div>

        {/* Interactive Agent Network */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-purple-100/50 shadow-xl shadow-purple-100/20 p-8 mb-16 min-h-[500px] overflow-hidden"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Interactive Agent Network</h2>
            <p className="text-slate-600">Hover over agents and connections to explore relationships</p>
          </div>

          {/* Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)
              `,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {agents.map((agent) =>
              agent.tools.map((tool, toolIndex) => {
                const connectionId = `${agent.id}-${toolIndex}`
                const isHighlighted = hoveredConnection === connectionId || selectedAgent === agent.id
                return (
                  <motion.line
                    key={connectionId}
                    x1={agent.position.x + 80}
                    y1={agent.position.y + 60}
                    x2={agent.position.x + 200 + toolIndex * 60}
                    y2={agent.position.y + 150}
                    stroke={isHighlighted ? "#8b5cf6" : "url(#gradient)"}
                    strokeWidth={isHighlighted ? "3" : "2"}
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: isHighlighted ? 0.8 : 0.4,
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                )
              }),
            )}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Agent Nodes */}
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              variants={nodeVariants}
              className="absolute group cursor-pointer"
              style={{
                left: agent.position.x,
                top: agent.position.y,
              }}
              whileHover={{ scale: 1.05, z: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => {
                setSelectedAgent(agent.id)
                setHoveredConnection(`${agent.id}-all`)
              }}
              onMouseLeave={() => {
                setSelectedAgent(null)
                setHoveredConnection(null)
              }}
            >
              <div
                className={`
                w-44 h-36 bg-gradient-to-br ${agent.color} rounded-2xl p-4 
                shadow-lg shadow-purple-200/40 border border-white/20
                group-hover:shadow-xl group-hover:shadow-purple-300/50
                transition-all duration-300 relative overflow-hidden
              `}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <agent.icon className="w-5 h-5 text-white" />
                    <h3 className="font-bold text-white text-sm">{agent.name}</h3>
                  </div>
                  <p className="text-white/90 text-xs font-medium mb-2">{agent.role}</p>
                  <p className="text-white/80 text-xs leading-relaxed">{agent.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Tool Nodes */}
          {agents.map((agent) =>
            agent.tools.map((tool, toolIndex) => (
              <motion.div
                key={`${agent.id}-tool-${toolIndex}`}
                variants={nodeVariants}
                className="absolute group cursor-pointer"
                style={{
                  left: agent.position.x + 200 + toolIndex * 60,
                  top: agent.position.y + 150,
                }}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onMouseEnter={() => setHoveredConnection(`${agent.id}-${toolIndex}`)}
                onMouseLeave={() => setHoveredConnection(null)}
              >
                <div
                  className="
                  w-16 h-16 bg-white rounded-xl p-3 shadow-md shadow-slate-200/60
                  border border-slate-200/50 group-hover:shadow-lg group-hover:shadow-purple-200/40
                  transition-all duration-300 flex items-center justify-center
                "
                >
                  <tool.icon className="w-6 h-6 text-slate-600 group-hover:text-purple-600 transition-colors" />
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap max-w-32 text-center">
                    <div className="font-medium">{tool.name}</div>
                  </div>
                </div>
              </motion.div>
            )),
          )}
        </motion.div>

        {/* Detailed Agent Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Agent Profiles</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep dive into each agent's capabilities, tools, and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 shadow-lg shadow-purple-100/20 p-6 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${agent.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{agent.name}</h3>
                    <p className="text-purple-600 font-medium text-sm">{agent.role}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{agent.detailedDescription}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Connected Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        <tool.icon className="w-3 h-3" />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{agent.metrics.accuracy}%</div>
                    <div className="text-xs text-slate-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{agent.metrics.speed}%</div>
                    <div className="text-xs text-slate-600">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{agent.metrics.satisfaction}%</div>
                    <div className="text-xs text-slate-600">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How They Collaborate</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch how our agents work together seamlessly to deliver personalized emotional intelligence solutions
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-purple-100/50 shadow-xl shadow-purple-100/20 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 max-w-48 shadow-md border border-purple-100/50">
                    <div className="text-xs font-bold text-purple-600 mb-1">STEP {step.step}</div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute"
                      style={{ left: `${((index + 1) / workflowSteps.length) * 100 - 10}%`, top: "2rem" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 * index }}
                    >
                      <ArrowRight className="w-6 h-6 text-purple-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              One Ecosystem, Many Experts
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Experience
              <br />
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Intelligent Collaboration?
              </span>
            </h2>

            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
              Our agents work together to make learning, planning, and problem-solving effortless. See them in action
              with our interactive demo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Activity className="w-5 h-5" />
                Explore the Demo
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Platform
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
