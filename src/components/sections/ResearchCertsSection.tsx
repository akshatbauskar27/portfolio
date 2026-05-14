'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const certifications = [
  {
    name: 'CEH – Certified Ethical Hacker',
    issuer: 'EC-Council',
    icon: '🛡️',
  },
  {
    name: 'Fortinet NSE 1 & NSE 2',
    issuer: 'Fortinet',
    icon: '🔒',
  },
  {
    name: 'CNSS – Certified Network Security Specialist',
    issuer: 'ICSI',
    icon: '🌐',
  },
  {
    name: 'Certified Cyber Security Intervention Officer',
    issuer: 'Certification Body',
    icon: '⚔️',
  },
];

export default function ResearchCertsSection() {
  return (
    <section id="research" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <SectionHeading
          title="Research & Certifications"
          subtitle="Academic contributions and industry-recognized credentials validating cybersecurity expertise."
        />

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* IEEE Publication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <h3
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              <BookOpen size={20} style={{ color: 'var(--accent-green)' }} />
              Research Publication
            </h3>

            <a
              href="https://ieeexplore.ieee.org/document/11389995/"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'block',
                padding: '1.5rem',
                cursor: 'pointer',
                textDecoration: 'none',
                background: 'var(--bg-card)',
                borderLeft: '3px solid var(--accent-green)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <span
                  style={{
                    padding: '0.25rem 0.625rem',
                    borderRadius: '4px',
                    background: 'var(--accent-green)',
                    color: '#000',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  IEEE CONFERENCE PAPER
                </span>
              </div>

              <h4
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.4,
                }}
              >
                Hybrid Intrusion Detection System Using Machine Learning and Snort Logs
              </h4>

              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '0.75rem',
                }}
              >
                A research paper presenting a novel hybrid intrusion detection approach that combines machine learning
                classification algorithms with Snort IDS log analysis for improved network threat detection accuracy
                and reduced false positive rates.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.375rem',
                  marginBottom: '0.75rem',
                }}
              >
                {['Machine Learning', 'Snort', 'IDS', 'Network Security', 'Python'].map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '0.6875rem' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.8125rem',
                  color: 'var(--accent-green)',
                  fontWeight: 500,
                }}
              >
                View on IEEE Xplore
                <ExternalLink size={14} />
              </div>
            </a>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              <Award size={20} style={{ color: 'var(--accent-green)' }} />
              Certifications
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
              }}
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.125rem',
                      }}
                    >
                      {cert.name}
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {cert.issuer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
