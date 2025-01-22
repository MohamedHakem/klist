'use client';

import { ProblemProvider } from '@/context/problem-context';
// import { ProblemTabs } from '@/components/problem-list/problem-tabs-framer-motion';
import { ProblemTabs } from '@/components/problem-list/problem-tabs-swipeable';

export const ProblemList = () => {
  return (
    <ProblemProvider>
      <ProblemTabs />
    </ProblemProvider>
  );
};

export default ProblemList;
