'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Shield } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.875rem 1.5rem',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--text-primary)',
            }}
          >
            <Shield size={22} style={{ color: 'var(--accent-green)' }} />
            <span>
              Akshat<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                style={{
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color:
                    activeSection === link.href.replace('#', '')
                      ? 'var(--accent-green)'
                      : 'var(--text-secondary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {link.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '0.5rem',
                transition: 'all 0.2s ease',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="mobile-controls"
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(0,0,0,0.5)',
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '280px',
                background: 'var(--bg-secondary)',
                borderLeft: '1px solid var(--border-color)',
                padding: '5rem 1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  style={{
                    padding: '0.75rem 1rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color:
                      activeSection === link.href.replace('#', '')
                        ? 'var(--accent-green)'
                        : 'var(--text-secondary)',
                    background:
                      activeSection === link.href.replace('#', '')
                        ? 'var(--bg-tertiary)'
                        : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for responsive nav visibility */}
      <style jsx global>{`
        .desktop-nav {
          display: none !important;
        }
        .mobile-controls {
          display: flex !important;
        }
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-controls {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
