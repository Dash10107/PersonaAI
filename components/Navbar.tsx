"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <motion.header
      className="border-b border-purple-100/60 bg-white/98 backdrop-blur-xl supports-[backdrop-filter]:bg-white/98 sticky top-0 z-50 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            EQ Platform
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/#mission"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/" ? "text-purple-600" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Mission
          </Link>
          <Link
            href="/#architecture"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/" ? "text-purple-600" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Architecture
          </Link>
          <Link
            href="/#features"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/" ? "text-purple-600" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Features
          </Link>
          <Link
            href="/#impact"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/" ? "text-purple-600" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Impact
          </Link>
          <Link
            href="/agents"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/agents" ? "text-purple-600 font-semibold" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Agents & Tools
          </Link>
          <Link
            href="/dashboard"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/dashboard" ? "text-purple-600 font-semibold" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Live Demo
          </Link>
          <Link
            href="/face"
            className={`transition-colors font-medium text-sm tracking-wide ${
              pathname === "/face" ? "text-purple-600 font-semibold" : "text-slate-700 hover:text-purple-600"
            }`}
          >
            Face Analysis
          </Link>
        </nav>
        
        <Link href="/dashboard">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-2.5 font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-sm">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.header>
  );
}
