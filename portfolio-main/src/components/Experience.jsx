import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'
import { SiSpring } from 'react-icons/si'

const experiences = [
  {
    role: 'Java Developer Intern',
    company: 'Cloudcredits Technologies',
    period: 'May 2025 – July 2025',
    location: 'Remote',
    type: 'Internship',
    icon: SiSpring,
    accentColor: '#6db33f',
    responsibilities: [
      'Built scalable Java Spring Boot backend systems with clean layered architecture',
      'Designed and implemented RESTful APIs serving mobile and web clients',
      'Improved API response performance by optimizing database queries and caching strategies',
      'Participated in Agile sprint cycles — planning, standups, retrospectives',
      'Delivered production-ready backend services integrated with CI/CD pipelines',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Agile', 'PostgreSQL'],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center z-10 relative"
          style={{
            background: `${exp.accentColor}15`,
            border: `1px solid ${exp.accentColor}35`,
            boxShadow: `0 0 20px ${exp.accentColor}20`,
          }}
        >
          <exp.icon className="w-5 h-5" style={{ color: exp.accentColor }} />
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-px flex-1 min-h-full origin-top"
          style={{
            background: `linear-gradient(to bottom, ${exp.accentColor}40, transparent)`,
            marginTop: 4,
          }}
        />
      </div>

      {/* Card */}
      <div
        className="glass-card p-6 sm:p-8 mb-6 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        style={{ marginLeft: 8 }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `${exp.accentColor}06` }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(to right, transparent, ${exp.accentColor}50, transparent)` }}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: `${exp.accentColor}12`,
                  border: `1px solid ${exp.accentColor}25`,
                  color: exp.accentColor,
                }}
              >
                {exp.type}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white/95">{exp.role}</h3>
            <p className="text-blue-soft/80 font-medium text-sm mt-0.5">{exp.company}</p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-white/40">
            <div className="flex items-center gap-1.5">
              <HiCalendar className="w-3.5 h-3.5" />
              {exp.period}
            </div>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="w-3.5 h-3.5" />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="flex flex-col gap-2.5 mb-5">
          {exp.responsibilities.map((resp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex items-start gap-2.5"
            >
              <HiCheckCircle
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: `${exp.accentColor}80` }}
              />
              <span className="text-white/55 text-sm leading-relaxed">{resp}</span>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">Work History</p>
          <h2 className="section-heading glow-text-white mb-4">Experience</h2>
          <p className="section-subheading max-w-md mx-auto">
            Professional experience building production-grade backend systems
          </p>
          <div className="w-12 h-0.5 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}

          {/* "Future" node */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pl-10 sm:pl-14"
          >
            <div className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.1)' }}
            >
              <span className="text-white/20 text-lg">+</span>
            </div>
            <div className="ml-2 py-3 px-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.06)' }}
            >
              <p className="text-white/25 text-sm">Next chapter — open to exciting opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
