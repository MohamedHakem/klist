'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useMediaQuery from '@/hooks/use-media-query';
import { ChevronsUpDown, ListFilter } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useMemo, useState } from 'react';

interface TopicsCommandContentProps {
  selectedTopics: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleTopicToggle: (topic: string) => void;
  topics: string[];
}

export default function TopicsFilter({ topics }: { topics: string[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Use nuqs to manage the topics query parameter
  const [topicsParam, setTopicsParam] = useQueryState('topics', {
    defaultValue: null,
    parse: (value) => (value === 'none' ? [] : value?.split(',') || topics), // Default to all topics if no param
    serialize: (value) => {
      if (!value || value.length === 0) return 'none'; // No topics selected
      if (value.length === topics.length) return ''; // All topics selected (default)
      return value.join(','); // Some topics selected
    }
  });

  const selectedTopics = useMemo(() => topicsParam || topics, [topicsParam, topics]);

  const isAllSelected = selectedTopics.length === topics.length;

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    setTopicsParam(newTopics);
  };

  const handleSelectAll = () => {
    setTopicsParam(null); // Reset to default (all topics)
  };

  const handleDeselectAll = () => {
    setTopicsParam([]); // Deselect all topics
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-2 md:px-2.5">
      <ListFilter className="lucide lucide-list-filter size-4 shrink-0 hidden md:inline" />
      <span className="text-xs md:text-sm font-medium">Topics</span>
      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedTopics.length}</span>
      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <TopicsCommandContent
            selectedTopics={selectedTopics}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleTopicToggle={handleTopicToggle}
            topics={topics}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
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
            topics={topics}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function TopicsCommandContent({
  selectedTopics,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handleTopicToggle,
  topics
}: TopicsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search topics..." />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              checked={isAllSelected}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label htmlFor="select-all">Select All</Label>
          </div>
          <span className="text-xs text-muted-foreground">
            {selectedTopics.length}/{topics.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No topic found.</CommandEmpty>
        <CommandGroup>
          {topics.map((topic, index) => (
            <CommandItem key={index} onSelect={() => handleTopicToggle(topic)} className="cursor-pointer py-2 border-b">
              <Checkbox checked={selectedTopics.includes(topic)} className="mr-2" />
              {topic}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
