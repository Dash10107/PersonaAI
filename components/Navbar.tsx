"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <motion.header
      className="border-b border-purple-100/60 bg-white/98 backdrop-blur-xl supports-[backdrop-filter]:bg-white/98 sticky top-0 z-50 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              EQ Platform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
            <Link
              href="https://framevr.io/zenithai"
              className={`transition-colors font-medium text-sm tracking-wide ${
                pathname === "/face" ? "text-purple-600 font-semibold" : "text-slate-700 hover:text-purple-600"
              }`}
            >
              AR Meditation
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/dashboard">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-sm">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 border-t border-purple-100/60 pt-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/#mission"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/" ? "text-purple-600 bg-purple-50" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Mission
                </Link>
                <Link
                  href="/#architecture"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/" ? "text-purple-600 bg-purple-50" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Architecture
                </Link>
                <Link
                  href="/#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/" ? "text-purple-600 bg-purple-50" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Features
                </Link>
                <Link
                  href="/#impact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/" ? "text-purple-600 bg-purple-50" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Impact
                </Link>
                <Link
                  href="/agents"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/agents" ? "text-purple-600 bg-purple-50 font-semibold" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Agents & Tools
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/dashboard" ? "text-purple-600 bg-purple-50 font-semibold" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Live Demo
                </Link>
                <Link
                  href="/face"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/face" ? "text-purple-600 bg-purple-50 font-semibold" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Face Analysis
                </Link>
                <Link
                  href="https://framevr.io/zenithai"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    pathname === "/face" ? "text-purple-600 bg-purple-50 font-semibold" : "text-slate-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  AR Meditation
                </Link>
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-purple-100/60">
                  <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
