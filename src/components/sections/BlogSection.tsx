'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, PenLine } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SectionHeading from '../ui/SectionHeading';
import { blogPosts } from '@/data/blogPosts';

export default function BlogSection() {
  const router = useRouter();

  // If no posts yet, show a "coming soon" message
  if (blogPosts.length === 0) {
    return (
      <section id="blog" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Blog & Writeups"
            subtitle="Sharing knowledge on cybersecurity, pentesting techniques, and security research."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            <PenLine
              size={40}
              style={{ color: 'var(--accent-green)', margin: '0 auto 1rem' }}
            />
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Coming Soon
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Blog posts and writeups are being prepared. Stay tuned for regular cybersecurity content.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card"
              onClick={() => router.push(`/blog/${post.slug}`)}
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category */}
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: 'var(--accent-green)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}
              >
                {post.category}
              </span>

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
                {post.title}
              </h3>

              {/* Summary */}
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                  flex: 1,
                }}
              >
                {post.summary}
              </p>

              {/* Meta */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.6875rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--accent-green)',
                  }}
                >
                  Read
                  <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
