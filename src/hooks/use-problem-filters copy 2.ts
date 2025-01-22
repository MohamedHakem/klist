import { useEffect, useMemo, useState } from 'react';
import { useQueryState } from 'nuqs';
import { getProblems } from '@/lib/get-problems';
import { createArrayQueryState } from '@/lib/create-array-query-state-nuqs';
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

  // Get static problems data
  const problems = getProblems();

  // Get all unique topics, patterns, and companies
  const allTopics = Array.from(new Set(problems.flatMap((p) => p.topics)));
  const allPatterns = Array.from(new Set(problems.flatMap((p) => p.patterns)));
  const allCompanies = Array.from(new Set(problems.flatMap((p) => p.companies)));

  // Create query state parsers and serializers
  const patternsQueryState = createArrayQueryState(allPatterns);
  const companiesQueryState = createArrayQueryState(allCompanies);
  const topicsQueryState = createArrayQueryState(allTopics);

  // Use useQueryState for patterns, companies, and topics
  const [selectedPatterns] = useQueryState('patterns', {
    ...patternsQueryState,
    defaultValue: []
  });
  const [selectedCompanies] = useQueryState('companies', {
    ...companiesQueryState,
    defaultValue: []
  });
  const [selectedTopics, setSelectedTopics] = useQueryState('topics', {
    ...topicsQueryState,
    defaultValue: allTopics
  });

  const { availableTopics, topicCounts } = useMemo(() => {
    const availableTopics = new Set<string>();
    const topicCounts: Record<string, number> = {};

    // Determine if any filters (patterns, companies) are selected
    const noFiltersSelected = selectedPatterns.length === 0 && selectedCompanies.length === 0;

    allTopics.forEach((topic) => {
      const matchingProblems = problems.filter((problem) => {
        const matchesAnyCompany =
          selectedCompanies.length === 0 || selectedCompanies.some((company) => problem.companies.includes(company));
        const matchesPattern =
          selectedPatterns.length === 0 || selectedPatterns.every((pattern) => problem.patterns.includes(pattern));

        return matchesAnyCompany && matchesPattern && problem.topics.includes(topic);
      });

      if (noFiltersSelected || matchingProblems.length > 0) {
        availableTopics.add(topic);
        topicCounts[topic] = matchingProblems.length;
      }
    });

    return { availableTopics: Array.from(availableTopics), topicCounts };
  }, [selectedPatterns, selectedCompanies, allTopics, problems]);

  useEffect(() => {
    // Determine the currently valid topics based on companies, patterns, levels, etc.
    const newSelectedTopics = selectedTopics.filter((topic) => availableTopics.includes(topic));

    // Update selectedTopics only if there’s a change
    if (newSelectedTopics.length !== selectedTopics.length) {
      setSelectedTopics(newSelectedTopics);
    }
  }, [availableTopics, selectedTopics, setSelectedTopics]);

  const isAllSelected = availableTopics.every((topic) => selectedTopics.includes(topic));

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    if (newTopics.length === availableTopics.length) {
      setSelectedTopics(null); // Remove the `topics` parameter if all are selected
    } else {
      setSelectedTopics(newTopics);
    }
  };

  const handleSelectAll = () => setSelectedTopics(null);
  const handleDeselectAll = () => setSelectedTopics([]);

  return {
    allTopics,
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
