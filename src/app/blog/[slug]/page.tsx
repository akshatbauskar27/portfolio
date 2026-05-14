'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6rem 1.5rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Post Not Found
            </h1>
            <button className="btn-primary" onClick={() => router.push('/#blog')}>
              <ArrowLeft size={16} />
              Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Simple markdown-like renderer
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
      const line = lines[i].trimEnd();

      // Empty line = skip
      if (line.trim() === '') {
        i++;
        continue;
      }

      // H2 heading
      if (line.trim().startsWith('## ')) {
        elements.push(
          <h2
            key={key++}
            style={{
              fontSize: '1.375rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '0.5rem',
            }}
          >
            {line.trim().replace('## ', '')}
          </h2>
        );
        i++;
        continue;
      }

      // H3 heading
      if (line.trim().startsWith('### ')) {
        elements.push(
          <h3
            key={key++}
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            }}
          >
            {line.trim().replace('### ', '')}
          </h3>
        );
        i++;
        continue;
      }

      // Bullet list
      if (line.trim().startsWith('- ')) {
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          items.push(lines[i].trim().replace('- ', ''));
          i++;
        }
        elements.push(
          <ul
            key={key++}
            style={{
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Regular paragraph
      const paraLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('## ') && !lines[i].trim().startsWith('### ') && !lines[i].trim().startsWith('- ')) {
        paraLines.push(lines[i].trim());
        i++;
      }
      if (paraLines.length > 0) {
        const text = paraLines.join(' ');
        // Render bold and italic inline
        const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
        elements.push(
          <p
            key={key++}
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}
          >
            {parts.map((part, idx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={idx} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                return <em key={idx}>{part.slice(1, -1)}</em>;
              }
              return part;
            })}
          </p>
        );
      }
    }
    return elements;
  };

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '6rem 1.5rem 4rem' }}>
        <div
          className="container-custom"
          style={{ maxWidth: '780px', margin: '0 auto' }}
        >
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="btn-secondary"
            onClick={() => router.push('/#blog')}
            style={{
              marginBottom: '2rem',
              padding: '0.5rem 1rem',
              fontSize: '0.8125rem',
            }}
          >
            <ArrowLeft size={14} />
            Back to Blog
          </motion.button>

          {/* Post header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--accent-green)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <Tag size={12} />
                {post.category}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              {post.summary}
            </p>
          </motion.div>

          {/* Post content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {renderContent(post.content)}
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
