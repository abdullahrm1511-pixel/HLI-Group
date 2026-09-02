import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HLI Group | Website Under Construction',
  description: 'De nieuwe website van HLI Holland Load & Inspection Group is momenteel in ontwikkeling.',
  openGraph: {
    title: 'HLI Group | Website Under Construction',
    description: 'De nieuwe website van HLI Group is binnenkort online.',
    images: ['/hli-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLI Group | Website Under Construction',
    description: 'De nieuwe website van HLI Group is binnenkort online.',
    images: ['/hli-logo.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
