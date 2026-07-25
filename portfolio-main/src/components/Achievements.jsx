import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { HiStar, HiAcademicCap, HiLightningBolt } from 'react-icons/hi'
import { SiGoogle } from 'react-icons/si'

const achievements = [
  {
    icon: HiStar,
    title: 'HackerRank 4-Star',
    category: 'Problem Solving',
    description: 'Achieved 4-star rating in Problem Solving on HackerRank, demonstrating advanced algorithmic thinking and data structure mastery.',
    accentColor: '#ffa116',
    glow: 'rgba(255,161,22,0.12)',
    metric: '4★',
    metricLabel: 'Rating',
    link: 'https://www.hackerrank.com/profile/a72683020',
  },
  {
    icon: SiGoogle,
    title: 'Google Gen AI Study Jam',
    category: 'Certification — 2024',
    description: 'Completed Google Gen AI Study Jam 2024, gaining hands-on experience with Generative AI tools, Gemini models, and Google AI Studio.',
    accentColor: '#4285f4',
    glow: 'rgba(66,133,244,0.12)',
    metric: '2024',
    metricLabel: 'Cohort',
    link: '#',
  },
  {
    icon: HiLightningBolt,
    title: 'AI Product Builder',
    category: 'Engineering',
    description: 'Built multiple production-grade AI-powered applications integrating Gemini API and Google AI Studio for real-world use cases.',
    accentColor: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
    metric: '2+',
    metricLabel: 'AI Apps',
    link: '#',
  },
]

function AchievementCard({ achievement, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="glass-card p-6 relative overflow-hidden group cursor-default flex flex-col gap-4"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 20% 20%, ${achievement.glow}, transparent 60%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${achievement.accentColor}50, transparent)` }}
      />

      {/* Top row: icon + metric */}
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: achievement.glow,
            border: `1px solid ${achievement.accentColor}30`,
          }}
        >
          <achievement.icon className="w-5 h-5" style={{ color: achievement.accentColor }} />
        </div>
        <div className="text-right">
          <div
            className="font-display font-bold text-2xl leading-none"
            style={{ color: achievement.accentColor }}
          >
            {achievement.metric}
          </div>
          <div className="text-white/30 text-xs mt-0.5">{achievement.metricLabel}</div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="text-white/30 text-xs font-medium tracking-wider uppercase mb-1.5">{achievement.category}</div>
        <h3 className="font-display font-semibold text-white/90 text-base mb-2 leading-tight">{achievement.title}</h3>
        <p className="text-white/45 text-xs leading-relaxed">{achievement.description}</p>
      </div>

      {/* Bottom */}
      {achievement.link !== '#' && (
        <motion.a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium mt-auto w-fit transition-all duration-300"
          style={{ color: `${achievement.accentColor}80` }}
          whileHover={{ color: achievement.accentColor, x: 2 }}
        >
          View credential →
        </motion.a>
      )}
    </motion.div>
  )
}

export default function Achievements() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.04), transparent)' }}
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
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="section-heading glow-text-white mb-4">Achievements</h2>
          <p className="section-subheading max-w-md mx-auto">
            Milestones, certifications, and contributions that define my journey
          </p>
          <div className="w-12 h-0.5 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement, i) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
