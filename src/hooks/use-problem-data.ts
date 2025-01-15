import { useMemo } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getProblems } from '@/lib/get-problems';
import { useQueryState } from 'nuqs';
import { groupProblems } from '@/lib/group-problems';
import { ProblemItemProps } from '@/lib/types';

export const useProblemData = () => {
  const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
  const [level] = useQueryState('level', { defaultValue: 'all' });
  const [topics] = useQueryState('topics');
  const [patterns] = useQueryState('patterns');
  const [companies] = useQueryState('companies');

  const problems = getProblems();
  const [completedProblems] = useLocalStorage<number[]>('completedProblems', []);

  const filteredProblems = useMemo(() => {
    const parseFilterValues = (value: string | null): string[] => {
      const stringValue = String(value).trim();
      if (stringValue === null || stringValue === 'none') return [];
      console.log('🚀 ~ filteredProblems ~ stringValue:', stringValue);
      return stringValue.split(','); // Split comma-separated strings into arrays
    };

    // Parse URL values into arrays
    const selectedTopics = parseFilterValues(topics);
    const selectedPatterns = parseFilterValues(patterns);
    const selectedCompanies = parseFilterValues(companies);

    return problems.filter((p: ProblemItemProps) => {
      const matchesLevel = level === 'all' || p.difficulty.toLowerCase() === level.toLowerCase();

      // If topics is empty, include all topics; otherwise, check if the problem matches any selected topic
      const matchesTopics = selectedTopics.length === 0 || p.topics.some((topic) => selectedTopics.includes(topic));

      // If patterns is empty, include all patterns; otherwise, check if the problem matches any selected pattern
      const matchesPatterns =
        selectedPatterns.length === 0 || p.patterns.some((pattern) => selectedPatterns.includes(pattern));

      // If companies is empty, include all companies; otherwise, check if the problem matches any selected company
      const matchesCompanies =
        selectedCompanies.length === 0 || p.companies.some((company) => selectedCompanies.includes(company));

      return matchesLevel && matchesTopics && matchesPatterns && matchesCompanies;
    });
  }, [problems, level, topics, patterns, companies]);

  const todoProblems = useMemo(
    () => problems.filter((p: ProblemItemProps) => !completedProblems.includes(p.id)),
    [problems, completedProblems]
  );
  const completedList = useMemo(
    () => problems.filter((p: ProblemItemProps) => completedProblems.includes(p.id)),
    [problems, completedProblems]
  );

  const groupedProblems = useMemo(() => groupProblems(filteredProblems, groupBy), [filteredProblems, groupBy]);

  return {
    problems: filteredProblems,
    todoProblems,
    completedList,
    groupedProblems,
    completedProblems,
    groupBy
  };
};
