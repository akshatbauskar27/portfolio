'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiTryhackme, SiHackthebox } from 'react-icons/si';

const roles = [
  'Cybersecurity Engineer',
  'Penetration Tester',
  'Security Researcher',
  'SOC & VAPT Professional',
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/akshat-bauskar-990356163/', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://youtube.com/', label: 'YouTube' },
  { icon: SiTryhackme, href: 'https://tryhackme.com/', label: 'TryHackMe' },
  { icon: SiHackthebox, href: 'https://hackthebox.com/', label: 'Hack The Box' },
];

// Lightweight animated background
function NetworkBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Grid pattern */}
      <svg width="100%" height="100%" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
          style={{
            position: 'absolute',
            width: 4 + i * 2,
            height: 4 + i * 2,
            borderRadius: '50%',
            background: 'var(--accent-green)',
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        }}
      />
    </div>
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typeRole = useCallback(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 80);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const timer = setTimeout(typeRole, 50);
    return () => clearTimeout(timer);
  }, [typeRole]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        overflow: 'hidden',
      }}
    >
      <NetworkBackground />

      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-secondary)',
            marginBottom: '1.5rem',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
          }}
        >
          <span style={{ color: 'var(--accent-green)' }}>$</span>
          <span className="font-mono">whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
          }}
        >
          Akshat{' '}
          <span className="text-accent">Bauskar</span>
        </motion.h1>

        {/* Role rotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            fontWeight: 500,
            marginBottom: '1.25rem',
            minHeight: '2rem',
            color: 'var(--text-primary)',
          }}
        >
          <span className="font-mono" style={{ color: 'var(--accent-green)' }}>
            {displayText}
          </span>
          <span className="animate-blink" style={{ color: 'var(--accent-green)' }}>
            |
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}
        >
          Securing applications, infrastructure, and organizations through proactive offensive security.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={16} />
            View Projects
          </button>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download size={16} />
            Download Resume
          </a>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                background: 'var(--bg-card)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-green)';
                (e.currentTarget as HTMLElement).style.color = 'var(--accent-green)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <s.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
