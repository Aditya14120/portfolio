import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'aditya.srivastava1409@gmail.com',
    href: 'mailto:aditya.srivastava1409@gmail.com',
    accentColor: '#60a5fa',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Lucknow, Uttar Pradesh, India',
    href: null,
    accentColor: '#34d399',
  },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Aditya14120', label: 'GitHub', color: '#e2e8f0' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-srivastava-116632325', label: 'LinkedIn', color: '#0a66c2' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/a72683020/', label: 'LeetCode', color: '#ffa116' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/a72683020', label: 'HackerRank', color: '#2ec866' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const handleContactMe = () => {
    window.open('mailto:thatsadone123@gmail.com?subject=Portfolio%20Inquiry')
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent)' }}
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
          <p className="text-blue-soft/60 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="section-heading glow-text-white mb-4">Contact Me</h2>
          <p className="section-subheading max-w-md mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations
          </p>
          <div className="w-12 h-0.5 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(to right, #3b82f6, #7c3aed)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* CTA text */}
            <div className="glass-card p-6 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)' }}
              />
              <h3 className="font-display font-semibold text-white/85 text-lg mb-3">Let's build something great</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Whether you have a backend challenge, an AI product idea, or an opportunity — I'd love to hear from you.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${info.accentColor}12`, border: `1px solid ${info.accentColor}25` }}
                  >
                    <info.icon className="w-4.5 h-4.5" style={{ color: info.accentColor }} />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white/75 text-sm hover:text-white/95 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/75 text-sm">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-3">Connect with me</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 group/social"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <s.icon className="w-4 h-4 transition-colors duration-300 group-hover/social:text-white" style={{ color: s.color }} />
                    <span className="text-xs font-medium group-hover/social:text-white/85 transition-colors">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 sm:p-12 relative overflow-hidden flex flex-col items-center text-center gap-8">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(124,58,237,0.05)' }}
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(59,130,246,0.04)' }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)' }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(59,130,246,0.25)',
                  boxShadow: '0 0 40px rgba(59,130,246,0.12)',
                }}
              >
                <HiMail className="w-7 h-7 text-blue-soft" />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-bold text-white/90 text-2xl">Ready to connect?</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                  Hit the button below and your email client will open with my address ready to go. I typically respond within 24 hours.
                </p>
              </div>

              <motion.button
                onClick={handleContactMe}
                className="relative flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-sm overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(59,130,246,0.4)',
                  color: '#93c5fd',
                }}
                whileHover={{
                  scale: 1.04,
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(124,58,237,0.25))',
                  boxShadow: '0 0 35px rgba(59,130,246,0.3)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <HiMail className="w-4 h-4" />
                Contact Me
              </motion.button>

              <p className="text-white/20 text-xs">Opens your default email client</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
