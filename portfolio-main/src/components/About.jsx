import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightBulb, HiCode, HiServer, HiAcademicCap } from 'react-icons/hi'

const features = [
  {
    icon: HiLightBulb,
    title: 'Problem Solver',
    desc: '200+ DSA problems solved across platforms. I break down complex challenges into elegant, scalable solutions.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    icon: HiCode,
    title: 'AI Enthusiast',
    desc: 'Building AI-powered products using Gemini API, Google AI Studio, and NLP — turning intelligence into real features.',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.15)',
  },
  {
    icon: HiServer,
    title: 'Backend Engineer',
    desc: 'Architecting scalable REST APIs and microservices with Spring Boot, PostgreSQL, and cloud-native tooling.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
  },
  {
    icon: HiAcademicCap,
    title: 'Fast Learner',
    desc: 'Completed Google Gen AI Study Jam 2024 — hands-on experience with Gemini models, Google AI Studio, and real-world Generative AI applications.',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-card p-5 flex flex-col gap-3 group cursor-default transition-all duration-300"
      style={{
        background: 'rgba(10,10,10,0.7)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: feature.glow,
          border: `1px solid ${feature.color}30`,
        }}
      >
        <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
      </div>
      <div>
        <h3 className="font-display font-semibold text-white/90 text-sm mb-1.5">{feature.title}</h3>
        <p className="text-white/45 text-xs leading-relaxed">{feature.desc}</p>
      </div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${feature.glow}, transparent 70%)`,
        }}
      />
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">Who I am</p>
          <h2 className="section-heading glow-text-white mb-4">About Me</h2>
          <div className="w-12 h-0.5 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Profile card */}
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(59,130,246,0.06)' }}
              />

              {/* Avatar / initial monogram */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl font-bold font-display"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.15))',
                    border: '1px solid rgba(59,130,246,0.25)',
                    color: '#93c5fd',
                    boxShadow: '0 0 30px rgba(59,130,246,0.15)',
                  }}
                >
                  AS
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white/90 text-lg">Aditya Srivastava</h3>
                  <p className="text-white/45 text-sm mt-0.5">Java Full Stack Developer · AI Builder</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400/70 text-xs">Available for opportunities</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-white/55 text-sm leading-relaxed">
                <p>
                  I'm a <span className="text-white/85 font-medium">Java Full Stack Developer</span> passionate about
                  building scalable backend systems and AI-powered products. My work sits at the intersection of
                  robust engineering and modern product thinking.
                </p>
                <p>
                  I specialize in designing and building <span className="text-white/85 font-medium">RESTful APIs</span>,
                  microservice architectures with <span className="text-white/85 font-medium">Spring Boot</span>, and
                  integrating cutting-edge AI capabilities via <span className="text-white/85 font-medium">Gemini API</span> and
                  Google AI Studio to solve real-world problems.
                </p>
                <p>
                  Beyond code, I believe in <span className="text-white/85 font-medium">clean architecture</span>,
                  thoughtful API design, and writing systems that scale gracefully — and I actively contribute
                  to the developer community.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Spring Boot', 'React', 'AI Integration', 'REST APIs', 'PostgreSQL', 'Docker', 'Clean Architecture'].map(tag => (
                  <span key={tag} className="badge text-xs">{tag}</span>
                ))}
              </div>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '200+', label: 'DSA Problems', sub: 'Solved' },
                { value: '4★', label: 'HackerRank', sub: 'Rating' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="font-display font-bold text-2xl glow-text-blue">{s.value}</div>
                  <div className="text-white/50 text-xs mt-1">{s.label}</div>
                  <div className="text-white/30 text-xs">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
