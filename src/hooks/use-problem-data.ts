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
    // const parseFilterValues = (value: string | null): string[] => {
    //   const stringValue = String(value).trim();
    //   if (stringValue === null || stringValue === 'none') return [];
    //   console.log('🚀 ~ filteredProblems ~ stringValue:', stringValue);
    //   return stringValue.split(','); // Split comma-separated strings into arrays
    // };

    const parseFilterValues = (value: string | null): string[] => {
      console.log("🚀 ~ filteredProblems ~ value:", value)
      if (!value || value === 'null' || value === 'none') return [];
      return value?.trim().split(',');
    };

    // Parse URL values into arrays
    const selectedTopics = parseFilterValues(topics);
    const selectedPatterns = parseFilterValues(patterns);
    const selectedCompanies = parseFilterValues(companies);

    return problems.filter((p: ProblemItemProps) => {
      const matchesLevel = !level || level === 'all' || p.difficulty.toLowerCase() === level.toLowerCase();
      const matchesTopics = selectedTopics.length === 0 || p.topics.some((topic) => selectedTopics.includes(topic));
      const matchesPatterns =
        selectedPatterns.length === 0 || p.patterns.some((pattern) => selectedPatterns.includes(pattern));
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
