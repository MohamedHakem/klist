'use client';

import { ProblemAccordion } from '@/components/problem-list/Problem-accordion';
import { ProblemListGroup } from '@/components/problem-list/problem-list-group';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useVisibilityQueryState } from '@/hooks/use-visibility-query-state';
import { getProblems } from '@/lib/get-problems';
import { groupProblems } from '@/lib/utils';
import { useQueryState } from 'nuqs';
import { useMemo } from 'react';
import { ProblemListTabs } from './problems-tabs';

interface CustomList {
  name: string;
  params: string;
}

const ProblemList = () => {
  const [customLists] = useLocalStorage<CustomList[]>('customLists', []);

  const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
  const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
  const [level] = useQueryState('level', { defaultValue: 'all' });

  const [showPatterns] = useVisibilityQueryState('showPatterns');
  const [showCompanies] = useVisibilityQueryState('showCompanies');
  const [showTopics] = useVisibilityQueryState('showTopics');

  const problems = getProblems();
  const [completedProblems] = useLocalStorage<number[]>('completedProblems', []);

  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      const matchesLevel = level === 'all' || p.difficulty.toLowerCase() === level.toLowerCase();
      return matchesLevel;
    });
  }, [problems, level]);

  const todoProblems = useMemo(
    () => problems.filter((p) => !completedProblems.includes(p.id)),
    [problems, completedProblems]
  );
  const completedList = useMemo(
    () => problems.filter((p) => completedProblems.includes(p.id)),
    [problems, completedProblems]
  );

  const sortedProblems = useMemo(() => {
    return [...filteredProblems].sort((a, b) => {
      if (sortBy === 'difficulty') {
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      } else if (sortBy === 'timeEstimate') {
        return a.timeEstimate - b.timeEstimate;
      }
      return a.id - b.id;
    });
  }, [filteredProblems, sortBy]);

  const groupedProblems = useMemo(() => groupProblems(sortedProblems, groupBy), [sortedProblems, groupBy]);

  const hasCustomFilters = useMemo(() => {
    return !!(level || groupBy || showPatterns || showCompanies || showTopics);
  }, [level, groupBy, showPatterns, showCompanies, showTopics]);

  const renderProblemList = (problems: typeof sortedProblems) => {
    if (groupBy === 'default') {
      return (
        <ProblemListGroup
          problems={problems}
          completedProblems={completedProblems}
          showPatterns={showPatterns}
          showCompanies={showCompanies}
          showTopics={showTopics}
        />
      );
    }

    return (
      <ProblemAccordion
        groupedProblems={groupedProblems}
        completedProblems={completedProblems}
        showPatterns={showPatterns}
        showCompanies={showCompanies}
        showTopics={showTopics}
      />
    );
  };

  return (
    <ProblemListTabs
      problems={sortedProblems}
      todoProblems={todoProblems}
      completedList={completedList}
      customLists={customLists}
      hasCustomFilters={hasCustomFilters}
      sessionCustomFilters={null}
      renderProblemsList={renderProblemList}
    />
  );
};

export default ProblemList;
