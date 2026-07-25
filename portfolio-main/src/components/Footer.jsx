import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/Aditya14120', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-srivastava-116632325', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/a72683020/', label: 'LeetCode' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/a72683020', label: 'HackerRank' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Top divider */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.04), transparent)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(59,130,246,0.25)',
                  color: '#93c5fd',
                }}
              >
                AS
              </div>
              <div>
                <p className="font-display font-semibold text-white/80 text-sm">Aditya Srivastava</p>
                <p className="text-white/30 text-xs">Java Full Stack Developer</p>
              </div>
            </div>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              Building scalable backend systems and AI-powered applications with modern engineering practices.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="text-white/45 text-xs py-1 hover:text-white/80 transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-4">Connect</p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/35 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{
                    color: '#93c5fd',
                    borderColor: 'rgba(59,130,246,0.35)',
                    background: 'rgba(59,130,246,0.07)',
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.93 }}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-white/20 text-xs mt-4 leading-relaxed">
              Available for remote opportunities
              <br />
              aditya.srivastava1409@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <motion.p
            className="text-white/25 text-xs flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Designed & Developed by
            <span className="text-white/50 font-medium">Aditya Srivastava</span>
            <span className="inline-flex items-center gap-1">
              with <FaHeart className="w-3 h-3 text-crimson-soft" />
            </span>
          </motion.p>

          <div className="flex items-center gap-4">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400/50 text-xs">Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
