// hooks/useProblemFilters.ts
import { useMemo, useState } from 'react';
import { useQueryStates, parseAsArrayOf, parseAsString } from 'nuqs';
import { getProblems } from '@/lib/get-problems';
import { useIsMobile } from './use-mobile';

type ProblemFiltersReturn = {
  allTopics: string[];
  selectedTopics: string[];
  availableTopics: string[];
  topicCounts: Record<string, number>;
  isAllSelected: boolean;
  handleTopicToggle: (topic: string) => void;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  isMobile: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export function useProblemFilters(): ProblemFiltersReturn {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // Get problems data (static for now)
  const problems = getProblems();

  // Read/initialize query states for companies, patterns, levels, and topics
  const [{ companies, patterns, levels, topics }, setQuery] = useQueryStates({
    companies: parseAsArrayOf(parseAsString).withDefault([]),
    patterns: parseAsArrayOf(parseAsString).withDefault([]),
    levels: parseAsArrayOf(parseAsString).withDefault([]),
    topics: parseAsArrayOf(parseAsString).withDefault([])
  });

  // Filter problems based on selected companies, patterns, and levels
  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesCompany = !companies || companies.length === 0 || companies.some((c) => problem.companies.includes(c));
      const matchesPattern = !patterns || patterns.length === 0 || patterns.some((pattern) => problem.patterns.includes(pattern));
      const matchesLevel = !levels || levels.length === 0 || levels.some((level) => level === problem.difficulty);

      return matchesCompany && matchesPattern && matchesLevel;
    });
  }, [problems, companies, patterns, levels]);

  // Extract available topics from filtered problems
  const availableTopics = useMemo(() => {
    // combine all topics, flat them into an arr, throw them in a set to remove duplicates, turn into an arr
    return Array.from(new Set(filteredProblems.flatMap((problem) => problem.topics)));
  }, [filteredProblems]);

  // Determine selected topics
  const selectedTopics = useMemo(() => {
    if (!topics || topics.length === 0) return availableTopics;
    else return availableTopics.filter((topic) => topics.includes(topic));
  }, [topics, availableTopics]);

  // Compute topic counts
  const topicCounts = useMemo(() => {
    return availableTopics.reduce((accumulator, topic) => {
      accumulator[topic] = filteredProblems.filter((problem) => problem.topics.includes(topic)).length;
      return accumulator;
    }, {} as Record<string, number>);
  }, [availableTopics, filteredProblems]);

  // Determine if all available topics are selected
  const isAllSelected = availableTopics.length === selectedTopics.length;

  // Handle selecting/deselecting topics
  const handleTopicToggle = (topic: string) => {
    const newSelectedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];
    setQuery({ topics: newSelectedTopics });
  };

  const handleSelectAll = () => setQuery({ topics: availableTopics });
  const handleDeselectAll = () => setQuery({ topics: [] });

  return {
    allTopics: Array.from(new Set(problems.flatMap((p) => p.topics))),
    selectedTopics,
    availableTopics,
    topicCounts,
    isAllSelected,
    handleTopicToggle,
    handleSelectAll,
    handleDeselectAll,
    isMobile,
    open,
    setOpen
  };
}
