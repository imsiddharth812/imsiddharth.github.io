import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import FloatingCube from './3D/FloatingCube'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#d946ef" />
            
            {/* Floating 3D Elements */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <FloatingCube position={[-4, 2, -2]} />
            </Float>
            <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
              <FloatingCube position={[4, -1, -3]} scale={0.8} />
            </Float>
            <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.5}>
              <FloatingCube position={[2, 3, -4]} scale={0.6} />
            </Float>
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          className="text-primary-400 text-lg md:text-xl mb-4 font-medium"
          variants={itemVariants}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="gradient-text">QA Engineer</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-xl md:text-3xl lg:text-4xl text-white/90 mb-8 font-light"
          variants={itemVariants}
        >
          Quality Assurance Professional
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Passionate about ensuring software quality through comprehensive testing strategies, 
          automation frameworks, and innovative QA methodologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="btn-primary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </motion.button>
          
          <motion.button
            className="btn-secondary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <IconComponent className="w-5 h-5 group-hover:text-primary-400 transition-colors" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className="animate-bounce"
          onClick={scrollToNext}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="w-6 h-6 text-white/50 hover:text-primary-400 transition-colors duration-300" />
        </motion.button>
      </motion.div>

      {/* Floating Stats */}
      <motion.div
        className="absolute bottom-8 left-8 glass-effect rounded-2xl p-6 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text">5+</div>
          <div className="text-sm text-white/70">Years Experience</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 glass-effect rounded-2xl p-6 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text">100+</div>
          <div className="text-sm text-white/70">Projects Tested</div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero