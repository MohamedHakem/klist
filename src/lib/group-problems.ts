import { ProblemItemProps } from './types';

export const groupProblems = (problems: ProblemItemProps[], groupBy: string) => {
  if (groupBy === 'default') return { default: problems };

  return problems.reduce((acc, problem) => {
    let groupKey: string;

    switch (groupBy) {
      case 'pattern':
        problem.patterns.forEach((pattern) => {
          if (!acc[pattern]) acc[pattern] = [];
          acc[pattern].push(problem);
        });
        return acc;
      case 'company':
        problem.companies.forEach((company) => {
          if (!acc[company]) acc[company] = [];
          acc[company].push(problem);
        });
        return acc;
      case 'topic':
        problem.topics.forEach((topic) => {
          if (!acc[topic]) acc[topic] = [];
          acc[topic].push(problem);
        });
        return acc;
      case 'difficulty':
        groupKey = problem.difficulty;
        break;
      default:
        groupKey = 'default';
    }

    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(problem);
    return acc;
  }, {} as Record<string, ProblemItemProps[]>);
};
