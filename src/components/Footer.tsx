'use client';

import { FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/akshat-bauskar-990356163/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        padding: '3rem 1.5rem',
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Quote */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '500px',
          }}
        >
          &ldquo;Security is not a product, but a process.&rdquo;
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                background: 'var(--bg-tertiary)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-green)';
                (e.currentTarget as HTMLElement).style.color = 'var(--accent-green)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          © {new Date().getFullYear()} Akshat Bauskar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
