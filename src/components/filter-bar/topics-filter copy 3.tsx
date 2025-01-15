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
import { getProblems } from '@/lib/get-problems'; // Import the getProblems function

interface TopicsCommandContentProps {
  selectedTopics: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleTopicToggle: (topic: string) => void;
  topics: string[];
  availableTopics: string[]; // Topics that are available based on other filters
  topicCounts: Record<string, number>; // Count of problems for each topic
}

// Reusable function for array-based URL parameters
// function useArrayQueryState(key: string, defaultValue: string[] = []): [string[], (value: string[]) => void] {
//   const [param, setParam] = useQueryState<string[]>(key, {
//     defaultValue, // Pass the array as defaultValue
//     parse: (value) => (value ? value.split(',') : []), // Convert string to array
//     serialize: (value) => (value.length === 0 ? '' : value.join(',')) // Convert array to string
//     // eq: (a, b) => a.join(',') === b.join(',') // Compare arrays for equality
//   });

//   return [param, setParam];
// }

// function useArrayQueryState(key: string, defaultValue: string[] = []): [string[], (value: string[]) => void] {
//   const [param, setParam] = useQueryState<string[]>(key, {
//     defaultValue, // Pass the array as defaultValue
//     parse: (value) => (value === 'none' ? [] : value ? value.split(',') : []), // Convert string to array
//     serialize: (value) => (value.length === 0 ? 'none' : value.join(',')) // Convert array to string
//   });

//   return [param, setParam];
// }

function useArrayQueryState(
  key: string,
  allValues: string[] // Pass all possible values (e.g., allTopics)
): [string[], (value: string[]) => void] {
  const [param, setParam] = useQueryState<string[]>(key, {
    defaultValue: allValues, // Default to all values
    parse: (value) => {
      if (value === 'none') return []; // If 'none', return empty array
      if (!value) return allValues; // If no value, return all values
      return value.split(','); // Otherwise, split the string into an array
    },
    serialize: (value) => {
      if (value.length === 0) return 'none'; // If empty, return 'none'
      if (value.length === allValues.length) return ''; // If all values are selected, return empty string
      return value.join(','); // Otherwise, join the array into a string
    }
  });

  return [param, setParam];
}

export default function TopicsFilter() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Directly call getProblems to get the static problems data
  const problems = getProblems();

  // Use the reusable function for patterns, companies, and topics
  // const [selectedPatterns] = useArrayQueryState('patterns');
  // const [selectedCompanies] = useArrayQueryState('companies');
  // const [selectedTopics, setSelectedTopics] = useArrayQueryState('topics');

  // Get all unique topics from the problems data
  const allTopics = Array.from(new Set(problems.flatMap((p) => p.topics)));

  // Use the reusable function for patterns, companies, and topics
  const [selectedPatterns] = useArrayQueryState('patterns', Array.from(new Set(problems.flatMap((p) => p.patterns))));
  const [selectedCompanies] = useArrayQueryState(
    'companies',
    Array.from(new Set(problems.flatMap((p) => p.companies)))
  );
  const [selectedTopics, setSelectedTopics] = useArrayQueryState('topics', allTopics);

  // Dynamically calculate the list of all topics from the problems data
  // const allTopics = useMemo(() => {
  //   const topicsSet = new Set<string>();
  //   problems.forEach((problem) => {
  //     problem.topics.forEach((topic) => topicsSet.add(topic));
  //   });
  //   return Array.from(topicsSet);
  // }, [problems]);

  // Compute available topics and their counts based on selected patterns and companies
  const { availableTopics, topicCounts } = useMemo(() => {
    const availableTopics = new Set<string>();
    const topicCounts: Record<string, number> = {};

    allTopics.forEach((topic) => {
      // Filter problems that match the selected patterns and companies
      const matchingProblems = problems.filter((problem) => {
        const matchesPattern =
          selectedPatterns.length === 0 || selectedPatterns.every((pattern) => problem.patterns.includes(pattern));
        const matchesCompany =
          selectedCompanies.length === 0 || selectedCompanies.every((company) => problem.companies.includes(company));
        return matchesPattern && matchesCompany && problem.topics.includes(topic);
      });

      if (matchingProblems.length > 0) {
        availableTopics.add(topic);
        topicCounts[topic] = matchingProblems.length;
      }
    });

    return { availableTopics: Array.from(availableTopics), topicCounts };
  }, [selectedPatterns, selectedCompanies, allTopics, problems]);

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    setSelectedTopics(newTopics);
  };

  // const isAllSelected = selectedTopics.length === allTopics.length;
  const isAllSelected = selectedTopics.length === availableTopics.length && availableTopics.length > 0;

  const handleSelectAll = () => {
    setSelectedTopics(availableTopics); // Select only available topics
  };

  const handleDeselectAll = () => {
    setSelectedTopics([]); // Deselect all topics
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
            topics={allTopics}
            availableTopics={availableTopics}
            topicCounts={topicCounts}
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
  topics,
  availableTopics,
  topicCounts
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
            <CommandItem
              key={index}
              onSelect={() => handleTopicToggle(topic)}
              className={`cursor-pointer py-2 border-b ${
                !availableTopics.includes(topic) ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              <Checkbox checked={selectedTopics.includes(topic)} className="mr-2" />
              {topic}
              {availableTopics.includes(topic) && (
                <span className="ml-1 text-xs text-muted-foreground">
                  ({topicCounts[topic]} {topic.length < 10 ? (topicCounts[topic] > 1 ? 'problems' : 'problem') : ''})
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
