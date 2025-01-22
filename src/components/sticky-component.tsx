'use client';

import { useIntersectionObserver } from '@uidotdev/usehooks';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface StickyComponentProps {
  children: ReactNode;
  topOffset?: number; // Optional top offset (e.g., for headers)
}

export function StickyComponent({ children, topOffset = 0 }: StickyComponentProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '-100% 0px 0px 0px' // Trigger when the entire element is scrolled out of view
  });

  const isStuck = !entry?.isIntersecting;

  return (
    <>
      <div ref={ref} className="h-[1px] w-full" />

      <div
        className={cn(
          'w-full bg-[#eaecf0] backdrop-blur-xl transition-all duration-300 ease-in-out',
          isStuck ? 'fixed top-0 shadow-sm' : 'relative'
        )}
        style={{ zIndex: 50, top: isStuck ? `${topOffset}px` : 'auto' }}
      >
        {children}
      </div>
    </>
  );
}
