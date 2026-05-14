// =====================================================
// HOW TO ADD A NEW BLOG POST:
// =====================================================
// 1. Copy the template below and paste it at the TOP of the blogPosts array
// 2. Fill in your content
// 3. Commit and push — your blog post will be live!
//
// TEMPLATE:
// {
//   slug: 'your-post-url-slug',
//   title: 'Your Blog Post Title',
//   date: '2026-05-14',
//   category: 'Security Research',
//   readTime: '5 min read',
//   summary: 'A short 1-2 sentence summary shown on the blog listing.',
//   content: `
//     Your full blog post content goes here.
//
//     You can write multiple paragraphs just by leaving blank lines.
//
//     ## Subheadings work like this
//
//     - Bullet points work too
//     - Just use dashes
//
//     **Bold text** and *italic text* also work.
//
//     ### Code snippets:
//     Wrap code in triple backticks (the blog will render them nicely).
//   `,
// },
// =====================================================

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
}

// Add your blog posts here (newest first)
export const blogPosts: BlogPost[] = [
  // ---- EXAMPLE POST (you can delete or edit this) ----
  {
    slug: 'hybrid-intrusion-detection-research',
    title: 'Hybrid Intrusion Detection: Combining ML with Snort IDS',
    date: '2026-05-14',
    category: 'Security Research',
    readTime: '6 min read',
    summary:
      'An overview of my IEEE-published research on combining machine learning algorithms with Snort IDS logs for improved network intrusion detection.',
    content: `
Network intrusion detection is a critical component of modern cybersecurity infrastructure. Traditional signature-based systems like Snort are effective at detecting known threats but struggle with novel attack patterns. Machine learning offers a complementary approach that can identify anomalous behavior even without pre-defined signatures.

## The Problem

Signature-based IDS solutions face several challenges:

- They cannot detect zero-day attacks
- They generate high false-positive rates in dynamic environments
- They require constant signature updates to remain effective

## Our Approach

In this research, we developed a hybrid system that combines the reliability of Snort's rule-based detection with the adaptability of machine learning classifiers. The system processes Snort logs as feature inputs and applies classification algorithms to improve detection accuracy.

## Key Findings

- The hybrid approach achieved significantly higher detection rates compared to standalone Snort
- False positive rates were reduced by leveraging ML-based anomaly scoring
- The system demonstrated effectiveness against both known and previously unseen attack patterns

## Read the Full Paper

The complete research paper is published on IEEE Xplore and can be accessed at: https://ieeexplore.ieee.org/document/11389995/
    `,
  },
];
