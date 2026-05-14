'use client';

import { motion } from 'framer-motion';
import { PenLine, BookOpen, Search } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const blogCategories = [
  {
    title: 'Pentesting Writeups',
    description: 'Detailed walkthroughs of penetration testing methodologies, techniques, and real-world findings.',
    icon: PenLine,
    count: 'Coming Soon',
  },
  {
    title: 'HTB & THM Walkthroughs',
    description: 'Hack The Box machine solutions and TryHackMe room walkthroughs with step-by-step explanations.',
    icon: Search,
    count: 'Coming Soon',
  },
  {
    title: 'Security Research',
    description: 'In-depth analysis of vulnerabilities, OWASP findings, Snort and IDS research, and emerging threats.',
    icon: BookOpen,
    count: 'Coming Soon',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Blog & Writeups"
          subtitle="Sharing knowledge on cybersecurity, pentesting techniques, and security research."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {blogCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card"
              style={{
                padding: '1.75rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <cat.icon size={24} style={{ color: 'var(--accent-green)' }} />
              </div>

              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {cat.title}
              </h3>

              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {cat.description}
              </p>

              <span
                style={{
                  padding: '0.375rem 1rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                }}
              >
                {cat.count}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          Blog posts and writeups are being prepared. Stay tuned for regular cybersecurity content.
        </motion.p>
      </div>
    </section>
  );
}
