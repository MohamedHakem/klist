import { JSX } from 'react';

// type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type ProblemItemProps = {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: number;
  topics: string[];
  patterns: string[];
  companies: string[];
  leetCodeUrl: string;
  videoUrl?: string;
  completed: boolean;
  showPatterns?: boolean;
  showCompanies?: boolean;
  showTopics?: boolean;
};

type problem = ProblemItemProps;

type CustomList = {
  name: string;
  params: string;
  temporary?: boolean;
};

export type ProblemTabsProps = {
  problems: problem[];
  todoProblems: problem[];
  completedList: problem[];
  customLists: CustomList[];
  hasCustomFilters: boolean;
  sessionCustomFilters: string | null;
  renderProblemsList: (problems: problem[]) => JSX.Element;
};
