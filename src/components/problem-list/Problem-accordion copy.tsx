'use client';

import ProblemCard from '@/components/problem-list/problem-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ProblemItemProps } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProblemAccordionProps {
  groupedProblems: Record<string, ProblemItemProps[]>;
  completedProblems: number[];
  showPatterns: boolean;
  showCompanies: boolean;
  showTopics: boolean;
}

export const ProblemAccordion = ({
  groupedProblems,
  completedProblems,
  showPatterns,
  showCompanies,
  showTopics
}: ProblemAccordionProps) => {
  return (
    <Accordion type="multiple" className="space-y-2">
      {Object.entries(groupedProblems).map(([group, problems]) => (
        <AccordionItem key={group} value={group}>
          <AccordionTrigger
            className={cn(
              'text-lg font-semibold capitalize border rounded-lg px-4 bg-white',
              '[&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-300',
              '[&[data-state=closed]]:rounded-lg'
            )}
          >
            <div className="flex items-center">
              {group}
              <span className="ml-2 text-sm text-muted-foreground">({problems.length})</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
              {problems.map((problem) => (
                <ProblemCard
                  key={problem.id}
                  {...problem}
                  completed={completedProblems.includes(problem.id)}
                  showPatterns={showPatterns}
                  showCompanies={showCompanies}
                  showTopics={showTopics}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
