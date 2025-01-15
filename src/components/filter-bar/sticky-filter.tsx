'use client';

import { useIntersectionObserver } from '@uidotdev/usehooks';
import { Search } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { Suspense } from 'react';
import { FilterBar } from '@/components/filter-bar/filter-bar';
import { cn } from '@/lib/utils';

export default function StickyFilterSection() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '-1px 0px 0px 0px' // Trigger slightly before the element hits the top
  });

  const [searchQuery, setSearchQuery] = useQueryState('q', {
    defaultValue: '',
    parse: (value) => value || '',
    serialize: (value) => value || ''
  });

  const isStuck = !entry?.isIntersecting || false;

  return (
    <>
      {/* Sentinel element to detect intersection */}
      <div ref={ref} className="absolute h-[1px] w-full left-0" />

      {/* Sticky container */}
      <div className="w-full sticky top-0 z-10 backdrop-blur-xl  mx-auto transition-all duration-200 ease-in-out bg-[#eaecf0]">
        <div
          className={cn(
            'w-full mx-auto transition-all duration-200 ease-in-out md:py-3',
            // 'sticky top-0 z-10 backdrop-blur-md md:py-3',
            // isStuck ? 'bg-white/70 md:bg-white/80 py-2 px-3 md:my-3' : 'md:max-w-3xl md:px-4'
            'md:max-w-3xl md:px-4',
            // !isStuck && 'translate-y-[-100%]'
            !isStuck ? '' : 'translate-y-0 shadow-sm'
          )}
        >
          <div className={cn('md:py-2 px-4 md:p-0 rounded-md', isStuck ? 'justify-center flex' : '')}>
            {/* <div className={'md:py-2 px-4 md:p-0 rounded-md justify-center'}> */}
            <div className="flex gap-1">
              {/* <ProgressBar /> */}
              <div className="md:hidden relative mb-4 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.trim())}
                    placeholder="Search problems..."
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <FilterBar />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
