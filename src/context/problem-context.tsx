'use client';

import { createContext, useContext } from 'react';
import { useProblemData } from '@/hooks/use-problem-data';

const ProblemContext = createContext<ReturnType<typeof useProblemData> | null>(null);

export const ProblemProvider = ({ children }: { children: React.ReactNode }) => {
  const problemData = useProblemData();

  return <ProblemContext.Provider value={problemData}>{children}</ProblemContext.Provider>;
};

export const useProblemContext = () => {
  const context = useContext(ProblemContext);
  if (!context) throw new Error('useProblemContext must be used within a ProblemProvider');
  return context;
};
