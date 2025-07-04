import React from 'react'
import { motion } from 'framer-motion'

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-60 right-20 w-96 h-96 bg-gradient-to-r from-accent-500/15 to-primary-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence baseFrequency="0.9" numOctaves="1" result="noise" seed="2" />
            <feColorMatrix in="noise" type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  )
}

export default BackgroundElements