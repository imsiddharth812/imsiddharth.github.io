import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Target, Users, TrendingUp, Award, Heart } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const stats = [
    { number: "500+", label: "Bugs Found", icon: CheckCircle },
    { number: "99.9%", label: "Accuracy Rate", icon: Target },
    { number: "50+", label: "Team Projects", icon: Users },
    { number: "15+", label: "Tools Mastered", icon: TrendingUp }
  ]

  const values = [
    {
      title: "Quality First",
      description: "Every line of code, every feature, every user interaction - quality is non-negotiable.",
      icon: Award,
      color: "from-primary-500 to-blue-600"
    },
    {
      title: "Continuous Learning",
      description: "Staying ahead of testing trends, tools, and methodologies in the ever-evolving tech landscape.",
      icon: TrendingUp,
      color: "from-accent-500 to-purple-600"
    },
    {
      title: "User Empathy",
      description: "Understanding that behind every test case is a real user with real needs and expectations.",
      icon: Heart,
      color: "from-pink-500 to-red-600"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A passionate QA Engineer dedicated to ensuring software excellence through innovative testing strategies 
            and comprehensive quality assurance practices.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Story Card */}
          <motion.div
            className="lg:col-span-2 glass-effect rounded-3xl p-8 card-hover"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Started my career with a passion for breaking things (in a good way!). Over the years, 
                I've evolved from manual testing to building comprehensive automation frameworks that 
                scale with modern development practices.
              </p>
              <p>
                My expertise spans across functional testing, API testing, performance testing, and 
                test automation. I believe in shifting left with quality and making testing an integral 
                part of the development lifecycle.
              </p>
              <p>
                When I'm not hunting bugs, you'll find me exploring new testing tools, contributing to 
                QA communities, or mentoring junior testers.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="space-y-6"
            variants={cardVariants}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="glass-effect rounded-2xl p-6 card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={value.title}
                className="glass-effect rounded-3xl p-8 card-hover text-center"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 gradient-text">Fun Fact</h3>
            <p className="text-white/80 text-lg">
              I once found a critical bug 5 minutes before a major production deployment. 
              The fix saved the company from potential data loss affecting 10,000+ users! 🛡️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About