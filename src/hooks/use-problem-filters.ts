// hooks/useProblemFilters.ts
import { useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { getProblems } from '@/lib/get-problems';
import { createArrayQueryState } from '@/lib/create-array-query-state-nuqs';

export function useProblemFilters() {
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
    defaultValue: allTopics // Default to all topics selected
  });

  // Compute available topics and their counts based on selected patterns and companies
  const { availableTopics, topicCounts } = useMemo(() => {
    const availableTopics = new Set<string>();
    const topicCounts: Record<string, number> = {};

    // If no patterns or companies are selected, all topics are available
    const noFiltersSelected = selectedPatterns.length === 0 && selectedCompanies.length === 0;

    allTopics.forEach((topic) => {
      // Filter problems that match the selected patterns and companies
      const matchingProblems = problems.filter((problem) => {
        const matchesPattern =
          selectedPatterns.length === 0 || selectedPatterns.every((pattern) => problem.patterns.includes(pattern));
        const matchesCompany =
          selectedCompanies.length === 0 || selectedCompanies.every((company) => problem.companies.includes(company));
        return matchesPattern && matchesCompany && problem.topics.includes(topic);
      });

      // If no filters are selected, all topics are available
      if (noFiltersSelected) {
        availableTopics.add(topic);
        topicCounts[topic] = problems.filter((problem) => problem.topics.includes(topic)).length;
      } else if (matchingProblems.length > 0) {
        // Otherwise, only include topics with matching problems
        availableTopics.add(topic);
        topicCounts[topic] = matchingProblems.length;
      }
    });

    return { availableTopics: Array.from(availableTopics), topicCounts };
  }, [selectedPatterns, selectedCompanies, allTopics, problems]);

  // Determine if all available topics are selected
  const isAllSelected = availableTopics.every((topic) => selectedTopics.includes(topic));

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    // If all topics are selected, remove the `topics` parameter (default state)
    if (newTopics.length === allTopics.length) {
      setSelectedTopics(null); // Remove the `topics` parameter
    } else {
      setSelectedTopics(newTopics);
    }
  };

  const handleSelectAll = () => {
    // Select all available topics and remove the `topics` parameter (default state)
    setSelectedTopics(null); // Remove the `topics` parameter
  };

  const handleDeselectAll = () => {
    // Deselect all topics
    setSelectedTopics([]);
  };

  return {
    allTopics,
    selectedTopics,
    availableTopics,
    topicCounts,
    isAllSelected,
    handleTopicToggle,
    handleSelectAll,
    handleDeselectAll
  };
}
