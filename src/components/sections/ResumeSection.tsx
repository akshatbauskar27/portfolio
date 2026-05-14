'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <SectionHeading
          title="Resume"
          subtitle="Download my ATS-optimized resume for a comprehensive overview of my qualifications."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="card"
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '2rem',
          }}
        >
          {/* Resume Preview */}
          <div
            style={{
              background: 'var(--bg-tertiary)',
              borderRadius: '8px',
              padding: '2rem',
              marginBottom: '1.5rem',
              borderLeft: '3px solid var(--accent-green)',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              Akshat Bauskar
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--accent-green)',
                fontWeight: 500,
                marginBottom: '1rem',
              }}
            >
              Cybersecurity Engineer | Penetration Tester | Security Researcher
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Experience summary */}
              <div>
                <h4
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.375rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Professional Experience
                </h4>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  <div style={{ marginBottom: '0.25rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Infosys Limited</strong> — Senior Associate Consultant (2023 – Present)
                  </div>
                  <div style={{ marginBottom: '0.25rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Yash Technologies</strong> — IT System Analyst (2022 – 2023)
                  </div>
                  <div style={{ marginBottom: '0.25rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Trixter Cyber Solution</strong> — Sr. Cyber Security Engineer (2021 – 2022)
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>CDAC Mumbai</strong> — Project Engineer (2020 – 2021)
                  </div>
                </div>
              </div>

              {/* Key skills */}
              <div>
                <h4
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.375rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Core Competencies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {[
                    'VAPT',
                    'OWASP Top 10',
                    'Web Security',
                    'API Security',
                    'OSINT',
                    'Burp Suite',
                    'Nessus',
                    'Metasploit',
                    'Python',
                  ].map((s) => (
                    <span key={s} className="tag" style={{ fontSize: '0.6875rem' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.375rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Education
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  M.Tech in Cyber Security (2023 – Present)
                </p>
              </div>
            </div>
          </div>

          {/* Download button */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
            <a href="/resume.pdf" download className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}>
              <Download size={18} />
              Download Resume (PDF)
            </a>
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.375rem',
            }}
          >
            <FileText size={12} />
            ATS-optimized format • PDF
          </p>
        </motion.div>
      </div>
    </section>
  );
}
