"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Brain, Send, User, Bot, CheckCircle, Clock, ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const mockMessages = [
  {
    id: 1,
    type: "user",
    content: "I had a difficult conversation with my colleague today. How can I handle this better?",
    timestamp: "2:34 PM",
  },
  {
    id: 2,
    type: "agent",
    content: "I understand that was challenging. Let me analyze the emotional dynamics and provide some insights.",
    timestamp: "2:34 PM",
    agent: "EQ Coach",
  },
  {
    id: 3,
    type: "user",
    content: "They seemed frustrated and I felt defensive. What should I do differently?",
    timestamp: "2:35 PM",
  },
  {
    id: 4,
    type: "agent",
    content: "Based on your description, I'm detecting defensive patterns. Let me break down some strategies for you.",
    timestamp: "2:35 PM",
    agent: "Conversation Analyst",
  },
]

const pipelineSteps = [
  {
    id: 1,
    name: "Input Processing",
    agent: "Natural Language Processor",
    status: "completed",
    description: "Analyzing conversation context and emotional cues",
    duration: "0.3s",
  },
  {
    id: 2,
    name: "Emotional Analysis",
    agent: "Sentiment Analyzer",
    status: "completed",
    description: "Identifying emotional patterns and triggers",
    duration: "0.8s",
  },
  {
    id: 3,
    name: "Strategy Generation",
    agent: "EQ Coach",
    status: "active",
    description: "Creating personalized response strategies",
    duration: "1.2s",
  },
  {
    id: 4,
    name: "Insight Delivery",
    agent: "Communication Expert",
    status: "pending",
    description: "Formatting actionable recommendations",
    duration: "0.5s",
  },
]

export default function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(2)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < pipelineSteps.length - 1 ? prev + 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                EQ Platform
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
          {/* Chat Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 shadow-xl shadow-purple-100/20 flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-purple-100/50">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">AI Conversation</h2>
              <p className="text-slate-600">Real-time emotional intelligence coaching</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
              <AnimatePresence>
                {mockMessages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                      max-w-[80%] rounded-2xl p-4 shadow-sm
                      ${
                        msg.type === "user"
                          ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white"
                          : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800"
                      }
                    `}
                    >
                      {msg.type === "agent" && (
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-4 h-4 text-purple-600" />
                          <span className="text-xs font-semibold text-purple-600">{msg.agent}</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                      <div className="flex items-center gap-1 mt-2 opacity-70">
                        {msg.type === "user" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                        <span className="text-xs">{msg.timestamp}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-6 border-t border-purple-100/50">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts or ask for guidance..."
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-200 flex items-center gap-2 font-medium">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </motion.div>

          {/* Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 shadow-xl shadow-purple-100/20 p-6"
          >
            {/* Pipeline Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">AI Pipeline Execution</h2>
              <p className="text-slate-600">Watch our agents process and analyze your conversation</p>
            </div>

            {/* Pipeline Steps */}
            <div className="space-y-6">
              {pipelineSteps.map((step, index) => {
                const isActive = index === currentStep
                const isCompleted = index < currentStep
                const isPending = index > currentStep

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`
                      relative p-6 rounded-2xl border transition-all duration-500
                      ${
                        isActive
                          ? "bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 shadow-lg shadow-purple-200/40"
                          : isCompleted
                            ? "bg-gradient-to-br from-green-50 to-emerald-100/50 border-green-200"
                            : "bg-gradient-to-br from-slate-50 to-slate-100/50 border-slate-200"
                      }
                    `}
                  >
                    {/* Status Icon */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                        ${
                          isActive
                            ? "bg-purple-600 text-white animate-pulse"
                            : isCompleted
                              ? "bg-green-600 text-white"
                              : "bg-slate-300 text-slate-500"
                        }
                      `}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : isActive ? (
                          <Zap className="w-6 h-6" />
                        ) : (
                          <Clock className="w-6 h-6" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-slate-900">{step.name}</h3>
                          <span
                            className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            ${
                              isActive
                                ? "bg-purple-200 text-purple-800"
                                : isCompleted
                                  ? "bg-green-200 text-green-800"
                                  : "bg-slate-200 text-slate-600"
                            }
                          `}
                          >
                            {isActive ? "Processing" : isCompleted ? "Complete" : "Pending"}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 mb-1">{step.agent}</p>
                        <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>Duration: {step.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar for Active Step */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-b-2xl"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                      />
                    )}

                    {/* Connection Line */}
                    {index < pipelineSteps.length - 1 && (
                      <div className="absolute left-10 -bottom-3 w-0.5 h-6 bg-gradient-to-b from-purple-300 to-transparent" />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Pipeline Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">2.8s</div>
                  <div className="text-xs text-slate-600">Avg Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">94%</div>
                  <div className="text-xs text-slate-600">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">4</div>
                  <div className="text-xs text-slate-600">Active Agents</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
