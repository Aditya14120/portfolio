import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const profiles = [
  {
    platform: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Aditya14120',
    username: '@Aditya14120',
    accentColor: '#e2e8f0',
    stats: [
      { label: 'Repositories', value: '15+' },
      { label: 'Languages', value: '5+' },
      { label: 'Contributions', value: 'Active' },
    ],
    activity: [4,2,6,8,3,5,7,9,4,3,6,7,8,5,4,3,7,6,5,8,4,3,6,9,7,5,4,8,6,3,5,4,7,8,6,3,5,4,7,6,5,8,4,3,6],
    description: 'Open source projects and contributions',
  },
  {
    platform: 'LeetCode',
    icon: SiLeetcode,
    url: 'https://leetcode.com/u/a72683020/',
    username: 'a72683020',
    accentColor: '#ffa116',
    stats: [
      { label: 'Problems Solved', value: '200+' },
      { label: 'Contest Rating', value: 'Active' },
      { label: 'Acceptance', value: '~65%' },
    ],
    breakdown: [
      { level: 'Easy', count: 90, color: '#22c55e', pct: 45 },
      { level: 'Medium', count: 90, color: '#ffa116', pct: 45 },
      { level: 'Hard', count: 20, color: '#ef4444', pct: 10 },
    ],
    description: 'Data structures & algorithm challenges',
  },
  {
    platform: 'HackerRank',
    icon: SiHackerrank,
    url: 'https://www.hackerrank.com/profile/a72683020',
    username: 'a72683020',
    accentColor: '#2ec866',
    stats: [
      { label: 'Problem Solving', value: '4★' },
      { label: 'Java', value: '5★' },
      { label: 'Certificates', value: 'Earned' },
    ],
    stars: [
      { domain: 'Problem Solving', stars: 4 },
      { domain: 'Java', stars: 5 },
      { domain: 'SQL', stars: 3 },
    ],
    description: 'Skill certifications and rated challenges',
  },
]

function ActivityGraph({ data, color }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-0.5 h-10">
      {data.map((val, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${(val / max) * 100}%`,
            minHeight: 2,
            background: `${color}`,
            opacity: 0.15 + (val / max) * 0.7,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: i * 0.01 }}
        />
      ))}
    </div>
  )
}

function StarRow({ domain, stars, color }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/45 text-xs">{domain}</span>
      <div className="flex items-center gap-0.5">
        {[1,2,3,4,5].map(s => (
          <span key={s} className="text-sm" style={{ opacity: s <= stars ? 1 : 0.2 }}>
            {'★'}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProfileCard({ profile, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass-card p-6 flex flex-col gap-5 relative overflow-hidden group h-full"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${profile.accentColor}08, transparent 60%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${profile.accentColor}50, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${profile.accentColor}12`, border: `1px solid ${profile.accentColor}25` }}
          >
            <profile.icon className="w-5 h-5" style={{ color: profile.accentColor }} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-white/90 text-sm">{profile.platform}</h3>
            <p className="text-white/35 text-xs">{profile.username}</p>
          </div>
        </div>
        <motion.a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 transition-all duration-300"
          style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
          whileHover={{ color: profile.accentColor, borderColor: `${profile.accentColor}40`, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt className="w-3 h-3" />
        </motion.a>
      </div>

      {/* Description */}
      <p className="text-white/35 text-xs">{profile.description}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {profile.stats.map(s => (
          <div key={s.label} className="text-center p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="font-display font-bold text-sm" style={{ color: profile.accentColor }}>{s.value}</div>
            <div className="text-white/30 text-xs mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Platform-specific visual */}
      {profile.activity && (
        <div>
          <p className="text-white/25 text-xs mb-2">Contribution Activity</p>
          <ActivityGraph data={profile.activity} color={profile.accentColor} />
        </div>
      )}

      {profile.breakdown && (
        <div className="flex flex-col gap-2">
          <p className="text-white/25 text-xs mb-1">Problem Breakdown</p>
          {profile.breakdown.map(b => (
            <div key={b.level}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span style={{ color: b.color }}>{b.level}</span>
                <span className="text-white/40">{b.count}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: b.color, width: 0 }}
                  animate={inView ? { width: `${b.pct}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {profile.stars && (
        <div className="flex flex-col gap-2">
          <p className="text-white/25 text-xs mb-1">Skill Ratings</p>
          {profile.stars.map(s => (
            <StarRow key={s.domain} domain={s.domain} stars={s.stars} color={profile.accentColor} />
          ))}
        </div>
      )}

      {/* CTA */}
      <motion.a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 mt-auto"
        style={{
          background: `${profile.accentColor}08`,
          border: `1px solid ${profile.accentColor}20`,
          color: `${profile.accentColor}cc`,
        }}
        whileHover={{
          background: `${profile.accentColor}15`,
          borderColor: `${profile.accentColor}40`,
        }}
      >
        View Profile
        <FaExternalLinkAlt className="w-2.5 h-2.5" />
      </motion.a>
    </motion.div>
  )
}

export default function CodingProfiles() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="profiles" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">Competitive Programming</p>
          <h2 className="section-heading glow-text-white mb-4">Coding Profiles</h2>
          <p className="section-subheading max-w-md mx-auto">
            Track record across competitive programming and developer platforms
          </p>
          <div className="w-12 h-0.5 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <ProfileCard key={profile.platform} profile={profile} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
