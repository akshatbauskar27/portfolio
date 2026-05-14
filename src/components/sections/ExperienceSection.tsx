'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const experiences = [
  {
    title: 'Senior Associate Consultant',
    company: 'Infosys Limited',
    period: '2023 – Present',
    description: [
      'Conducting comprehensive VAPT assessments for enterprise clients across web applications and infrastructure',
      'Performing advanced web application penetration testing following OWASP methodologies',
      'Leading security reporting and providing detailed remediation guidance to clients',
      'Collaborating with cross-functional teams for security operations and incident response',
    ],
    tags: ['VAPT', 'Web Security', 'Security Reporting', 'Client Remediation', 'Infrastructure Security'],
  },
  {
    title: 'IT System Analyst',
    company: 'Yash Technologies',
    period: '2022 – 2023',
    description: [
      'Performed vulnerability assessments and penetration testing on client infrastructure',
      'Conducted OSINT reconnaissance and threat intelligence gathering',
      'Managed security monitoring and firewall security configurations',
      'Delivered detailed security assessment reports with actionable recommendations',
    ],
    tags: ['VAPT', 'OSINT', 'Firewall Security', 'Security Monitoring'],
  },
  {
    title: 'Senior Cyber Security Engineer',
    company: 'Trixter Cyber Solution',
    period: '2021 – 2022',
    description: [
      'Led web application and API security testing engagements',
      'Performed infrastructure penetration testing and server security assessments',
      'Developed security automation scripts to streamline testing workflows',
      'Managed client communication and remediation support throughout engagement lifecycle',
    ],
    tags: ['Web App Testing', 'API Security', 'Infrastructure Testing', 'Security Automation'],
  },
  {
    title: 'Project Engineer',
    company: 'CDAC Mumbai',
    period: '2020 – 2021',
    description: [
      'Contributed to cybersecurity research projects and security operations',
      'Participated in vulnerability assessment activities and security analysis',
      'Supported security monitoring and incident investigation processes',
      'Gained foundational expertise in server security and network defense',
    ],
    tags: ['Security Operations', 'Vulnerability Assessment', 'Server Security', 'Research'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Professional Experience"
          subtitle="A track record of delivering impactful security solutions across leading organizations."
        />

        {/* Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border-color)',
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '52px',
                marginBottom: i < experiences.length - 1 ? '2.5rem' : 0,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '6px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--accent-green)',
                  border: '3px solid var(--bg-primary)',
                  zIndex: 2,
                }}
              />

              {/* Card */}
              <div className="card">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {exp.title}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.75rem',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Building2 size={14} style={{ color: 'var(--accent-green)' }} />
                    {exp.company}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        position: 'relative',
                        paddingLeft: '1rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--accent-green)',
                        }}
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
