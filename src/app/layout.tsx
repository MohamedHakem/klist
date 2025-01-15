import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';

export const metadata: Metadata = {
  title: 'Klist - Best Leetcode Questions for Interviews',
  description: 'Klist - Best Leetcode Questions for Interviews',
  openGraph: {
    title: 'Klist - Best Leetcode Questions for Interviews',
    description: '',
    url: 'https://hakem.vercel.app/klist',
    siteName: 'Klist'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ywkem',
    creator: '@ywkem'
  },
  metadataBase: new URL('https://hakem.vercel.app/klist')
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased bg-gray-50'}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
