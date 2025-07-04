import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink, CheckCircle, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior QA Engineer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      logo: "TC", // In real app, this would be an image
      description: "Leading QA initiatives for a suite of enterprise applications serving 1M+ users. Architected comprehensive test automation frameworks that reduced testing time by 60% while improving coverage.",
      achievements: [
        "Designed and implemented CI/CD testing pipelines using Jenkins and Docker",
        "Led a team of 5 junior QA engineers and mentored 3 automation engineers",
        "Reduced production bugs by 75% through comprehensive regression testing strategies",
        "Established QA best practices and documentation standards across 4 development teams"
      ],
      technologies: ["Selenium", "Cypress", "TestNG", "Jenkins", "Docker", "AWS", "Jira", "Postman"]
    },
    {
      id: 2,
      company: "Digital Innovations Ltd",
      position: "QA Engineer",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      logo: "DI",
      description: "Responsible for end-to-end testing of mobile and web applications in an agile environment. Specialized in API testing and performance optimization for high-traffic applications.",
      achievements: [
        "Automated 80% of regression test suite using Selenium WebDriver and Python",
        "Implemented API testing framework using RestAssured and Postman",
        "Collaborated with development teams to establish shift-left testing practices",
        "Conducted performance testing and identified bottlenecks improving app speed by 40%"
      ],
      technologies: ["Selenium", "Python", "RestAssured", "JMeter", "Appium", "Git", "Agile/Scrum"]
    },
    {
      id: 3,
      company: "StartupTech Inc",
      position: "Junior QA Engineer",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      logo: "ST",
      description: "Started career in a fast-paced startup environment, gaining hands-on experience with manual testing, bug tracking, and quality assurance fundamentals.",
      achievements: [
        "Executed comprehensive manual testing for web and mobile applications",
        "Created detailed test cases and documentation for multiple product features",
        "Identified and reported 200+ bugs, ensuring 95% accuracy in bug reports",
        "Contributed to improving overall product quality and user experience"
      ],
      technologies: ["Manual Testing", "Jira", "TestRail", "Chrome DevTools", "SQL", "HTML/CSS"]
    }
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative companies, building robust testing frameworks 
            and ensuring software quality at scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Sidebar */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeExperience === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveExperience(index)}
                >
                  <div className={`glass-effect rounded-2xl p-6 ${
                    activeExperience === index 
                      ? 'ring-2 ring-primary-500 bg-primary-500/10' 
                      : 'hover:bg-white/5'
                  }`}>
                    <div className="flex items-center space-x-4">
                      {/* Company Logo */}
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{exp.logo}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-white">{exp.company}</h3>
                        <p className="text-primary-400 text-sm">{exp.position}</p>
                        <div className="flex items-center space-x-2 text-white/60 text-xs mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            className="lg:col-span-2"
            key={activeExperience}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="mb-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {experiences[activeExperience].position}
                    </h3>
                    <h4 className="text-xl text-white mb-2">
                      {experiences[activeExperience].company}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-white/70">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experiences[activeExperience].location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experiences[activeExperience].period}</span>
                      </div>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                        {experiences[activeExperience].type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed mb-8">
                  {experiences[activeExperience].description}
                </p>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h5 className="text-lg font-bold mb-4 gradient-text">Key Achievements</h5>
                  <div className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-bold mb-4 gradient-text">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Highlights */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Career Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Team Leadership",
                description: "Led cross-functional QA teams and mentored 10+ junior engineers",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: TrendingUp,
                title: "Process Improvement",
                description: "Reduced testing time by 60% through automation and optimization",
                color: "from-green-500 to-green-600"
              },
              {
                icon: CheckCircle,
                title: "Quality Excellence",
                description: "Maintained 99.9% accuracy in bug detection and reporting",
                color: "from-purple-500 to-purple-600"
              }
            ].map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  className="glass-effect rounded-2xl p-6 text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 gradient-text">{highlight.title}</h4>
                  <p className="text-white/70">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience