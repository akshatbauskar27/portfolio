'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Wrench,
  Server,
  Code2,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const skillCategories = [
  {
    title: 'Offensive Security',
    icon: Shield,
    skills: [
      'VAPT',
      'OWASP Top 10',
      'API Security',
      'Mobile Security',
      'Web Security',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      'Burp Suite Professional',
      'Nessus',
      'Qualys Guard',
      'Metasploit',
      'MobSF',
      'Wireshark',
      'Nmap',
      'Postman',
    ],
  },
  {
    title: 'Platforms',
    icon: Server,
    skills: [
      'Linux',
      'Windows Administration',
      'Networking',
      'PKI',
      'Firewall Security',
    ],
  },
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      'Python',
      'Bash Scripting',
      'Security Automation',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit for identifying, analyzing, and mitigating security threats."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card"
              style={{ padding: '1.5rem' }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <cat.icon size={20} style={{ color: 'var(--accent-green)' }} />
                </div>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent-green)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-green)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                    }}
                  >
                    <span style={{ color: 'var(--accent-green)', fontSize: '0.625rem' }}>◆</span>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
