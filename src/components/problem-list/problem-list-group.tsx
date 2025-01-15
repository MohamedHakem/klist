'use client';

import { ProblemCard } from '@/components/problem-list/problem-card';
import { ProblemItemProps } from '@/lib/types';

export const ProblemListGroup = ({ problems }: { problems: ProblemItemProps[] }) => {
  return (
    <ul className="space-y-2">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} {...problem} />
      ))}
    </ul>
  );
};
