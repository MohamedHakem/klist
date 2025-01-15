import { FilterBar } from '@/components/filter-bar/filter-bar';
import Header from '@/components/header';
import ProblemList from '@/components/problem-list/problem-list';
import { StickyComponent } from '@/components/sticky-component';
import { Suspense } from 'react';

export const metadata = {
  title: 'Klist - Best Leetcode Questions for Interviews',
  description: 'Klist - Master DSA, one pattern at a time',
  openGraph: {
    title: 'Klist - Best Leetcode Questions for Interviews',
    description: 'Klist - Master DSA, one pattern at a time',
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

export default function Home() {
  return (
    <div>
      <StickyComponent>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <FilterBar />
        </Suspense>
      </StickyComponent>

      <Suspense fallback={<div>Loading...</div>}>
        <ProblemList />
      </Suspense>
    </div>
  );
}
