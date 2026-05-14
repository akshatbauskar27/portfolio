'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
      id={id}
    >
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
          letterSpacing: '-0.025em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto 1rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="accent-line" style={{ margin: '0 auto' }} />
    </motion.div>
  );
}
