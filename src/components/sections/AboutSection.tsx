'use client';

import { motion } from 'framer-motion';
import { Shield, Bug, Search, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  { icon: Shield, label: '4+ Years', desc: 'Cybersecurity Experience' },
  { icon: Bug, label: 'VAPT', desc: 'Vulnerability Assessment & Pentesting' },
  { icon: Search, label: 'OSINT', desc: 'Open Source Intelligence' },
  { icon: BookOpen, label: 'IEEE', desc: 'Published Research' },
  { icon: GraduationCap, label: 'M.Tech', desc: 'Cyber Security (2023–Present)' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="A dedicated cybersecurity professional with a passion for offensive security and research."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              With over <strong style={{ color: 'var(--text-primary)' }}>4 years of professional experience</strong> in cybersecurity, 
              I specialize in penetration testing, vulnerability assessment, and security operations. My expertise spans 
              web application security, infrastructure security, OSINT, security reporting, and client remediation support.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              I have worked with leading organizations including <strong style={{ color: 'var(--text-primary)' }}>Infosys, Yash Technologies, 
              Trixter Cyber Solution, and CDAC Mumbai</strong>, delivering comprehensive security assessments and helping 
              organizations strengthen their security posture.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              Currently pursuing my <strong style={{ color: 'var(--text-primary)' }}>M.Tech in Cyber Security</strong>, I combine academic 
              research with hands-on industry experience. My published IEEE research on hybrid intrusion detection systems 
              reflects my commitment to advancing the field through innovation.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
            }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '1.25rem',
                }}
              >
                <h.icon
                  size={24}
                  style={{ color: 'var(--accent-green)', margin: '0 auto 0.5rem' }}
                />
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {h.label}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {h.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* IEEE Publication Card */}
          <motion.a
            href="https://ieeexplore.ieee.org/document/11389995/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              cursor: 'pointer',
              textDecoration: 'none',
              borderLeft: '3px solid var(--accent-green)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <BookOpen size={22} style={{ color: 'var(--accent-green)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.25rem',
                }}
              >
                <span
                  className="tag"
                  style={{
                    background: 'var(--accent-green)',
                    color: '#000',
                    border: 'none',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                  }}
                >
                  IEEE Publication
                </span>
              </div>
              <h3
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.375rem',
                }}
              >
                Hybrid Intrusion Detection System Using Machine Learning and Snort Logs
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.8125rem',
                  color: 'var(--accent-green)',
                }}
              >
                <span>View on IEEE Xplore</span>
                <ExternalLink size={14} />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
