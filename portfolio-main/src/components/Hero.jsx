import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { HiArrowRight } from 'react-icons/hi'

const roles = [
  'Java Full Stack Developer',
  'AI Systems Builder',
  'Backend Engineer',
  'Problem Solver',
]

const stats = [
  { value: '200+', label: 'DSA Problems Solved', icon: '⚡' },
  { value: '4★', label: 'HackerRank Rating', icon: '🏆' },
  { value: 'AI', label: 'Powered Applications', icon: '🤖' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/Aditya14120', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-srivastava-116632325', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/a72683020/', label: 'LeetCode' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/a72683020', label: 'HackerRank' },
]

function TypingText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing')
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = roles[index]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 60)
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), 1800)
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 400)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
      } else {
        setIndex((i) => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, phase, index])

  return (
    <span className="relative">
      <span
        style={{
          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {displayed}
      </span>
      <span
        className="inline-block w-0.5 h-8 ml-1 align-middle animate-blink"
        style={{ background: '#60a5fa', boxShadow: '0 0 8px #60a5fa' }}
      />
    </span>
  )
}

function WorkspaceIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-glow/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-glow/8 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-crimson-glow/5 rounded-full blur-2xl" />
      </div>

      {/* Main Desk Setup SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="relative w-full max-w-lg"
      >
        <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <radialGradient id="monitorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="screenGlow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c1c1c"/>
              <stop offset="100%" stopColor="#0a0a0a"/>
            </linearGradient>
            <linearGradient id="monitorFrame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a2a2a"/>
              <stop offset="100%" stopColor="#111111"/>
            </linearGradient>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glowStrong">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <clipPath id="screen1Clip">
              <rect x="62" y="50" width="200" height="140" rx="4"/>
            </clipPath>
            <clipPath id="screen2Clip">
              <rect x="278" y="70" width="160" height="120" rx="4"/>
            </clipPath>
          </defs>

          {/* Desk surface */}
          <rect x="20" y="290" width="480" height="18" rx="4" fill="url(#deskGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <rect x="30" y="305" width="460" height="8" rx="2" fill="rgba(255,255,255,0.02)"/>

          {/* Monitor 1 stand */}
          <rect x="145" y="245" width="6" height="48" rx="2" fill="#1a1a1a" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
          <rect x="120" y="287" width="56" height="6" rx="3" fill="#161616" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>

          {/* Monitor 1 frame */}
          <rect x="55" y="42" width="216" height="208" rx="8" fill="url(#monitorFrame)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

          {/* Monitor 1 screen background */}
          <rect x="62" y="50" width="200" height="140" rx="4" fill="#020712"/>
          <rect x="62" y="50" width="200" height="140" rx="4" fill="url(#screenGlow1)"/>

          {/* Screen 1 content - code editor */}
          <g clipPath="url(#screen1Clip)">
            {/* Editor chrome */}
            <rect x="62" y="50" width="200" height="14" fill="#0d1117"/>
            <circle cx="72" cy="57" r="3" fill="#ff5f57"/>
            <circle cx="82" cy="57" r="3" fill="#febc2e"/>
            <circle cx="92" cy="57" r="3" fill="#28c840"/>

            {/* Line numbers */}
            <rect x="62" y="64" width="14" height="126" fill="#0b0f17"/>

            {/* Code lines - simulated */}
            {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
              <g key={i}>
                <text x="66" y={76 + i * 11} fontSize="5" fill="rgba(255,255,255,0.15)" fontFamily="monospace">{i + 1}</text>
              </g>
            ))}

            {/* Code content */}
            <text x="80" y="76" fontSize="5.5" fill="#7c9cbf" fontFamily="monospace">@RestController</text>
            <text x="80" y="87" fontSize="5.5" fill="#7c9cbf" fontFamily="monospace">@RequestMapping("/api")</text>
            <text x="80" y="98" fontSize="5.5" fill="#569cd6" fontFamily="monospace">public class <tspan fill="#4ec9b0">CodeController</tspan> {'{'}</text>
            <text x="80" y="109" fontSize="5.5" fill="rgba(255,255,255,0.15)" fontFamily="monospace">  </text>
            <text x="80" y="120" fontSize="5.5" fill="#7c9cbf" fontFamily="monospace">  @PostMapping("/analyze")</text>
            <text x="80" y="131" fontSize="5.5" fill="#569cd6" fontFamily="monospace">  public ResponseEntity{'<'}</text>
            <text x="80" y="142" fontSize="5.5" fill="#4ec9b0" fontFamily="monospace">    AnalysisResult</text>
            <text x="80" y="153" fontSize="5.5" fill="#ce9178" fontFamily="monospace">    analyzeCode(</text>
            <text x="80" y="164" fontSize="5.5" fill="#ce9178" fontFamily="monospace">      @RequestBody req) {'{'}</text>
            <text x="80" y="175" fontSize="5.5" fill="#569cd6" fontFamily="monospace">    return <tspan fill="#4ec9b0">aiService</tspan></text>
            <text x="80" y="186" fontSize="5.5" fill="#ce9178" fontFamily="monospace">      .analyze(req);</text>

            {/* Cursor blink line */}
            <motion.rect
              x="80" y="189" width="1" height="7" fill="#60a5fa"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
          </g>

          {/* Monitor 1 bezel bottom */}
          <rect x="55" y="192" width="216" height="14" rx="0" fill="#0d0d0d" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          <circle cx="163" cy="203" r="3" fill="#1a1a1a" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>

          {/* Monitor glow */}
          <rect x="55" y="42" width="216" height="208" rx="8" fill="url(#monitorGlow)"/>

          {/* Monitor 2 stand */}
          <rect x="356" y="255" width="5" height="38" rx="2" fill="#1a1a1a"/>
          <rect x="338" y="289" width="42" height="5" rx="2" fill="#161616"/>

          {/* Monitor 2 frame */}
          <rect x="272" y="62" width="172" height="174" rx="6" fill="url(#monitorFrame)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

          {/* Monitor 2 screen */}
          <rect x="278" y="70" width="160" height="120" rx="4" fill="#020a14"/>

          <g clipPath="url(#screen2Clip)">
            {/* Terminal header */}
            <rect x="278" y="70" width="160" height="12" fill="#0d1117"/>
            <circle cx="286" cy="76" r="2.5" fill="#ff5f57"/>
            <circle cx="294" cy="76" r="2.5" fill="#febc2e"/>
            <circle cx="302" cy="76" r="2.5" fill="#28c840"/>
            <text x="330" y="79" fontSize="4.5" fill="rgba(255,255,255,0.3)" fontFamily="monospace" textAnchor="middle">Terminal</text>

            {/* Terminal content */}
            <text x="282" y="96" fontSize="4.5" fill="#4ade80" fontFamily="monospace">$ mvn spring-boot:run</text>
            <text x="282" y="107" fontSize="4" fill="rgba(255,255,255,0.4)" fontFamily="monospace">  .   ____          _</text>
            <text x="282" y="116" fontSize="4" fill="rgba(255,255,255,0.4)" fontFamily="monospace"> /\\ / ___'_ _ _ _(_)</text>
            <text x="282" y="125" fontSize="4" fill="#60a5fa" fontFamily="monospace">  Spring Boot v3.2.1</text>
            <text x="282" y="135" fontSize="4" fill="rgba(255,255,255,0.3)" fontFamily="monospace">Started on port 8080</text>
            <text x="282" y="145" fontSize="4.5" fill="#4ade80" fontFamily="monospace">$ git push origin main</text>
            <text x="282" y="155" fontSize="4" fill="rgba(255,255,255,0.35)" fontFamily="monospace">Enumerating objects...</text>
            <text x="282" y="165" fontSize="4" fill="#a78bfa" fontFamily="monospace">✓ Branch 'main' updated</text>
            <text x="282" y="178" fontSize="4.5" fill="#4ade80" fontFamily="monospace">$</text>
            <motion.rect
              x="288" y="173" width="1" height="6" fill="#4ade80"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />
          </g>

          {/* Monitor 2 bottom bezel */}
          <rect x="272" y="193" width="172" height="12" rx="0" fill="#0d0d0d"/>

          {/* Keyboard */}
          <rect x="130" y="295" width="200" height="55" rx="6" fill="#111111" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
          {[0,1,2,3].map(row => (
            <g key={row}>
              {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(col => (
                <rect
                  key={col}
                  x={136 + col * 14.5}
                  y={299 + row * 12}
                  width={col === 12 ? 22 : 12}
                  height={10}
                  rx="2"
                  fill="#1a1a1a"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
              ))}
            </g>
          ))}
          {/* Space bar */}
          <rect x="185" y="347" width="90" height="10" rx="2" fill="#1a1a1a" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>

          {/* Mouse */}
          <rect x="345" y="298" width="44" height="58" rx="22" fill="#111111" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
          <line x1="367" y1="298" x2="367" y2="335" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
          <rect x="360" y="306" width="14" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>

          {/* Coffee cup */}
          <rect x="468" y="270" width="28" height="24" rx="3" fill="#1a1a1a" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
          <path d="M 496 278 Q 505 278 505 284 Q 505 290 496 290" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <motion.path
            d="M 476 266 Q 478 260 476 255"
            stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" fill="none" strokeLinecap="round"
            animate={{ d: ['M 476 266 Q 478 260 476 255', 'M 476 266 Q 480 260 478 255', 'M 476 266 Q 478 260 476 255'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M 482 264 Q 484 258 482 253"
            stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" fill="none" strokeLinecap="round"
            animate={{ d: ['M 482 264 Q 484 258 482 253', 'M 482 264 Q 486 258 484 253', 'M 482 264 Q 484 258 482 253'] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          {/* Floating particles */}
          <motion.circle cx="45" cy="100" r="1.5" fill="#60a5fa" opacity="0.6"
            animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle cx="490" cy="150" r="1" fill="#a78bfa" opacity="0.5"
            animate={{ y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.circle cx="50" cy="200" r="1.2" fill="#60a5fa" opacity="0.4"
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          />

          {/* Screen glow effect */}
          <motion.ellipse cx="163" cy="180" rx="80" ry="20" fill="#3b82f6" opacity="0.04"
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.ellipse cx="358" cy="198" rx="60" ry="15" fill="#8b5cf6" opacity="0.04"
            animate={{ opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />

          {/* Notification popup */}
          <motion.g
            animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <rect x="380" y="30" width="120" height="36" rx="8" fill="#0f172a" stroke="rgba(59,130,246,0.3)" strokeWidth="0.8"/>
            <circle cx="392" cy="48" r="5" fill="#1d4ed8"/>
            <text x="400" y="43" fontSize="5.5" fill="#60a5fa" fontFamily="monospace" fontWeight="bold">AI Analysis Done</text>
            <text x="400" y="53" fontSize="4.5" fill="rgba(255,255,255,0.4)" fontFamily="monospace">CodeSensei detected 3 issues</text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}

function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [20, 0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.8 + index * 0.1 },
        y: {
          duration: 0.6 + (3.5 + index * 0.5),
          times: [0, 0.12, 0.56, 1],
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: 0.8 + index * 0.1,
        },
      }}
      whileHover={{ scale: 1.04 }}
      className="glass-card px-4 py-3 flex items-center gap-3 min-w-max cursor-default"
    >
      <span className="text-xl">{stat.icon}</span>
      <div>
        <div className="font-display font-bold text-lg glow-text-blue leading-none">{stat.value}</div>
        <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent)' }}
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.05), transparent)' }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none">
                <span className="glow-text-white">Aditya</span>
                <br />
                <span className="glow-text-white">Srivastava</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-xl sm:text-2xl font-medium h-9"
            >
              <TypingText />
            </motion.div>

            {/* Hero statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/50 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Focused on building{' '}
              <span className="text-white/80">production-ready applications</span>{' '}
              with clean architecture, scalable backend systems, and modern frontend experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2 text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <HiArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-white/25 text-xs font-medium tracking-widest uppercase">Find me on</span>
              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    whileHover={{
                      scale: 1.1,
                      color: '#93c5fd',
                      borderColor: 'rgba(59,130,246,0.4)',
                      boxShadow: '0 0 15px rgba(59,130,246,0.2)',
                      background: 'rgba(59,130,246,0.08)',
                    }}
                    whileTap={{ scale: 0.93 }}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 pt-2"
            >
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative items-center justify-center h-full"
          >
            <div className="relative w-full" style={{ maxWidth: 540 }}>
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <WorkspaceIllustration />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
