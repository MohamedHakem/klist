'use client';

import { FilterTrigger } from '@/components/filter-bar/filter-trigger';
import { TopicsCommandContent } from '@/components/filter-bar/topics-command-content';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useMediaQuery from '@/hooks/use-media-query';
import { useProblemFilters } from '@/hooks/use-problem-filters';
import { useState } from 'react';

export default function TopicsFilter() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const {
    allTopics,
    selectedTopics,
    availableTopics,
    topicCounts,
    isAllSelected,
    handleTopicToggle,
    handleSelectAll,
    handleDeselectAll
  } = useProblemFilters();

  // const triggerButton = <FilterTrigger selectedCount={selectedTopics.length} label="Topics" />;

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <FilterTrigger selectedCount={selectedTopics.length} label="Topics" />
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <TopicsCommandContent
            selectedTopics={selectedTopics}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleTopicToggle={handleTopicToggle}
            topics={allTopics}
            availableTopics={availableTopics}
            topicCounts={topicCounts}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <FilterTrigger selectedCount={selectedTopics.length} label="Topics" />
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Choose Topics</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <TopicsCommandContent
            selectedTopics={selectedTopics}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleTopicToggle={handleTopicToggle}
            topics={allTopics}
            availableTopics={availableTopics}
            topicCounts={topicCounts}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
