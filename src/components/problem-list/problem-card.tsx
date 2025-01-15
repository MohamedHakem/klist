'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { useIsMobile } from '@/hooks/use-mobile';
import { createToggleCompleted } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ProblemItemProps } from '@/lib/types';

interface ProblemCardProps extends ProblemItemProps {
  showPatterns: boolean;
  showCompanies: boolean;
  showTopics: boolean;
}

export const ProblemCard = ({
  id,
  title,
  difficulty,
  timeEstimate,
  topics,
  patterns,
  companies,
  leetCodeUrl,
  completed: initialCompleted,
  showPatterns,
  showCompanies,
  showTopics
}: ProblemCardProps) => {
  const [completed, setCompleted] = useState(initialCompleted);
  const isMobile = useIsMobile();

  const [, setCompletedProblems] = useLocalStorage<number[]>('completedProblems', []);
  const toggleCompleted = createToggleCompleted(setCompletedProblems);

  const handleToggleCompleted = async () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    toggleCompleted(id, newCompleted);
  };

  useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  return (
    <li
      className={cn(
        'group flex items-center gap-1.5 md:gap-3 rounded-lg border py-3 px-2 transition-colors cursor-pointer',
        'transition-all ease-in-out duration-25 hover:scale-[99%] active:scale-[98%] select-none',
        completed ? 'bg-green-100' : 'bg-white'
      )}
      onClick={handleToggleCompleted}
    >
      {/* Status & Number */}
      <div className="flex items-center">
        <button className={cn('hover:text-primary transition-colors', completed ? 'text-green-500' : '')}>
          <CircleCheck
            className={cn(
              'w-9 h-9 md:w-10 md:h-10',
              completed ? 'text-white fill-green-400' : 'text-white fill-[#ccc]'
            )}
          />
        </button>
      </div>

      {/* Problem Info */}
      <div className="flex flex-1 items-center justify-between flex-wrap">
        <div className="flex flex-col gap-1">
          <h3 className="font-medium leading-none flex gap-1 items-center">
            <span className="">{id}.</span>
            <a href={leetCodeUrl} target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center">
              <span className="sr-only">Open in LeetCode</span>
              <span
                className={cn(
                  'text-sm md:text-lg max-w-44 md:max-w-[24rem] truncate',
                  completed ? 'text-gray-600' : 'text-blue-600'
                )}
              >
                {title.replace('Lowest Common Ancestor', 'LCA')}
              </span>
              {showCompanies && (
                <span
                  className={cn(
                    'px-1 md:px-2 md:py-1 text-xs py-0.5 rounded-md',
                    completed ? 'bg-orange-100 md:bg-orange-100' : 'bg-yellow-100 md:bg-yellow-200'
                  )}
                >
                  {companies[0]} {companies.length > 1 ? `+${companies.length - 1}` : ''}
                </span>
              )}
            </a>
          </h3>
          <div className="flex flex-wrap items-center text-[10px] md:text-xs">
            <span
              className={`
              ${difficulty === 'Easy' ? 'text-green-600' : ''}
              ${difficulty === 'Medium' ? 'text-yellow-600' : ''}
              ${difficulty === 'Hard' ? 'text-red-600' : ''}
            `}
            >
              {difficulty}
            </span>
            <span className="text-muted-foreground mx-0.5 md:mx-2">•</span>
            <span className="text-muted-foreground">{timeEstimate}min</span>
            {showTopics && (
              <div className="flex flex-wrap gap-0.5 md:gap-2 ml-1 md:ml-2">
                {topics.map((topic, index) => (
                  <div key={index} className="flex gap-0.5">
                    <span className="text-muted-foreground mr-2">•</span>
                    <span key={topic} className="text-[10px] md:text-xs text-muted-foreground">
                      {topic === 'Dynamic Programming' ? 'DP' : topic}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {showPatterns && (
              <div className="flex flex-wrap gap-0.5 md:gap-2 ml-1 md:ml-2">
                {patterns.map((pattern, index) =>
                  topics.includes(pattern) ? null : (
                    <div key={index} className="flex gap-0.5 md:gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-[10px] md:text-xs text-muted-foreground">
                        {isMobile
                          ? pattern
                              .replace(/Dynamic Programming/g, 'DP')
                              .replace(/Depth-First Search \(DFS\)/g, 'DFS')
                              .replace(/Depth First Search \(DFS\)/g, 'DFS')
                              .replace(/Breadth-First Search \(BFS\)/g, 'BFS')
                              .replace(/Breadth First Search \(BFS\)/g, 'BFS')
                              .replace(/ and /g, ' & ')
                              .replace(/String Manipulation/g, 'String Ops')
                          : pattern}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
