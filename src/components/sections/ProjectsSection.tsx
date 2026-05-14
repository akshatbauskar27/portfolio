'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const projects = [
  {
    title: 'Hybrid Intrusion Detection System',
    description:
      'Research project combining machine learning algorithms with Snort IDS logs for improved network intrusion detection. Published as an IEEE conference paper.',
    tags: ['Machine Learning', 'Snort', 'IDS', 'Python', 'Research'],
    category: 'Research',
    links: {
      demo: 'https://ieeexplore.ieee.org/document/11389995/',
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Projects"
          subtitle="Cybersecurity tools, research, and automation projects built to solve real-world security challenges."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
              }}
            >
              {/* Category badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <Tag size={14} style={{ color: 'var(--accent-green)' }} />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--accent-green)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.4,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.375rem',
                  marginBottom: '1rem',
                }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '0.6875rem' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '0.5rem 0.875rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      padding: '0.5rem 0.875rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    <ExternalLink size={14} />
                    View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
