import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akshat Bauskar | Cybersecurity Engineer & Penetration Tester',
  description:
    'Professional cybersecurity portfolio of Akshat Bauskar — Cybersecurity Engineer, Penetration Tester, Security Researcher with 4+ years of experience in VAPT, Web Security, OSINT, and Security Operations.',
  keywords: [
    'cybersecurity',
    'penetration testing',
    'VAPT',
    'security researcher',
    'ethical hacker',
    'web application security',
    'Akshat Bauskar',
    'cybersecurity engineer',
    'SOC',
    'OWASP',
    'security portfolio',
  ],
  authors: [{ name: 'Akshat Bauskar' }],
  creator: 'Akshat Bauskar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshat-portfolio.vercel.app',
    title: 'Akshat Bauskar | Cybersecurity Engineer & Penetration Tester',
    description:
      'Securing applications, infrastructure, and organizations through proactive offensive security. 4+ years of professional cybersecurity experience.',
    siteName: 'Akshat Bauskar — Cybersecurity Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshat Bauskar | Cybersecurity Engineer',
    description:
      'Professional cybersecurity portfolio — Penetration Testing, VAPT, Security Research, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
