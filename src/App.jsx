import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import BackgroundElements from './components/BackgroundElements'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </motion.button>
    </div>
  )
}

export default App