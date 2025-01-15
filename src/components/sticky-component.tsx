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
      {/* Sentinel */}
      <div ref={ref} className="h-[1px] w-full" />

      {/* Sticky content */}
      <div
        className={cn(
          'w-full',
          'bg-white/90 backdrop-blur-xl',
          'transition-all duration-300 ease-in-out',
          isStuck
            ? 'fixed top-0 shadow-sm' // Sticky state
            : 'relative' // Default state
        )}
        style={{
          zIndex: 50,
          top: isStuck ? `${topOffset}px` : 'auto' // Apply top offset when sticky
        }}
      >
        {children}
      </div>
    </>
  );
}
