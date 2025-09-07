"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Heart,
  Users,
  Target,
  Zap,
  BookOpen,
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const pulseAnimation = {
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/40">
      <Navbar />

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white to-slate-50/40" />
        <div className="absolute top-24 left-12 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-pink-200/25 rounded-full blur-3xl" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div className="max-w-6xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 px-5 py-2.5 rounded-full mb-10 border border-purple-200/60 backdrop-blur-sm"
              variants={fadeInUp}
            >
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700 tracking-wide">Science-Backed AI Technology</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 text-balance leading-[0.9] tracking-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Emotional Intelligence
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
                with AI-Powered Precision
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-14 max-w-4xl mx-auto text-pretty leading-relaxed font-medium"
              variants={fadeInUp}
            >
              Personalized AI Agents, Science-Based Growth, and Measurable Results.
              <br className="hidden md:block" />
              Experience the future of emotional intelligence development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              variants={fadeInUp}
            >
              <Link href="/agents">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group rounded-xl"
                >
                  Explore the Platform
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50 px-10 py-5 text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl"
              >
                View Research
              </Button>
            </motion.div>

            <motion.div className="relative" variants={fadeInUp} {...floatingAnimation}>
              <div className="relative mx-auto w-fit">
                <div className="flex items-center justify-center space-x-6 bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-purple-100/60">
                  <div className="flex space-x-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25"
                      {...pulseAnimation}
                    >
                      <Brain className="h-7 w-7 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/25"
                      {...pulseAnimation}
                      style={{ animationDelay: "0.7s" }}
                    >
                      <Heart className="h-7 w-7 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25"
                      {...pulseAnimation}
                      style={{ animationDelay: "1.4s" }}
                    >
                      <Users className="h-7 w-7 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25"
                      {...pulseAnimation}
                      style={{ animationDelay: "2.1s" }}
                    >
                      <Target className="h-7 w-7 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="mission" className="py-28 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-purple-100 text-purple-700 px-5 py-2.5 font-semibold tracking-wide"
            >
              Our Mission
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 text-balance leading-tight">
              Democratizing Emotional Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              We believe emotional intelligence is the foundation of human potential. Our mission is to make emotional
              growth accessible, measurable, and transformative for everyone.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-xl group hover:scale-[1.02] bg-gradient-to-br from-white to-purple-50/40 rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-8 pt-10">
                  <div className="w-18 h-18 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/30">
                    <BookOpen className="h-9 w-9 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-4">Science-Based Foundation</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-10">
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    Built on decades of validated research from leading emotional intelligence frameworks, ensuring
                    every interaction is grounded in proven psychological principles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-xl group hover:scale-[1.02] bg-gradient-to-br from-white to-pink-50/40 rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-8 pt-10">
                  <div className="w-18 h-18 bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-pink-500/30">
                    <Heart className="h-9 w-9 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-4">Personalized Growth</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-10">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Every user receives a unique AI companion that adapts to their emotional patterns, learning style,
                    and personal goals for truly individualized development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-xl group hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/40 rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-8 pt-10">
                  <div className="w-18 h-18 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/30">
                    <TrendingUp className="h-9 w-9 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-4">Measurable Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-10">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Track your emotional intelligence growth with detailed analytics, progress metrics, and real-world
                    application insights that demonstrate tangible results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              Research Foundation
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Built on Proven Science</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our platform integrates cutting-edge research from psychology, neuroscience, and AI to create the most
              effective emotional intelligence development experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Emotional Intelligence Theory",
                  description:
                    "Based on Daniel Goleman's groundbreaking research and the four domains of emotional intelligence: self-awareness, self-management, social awareness, and relationship management.",
                },
                {
                  title: "Cognitive Behavioral Science",
                  description:
                    "Incorporates CBT principles to help users identify thought patterns, emotional triggers, and develop healthier coping mechanisms through structured interventions.",
                },
                {
                  title: "Positive Psychology",
                  description:
                    "Leverages Martin Seligman's PERMA model (Positive emotions, Engagement, Relationships, Meaning, Achievement) to foster well-being and resilience.",
                },
                {
                  title: "Neuroscience Research",
                  description:
                    "Utilizes findings from affective neuroscience to understand how emotions are processed in the brain and how they can be effectively regulated.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-purple-100/50">
                <div className="grid grid-cols-2 gap-8">
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    whileHover={{ y: -8 }}
                  >
                    <Brain className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-base text-slate-900">AI Twin</h4>
                    <p className="text-xs text-slate-600 mt-2">Personal companion</p>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    whileHover={{ y: -8 }}
                  >
                    <BookOpen className="h-10 w-10 text-pink-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-base text-slate-900">Living Diary</h4>
                    <p className="text-xs text-slate-600 mt-2">Smart journaling</p>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    whileHover={{ y: -8 }}
                  >
                    <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-base text-slate-900">Mentor</h4>
                    <p className="text-xs text-slate-600 mt-2">24/7 guidance</p>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    whileHover={{ y: -8 }}
                  >
                    <Target className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-base text-slate-900">Recommender</h4>
                    <p className="text-xs text-slate-600 mt-2">Smart suggestions</p>
                  </motion.div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200">
                  <motion.path
                    d="M 75 75 Q 150 50 225 75"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                  <motion.path
                    d="M 75 125 Q 150 150 225 125"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              AI Architecture
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Agentic AI Ecosystem</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our revolutionary multi-agent architecture creates a personalized emotional intelligence ecosystem that
              evolves with you, providing comprehensive support across all aspects of emotional growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* AI Twin - Large card */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 lg:row-span-2">
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-xl group overflow-hidden bg-gradient-to-br from-white to-purple-50/50">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Brain className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">AI Twin</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    Your unique emotional intelligence companion that learns and evolves with you. The AI Twin
                    understands your emotional patterns, triggers, and growth areas to provide personalized guidance.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Adaptive Learning Algorithm</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">24/7 Emotional Support</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Pattern Recognition</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Other agent cards */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:scale-[1.02] bg-gradient-to-br from-white to-pink-50/50">
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">Living Diary</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Intelligent journaling with emotional pattern recognition and AI-powered insights for deeper
                    self-understanding.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/50">
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">Mentor Agent</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    24/7 coaching support with personalized guidance tailored to your unique growth journey and goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:scale-[1.02] bg-gradient-to-br from-white to-green-50/50">
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">Recommender</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    AI-powered suggestions for activities, exercises, and growth opportunities based on your progress.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50/50">
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">Gamification</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Engaging challenges and rewards that make emotional growth enjoyable and sustainable long-term.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              Platform Features
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Comprehensive EQ Development</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every feature is designed to accelerate your emotional intelligence development through personalized AI
              interactions, gamified experiences, and measurable progress tracking.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Large feature card */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 lg:row-span-2">
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-xl group overflow-hidden bg-gradient-to-br from-white to-purple-50/50">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Brain className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Personalized AI Twin</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    Your unique emotional intelligence companion that learns and evolves with you. The AI Twin
                    understands your emotional patterns, triggers, and growth areas to provide personalized guidance and
                    support.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Adaptive Learning</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">24/7 Availability</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Pattern Recognition</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Personalized Insights</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Smaller feature cards */}
            {[
              {
                icon: BookOpen,
                title: "Living Diary",
                description: "Intelligent journaling with emotional pattern recognition and AI-powered insights",
                gradient: "from-pink-500 to-purple-500",
                bgGradient: "from-white to-pink-50/50",
              },
              {
                icon: Users,
                title: "Mentor Agent",
                description: "24/7 coaching support with personalized guidance tailored to your growth journey",
                gradient: "from-blue-500 to-purple-500",
                bgGradient: "from-white to-blue-50/50",
              },
              {
                icon: Target,
                title: "Smart Recommender",
                description: "AI-powered suggestions for activities, exercises, and growth opportunities",
                gradient: "from-green-500 to-purple-500",
                bgGradient: "from-white to-green-50/50",
              },
              {
                icon: Zap,
                title: "Gamified Learning",
                description: "Engaging challenges and rewards that make emotional growth enjoyable and sustainable",
                gradient: "from-orange-500 to-purple-500",
                bgGradient: "from-white to-orange-50/50",
              },
              {
                icon: TrendingUp,
                title: "Progress Analytics",
                description: "Detailed insights and metrics to track your emotional intelligence development",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-white to-indigo-50/50",
              },
              {
                icon: MessageSquare,
                title: "Multimodal Insights",
                description: "Text, voice, and behavioral analysis for comprehensive emotional understanding",
                gradient: "from-teal-500 to-purple-500",
                bgGradient: "from-white to-teal-50/50",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:scale-[1.02] bg-gradient-to-br ${feature.bgGradient}`}
                >
                  <CardHeader className="pb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              Business Impact
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Transforming Lives & Organizations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our platform delivers measurable results across diverse user groups, from individual professionals to
              large organizations seeking to enhance team emotional intelligence.
            </p>
          </motion.div>

          {/* Target Users */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: GraduationCap,
                title: "Students",
                description: "Academic success through emotional resilience",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: Briefcase,
                title: "Professionals",
                description: "Career advancement via leadership skills",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: Users,
                title: "Teams",
                description: "Enhanced collaboration and communication",
                gradient: "from-green-500 to-purple-500",
              },
              {
                icon: Globe,
                title: "Organizations",
                description: "Culture transformation and productivity gains",
                gradient: "from-pink-500 to-purple-500",
              },
            ].map((user, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-8 h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:scale-[1.02] bg-gradient-to-br from-white to-purple-50/30">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${user.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <user.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-4 font-bold text-slate-900">{user.title}</CardTitle>
                  <p className="text-slate-600 text-sm leading-relaxed">{user.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Statistics */}
          <motion.div
            className="grid md:grid-cols-3 gap-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 shadow-xl"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                stat: "85%",
                title: "Improved Self-Awareness",
                description: "Users report significant improvements in understanding their emotions and triggers",
              },
              {
                stat: "92%",
                title: "Better Relationships",
                description: "Enhanced empathy and social skills in personal and professional settings",
              },
              {
                stat: "78%",
                title: "Career Advancement",
                description: "Users experience improved leadership capabilities and workplace performance",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <motion.div
                  className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {item.stat}
                </motion.div>
                <div className="text-xl font-semibold text-slate-900 mb-4">{item.title}</div>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-28 px-6 bg-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-purple-800/80 backdrop-blur-md px-6 py-3 rounded-full mb-10 border border-purple-400/30"
              {...floatingAnimation}
            >
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">Join the EQ Revolution</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 text-balance leading-tight tracking-tight">
              Ready to Transform Your Emotional Intelligence?
            </h2>

            <p className="text-xl md:text-2xl text-purple-100 mb-16 max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
              Join thousands of users who are already experiencing the power of AI-driven emotional intelligence
              development. Start your transformative journey today.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-purple-50 px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-white/30 transition-all duration-300 group rounded-2xl"
                >
                  Start Your Journey
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/40 hover:border-white/60 text-white hover:bg-white/15 px-12 py-6 text-xl font-semibold transition-all duration-300 bg-transparent rounded-2xl backdrop-blur-sm"
              >
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-10 text-center" variants={staggerContainer}>
              {[
                { icon: Shield, text: "Privacy Protected" },
                { icon: Award, text: "Science-Backed" },
                { icon: Users, text: "Community Driven" },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-center justify-center space-x-3">
                  <item.icon className="h-6 w-6 text-purple-200" />
                  <span className="text-purple-200 font-semibold text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold">EQ Platform</span>
          </div>
          <p className="text-slate-400 mb-8 text-lg font-medium max-w-2xl mx-auto">
            Transforming emotional intelligence through science-backed AI technology.
          </p>
          <div className="flex justify-center space-x-12 text-slate-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
