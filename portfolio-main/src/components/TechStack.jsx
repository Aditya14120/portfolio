import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  SiJavascript, SiPython,
  SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiSpring, SiHibernate, SiNodedotjs,
  SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiApachekafka,
  SiGoogle,
} from 'react-icons/si'
import { FaDatabase, FaCode, FaServer, FaTools, FaBrain, FaLayerGroup, FaJava, FaMicrosoft } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const categories = [
  {
    id: 'all',
    label: 'All',
    icon: FaLayerGroup,
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: HiCode,
    color: '#f59e0b',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820', level: 95 },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 85 },
      { name: 'Python', icon: SiPython, color: '#3776ab', level: 75 },
      { name: 'SQL', icon: FaDatabase, color: '#60a5fa', level: 88 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: FaCode,
    color: '#60a5fa',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61dafb', level: 88 },
      { name: 'HTML', icon: SiHtml5, color: '#e34f26', level: 95 },
      { name: 'CSS', icon: SiCss, color: '#1572b6', level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 85 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: FaServer,
    color: '#a78bfa',
    skills: [
      { name: 'Spring Boot', icon: SiSpring, color: '#6db33f', level: 92 },
      { name: 'Spring Security', icon: SiSpring, color: '#6db33f', level: 85 },
      { name: 'Hibernate', icon: SiHibernate, color: '#59666c', level: 82 },
      { name: 'REST APIs', icon: FaServer, color: '#a78bfa', level: 93 },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 75 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: FaDatabase,
    color: '#34d399',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 88 },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1', level: 85 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: FaTools,
    color: '#fb923c',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed', level: 78 },
      { name: 'Git', icon: SiGit, color: '#f05032', level: 90 },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 92 },
      { name: 'Azure', icon: FaMicrosoft, color: '#0078d4', level: 70 },
      { name: 'Apache Kafka', icon: SiApachekafka, color: '#231f20', level: 65 },
    ],
  },
  {
    id: 'ai',
    label: 'AI / APIs',
    icon: FaBrain,
    color: '#f472b6',
    skills: [
      { name: 'Gemini API', icon: SiGoogle, color: '#4285f4', level: 85 },
      { name: 'Google AI Studio', icon: SiGoogle, color: '#34a853', level: 82 },
      { name: 'NLP', icon: FaBrain, color: '#f472b6', level: 75 },
    ],
  },
]

function SkillCard({ skill, index, categoryColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -3, scale: 1.04 }}
      className="tech-card relative overflow-hidden group"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}15, transparent 70%)` }}
      />
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
      >
        <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
      </div>
      <span className="text-white/70 text-xs font-medium text-center leading-tight group-hover:text-white/90 transition-colors">
        {skill.name}
      </span>
      {/* Hover skill bar - uses CSS group-hover so it responds to parent card hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
        <div
          className="h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}80)` }}
        />
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const [active, setActive] = useState('all')
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const allSkills = categories.slice(1).flatMap(c => c.skills.map(s => ({ ...s, categoryColor: c.color })))
  const displaySkills = active === 'all'
    ? allSkills
    : (categories.find(c => c.id === active)?.skills || []).map(s => ({ ...s, categoryColor: categories.find(c => c.id === active)?.color }))

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">My Toolkit</p>
          <h2 className="section-heading glow-text-white mb-4">Tech Stack</h2>
          <p className="section-subheading max-w-md mx-auto">
            Technologies I use to build scalable systems and intelligent applications
          </p>
          <div className="w-12 h-0.5 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300"
              style={{
                background: active === cat.id ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                border: active === cat.id ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.06)',
                color: active === cat.id ? '#93c5fd' : 'rgba(255,255,255,0.5)',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {displaySkills.map((skill, i) => (
              <SkillCard key={`${skill.name}-${active}`} skill={skill} index={i} categoryColor={skill.categoryColor} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/25 text-xs mt-10"
        >
          Always exploring new technologies and tools
        </motion.p>
      </div>
    </section>
  )
}
