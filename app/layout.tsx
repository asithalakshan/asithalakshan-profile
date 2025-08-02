import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asitha Lakshan - Full Stack Developer',
  description: 'Professional full stack developer specializing in modern web technologies. Creating exceptional digital experiences with React, Next.js, Node.js, and more.',
  keywords: 'full stack developer, web developer, React, Next.js, Node.js, TypeScript, portfolio',
  authors: [{ name: 'Asitha Lakshan' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}