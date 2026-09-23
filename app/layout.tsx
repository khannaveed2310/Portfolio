import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://naveedkhan.dev'),
  title: 'Mohd Naveed Khan | Full-Stack Architect & Software Engineer',
  description: 'Full-Stack Software Engineer specializing in Next.js, Django, AWS, and high-performance real-time web applications.',
  keywords: ['Mohd Naveed Khan', 'Full-Stack Developer', 'Software Engineer', 'Next.js', 'Django', 'AWS', 'Docker', 'TypeScript', 'WebSockets'],
  authors: [{ name: 'Mohd Naveed Khan' }],
  creator: 'Mohd Naveed Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naveedkhan.dev',
    title: 'Mohd Naveed Khan | Full-Stack Architect & Software Engineer',
    description: 'Crafting high-performance web systems with Next.js, Django, and modern cloud infrastructure.',
    siteName: 'Mohd Naveed Khan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd Naveed Khan | Full-Stack Engineer',
    description: 'High-performance web apps with Next.js, Django & AWS',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}