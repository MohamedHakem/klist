'use client';

import { ProblemListTabs } from './problems-tabs';
import { ProblemProvider } from '@/context/ProblemContext';
import { useVisibilityQueryState } from '@/hooks/use-visibility-query-state';
import { ProblemAccordion } from '@/components/problem-list/Problem-accordion';
import { ProblemListGroup } from '@/components/problem-list/problem-list-group';
import { useProblemContext } from '@/context/ProblemContext';

const ProblemList = () => {
  const [showPatterns] = useVisibilityQueryState('showPatterns');
  const [showCompanies] = useVisibilityQueryState('showCompanies');
  const [showTopics] = useVisibilityQueryState('showTopics');

  const { problems, todoProblems, completedList, groupedProblems, completedProblems, groupBy } = useProblemContext();

  const renderProblemList = (problems: typeof problems) => {
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
      problems={problems}
      todoProblems={todoProblems}
      completedList={completedList}
      renderProblemsList={renderProblemList}
    />
  );
};

export default function ProblemListWrapper() {
  return (
    <ProblemProvider>
      <ProblemList />
    </ProblemProvider>
  );
}
