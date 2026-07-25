import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiSparkles, HiCode, HiChip } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'CodeSensei',
    subtitle: 'AI-Powered Code Analysis Platform',
    description:
      'An intelligent code analysis platform that detects bugs, code smells, and performance bottlenecks while generating deep contextual improvement suggestions powered by Google Gemini AI.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Gemini API', 'React'],
    githubFrontend: 'https://github.com/Aditya14120/codesensei-frontend',
    githubBackend: 'https://github.com/Aditya14120/codesensei-backend.git',
    highlights: [
      { icon: HiSparkles, text: 'AI-powered code suggestions' },
      { icon: HiCode, text: 'Code smell detection' },
      { icon: HiChip, text: 'Performance bottleneck analysis' },
    ],
    tags: ['AI', 'Backend', 'Full Stack'],
    accentColor: '#3b82f6',
    gradientFrom: 'rgba(59,130,246,0.08)',
    gradientTo: 'rgba(124,58,237,0.04)',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Resume Analyzer',
    subtitle: 'ATS-Optimized Resume Intelligence',
    description:
      'An intelligent resume analysis platform using ATS scoring algorithms, NLP-based keyword optimization, and AI-generated improvement suggestions to help candidates stand out in automated screening.',
    tech: ['React', 'Spring Boot', 'Node.js', 'Google AI Studio API', 'NLP', 'MySQL'],
    github: 'https://github.com/Aditya14120/resume-analyzer-backend.git',
    highlights: [
      { icon: HiChip, text: 'ATS compatibility scoring' },
      { icon: HiSparkles, text: 'NLP keyword optimization' },
      { icon: HiCode, text: 'Real-time AI suggestions' },
    ],
    tags: ['AI', 'NLP', 'Full Stack'],
    accentColor: '#a78bfa',
    gradientFrom: 'rgba(167,139,250,0.08)',
    gradientTo: 'rgba(59,130,246,0.04)',
    featured: true,
  },
  {
    id: 3,
    title: 'CareerPilot',
    subtitle: 'AI-Powered Career Guidance Platform',
    description: 'Built a full-stack AI-powered career guidance platform enabling secure authentication, resume analysis, and personalized career guidance.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Groq API'],
    githubFrontend: 'https://github.com/Aditya14120/careerpilot-frontend',
    githubBackend: 'https://github.com/Aditya14120/careerpilot-backend',
    liveDemo: 'https://career-pilo.netlify.app/#features',
    highlights: [
      { icon: HiSparkles, text: 'Personalized career roadmaps' },
      { icon: HiCode, text: 'AI-driven skill extraction' },
      { icon: HiChip, text: 'Role-based authentication' },
    ],
    tags: ['AI', 'Full Stack', 'Backend'],
    accentColor: '#10b981',
    gradientFrom: 'rgba(16,185,129,0.08)',
    gradientTo: 'rgba(59,130,246,0.04)',
    featured: true,
  },
]

function TechBadge({ name }) {
  return (
    <span
      className="px-2.5 py-1 rounded-lg text-xs font-medium"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: 'rgba(255,255,255,0.55)',
      }}
    >
      {name}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl h-full transition-all duration-500 group-hover:-translate-y-1"
        style={{
          background: 'rgba(8,8,8,0.9)',
          border: `1px solid rgba(255,255,255,0.07)`,
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.border = `1px solid ${project.accentColor}30`
          e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${project.accentColor}12`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
        }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, ${project.gradientFrom}, transparent 60%)`,
          }}
        />

        {/* Animated border line */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(to right, transparent, ${project.accentColor}60, transparent)` }}
        />

        {/* Content */}
        <div className="relative p-7 flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                {project.featured && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}30`,
                      color: project.accentColor,
                    }}
                  >
                    Featured
                  </span>
                )}
                <div className="flex gap-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-white/25 font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-white/95 tracking-tight">{project.title}</h3>
              <p className="text-white/40 text-xs font-medium">{project.subtitle}</p>
            </div>

            {/* Project icon */}
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{
                background: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}25`,
              }}
            >
              <HiSparkles className="w-5 h-5" style={{ color: project.accentColor }} />
            </div>
          </div>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>

          {/* Highlights */}
          <div className="flex flex-col gap-2">
            {project.highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-xs text-white/45">
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: project.accentColor }} />
                {text}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

          {/* Tech stack */}
          <div>
            <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => <TechBadge key={t} name={t} />)}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-1 flex-wrap">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.65)',
                }}
                whileHover={{
                  scale: 1.03,
                  color: 'rgba(255,255,255,0.9)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.08)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub className="w-3.5 h-3.5" />
                GitHub
              </motion.a>
            )}
            {project.githubFrontend && (
              <motion.a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.65)',
                }}
                whileHover={{
                  scale: 1.03,
                  color: 'rgba(255,255,255,0.9)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.08)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub className="w-3.5 h-3.5" />
                Frontend
              </motion.a>
            )}
            {project.githubBackend && (
              <motion.a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.65)',
                }}
                whileHover={{
                  scale: 1.03,
                  color: 'rgba(255,255,255,0.9)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.08)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub className="w-3.5 h-3.5" />
                Backend
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  color: '#93c5fd',
                }}
                whileHover={{
                  scale: 1.03,
                  color: '#bfdbfe',
                  borderColor: 'rgba(59,130,246,0.4)',
                  background: 'rgba(59,130,246,0.15)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="section-heading glow-text-white mb-4">Featured Projects</h2>
          <p className="section-subheading max-w-md mx-auto">
            Production-grade applications built with modern engineering practices and AI capabilities
          </p>
          <div className="w-12 h-0.5 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/Aditya14120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 btn-secondary text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="w-4 h-4" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
