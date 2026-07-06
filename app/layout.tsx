import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohd Naveed Khan - Software Engineer | Full-Stack Developer',
  description: 'Experienced Software Engineer specializing in Next.js, Django, and AWS. Building scalable web applications and real-time solutions.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Next.js', 'Django', 'AWS', 'React', 'WebSockets'],
  authors: [{ name: 'Mohd Naveed Khan' }],
  creator: 'Mohd Naveed Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naveed.dev',
    title: 'Mohd Naveed Khan - Software Engineer',
    description: 'Building full-stack web apps with Next.js, Django & AWS',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}