import { Problems } from './problems';
import { ProblemItemProps } from './types';

export function getProblems(): ProblemItemProps[] {
  // fetch from an API or db later
  return Problems;
}
