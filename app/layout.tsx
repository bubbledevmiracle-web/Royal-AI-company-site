import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royal AI — World-Class Software & Hardware Powered by AI',
  description:
    'Royal AI is a Singapore-based startup developing world-class products spanning software and hardware, leveraging AI technology across software development, marketing strategy, hardware circuit board design, and firmware development.',
  openGraph: {
    title: 'Royal AI — World-Class Software & Hardware Powered by AI',
    description:
      'Royal AI is a Singapore-based startup developing world-class products spanning software and hardware, leveraging AI technology.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
