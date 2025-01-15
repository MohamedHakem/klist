'use client';

import { ProblemAccordion } from '@/components/problem-list/Problem-accordion';
import { ProblemListGroup } from '@/components/problem-list/problem-list-group';
import { ProblemItemProps } from '@/lib/types';

export const ProblemTabContent = ({ problems, groupBy }: { problems: ProblemItemProps[]; groupBy: string }) => {
  if (groupBy === 'default') {
    return <ProblemListGroup problems={problems} />;
  }

  return <ProblemAccordion groupedProblems={problems} />;
};
