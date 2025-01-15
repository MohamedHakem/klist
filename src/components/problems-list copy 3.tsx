'use client';

import QuestionCard from '@/components/problem-list/problem-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getQuestions } from '@/lib/get-problems';
import { cn } from '@/lib/utils';
import { useQueryState } from 'nuqs';
import { useMemo } from 'react';
import { ProblemListTabs } from './problems-tabs';

interface CustomList {
  name: string;
  params: string;
}

const useVisibilityQueryState = (key: string) => {
  return useQueryState(key, {
    defaultValue: true,
    parse: (value) => value !== 'false',
    serialize: (value) => (value ? 'true' : 'false')
  });
};

const QuestionList = () => {
  const [customLists] = useLocalStorage<CustomList[]>('customLists', []);

  const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
  const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
  const [level] = useQueryState('level', { defaultValue: 'all' });

  const [showPatterns] = useVisibilityQueryState('showPatterns');
  const [showCompanies] = useVisibilityQueryState('showCompanies');
  const [showTopics] = useVisibilityQueryState('showTopics');

  const questions = getQuestions();
  const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
      return matchesLevel;
    });
  }, [questions, level]);

  const todoQuestions = useMemo(
    () => questions.filter((q) => !completedQuestions.includes(q.id)),
    [questions, completedQuestions]
  );
  const completedList = useMemo(
    () => questions.filter((q) => completedQuestions.includes(q.id)),
    [questions, completedQuestions]
  );

  const sortedQuestions = useMemo(() => {
    return [...filteredQuestions].sort((a, b) => {
      if (sortBy === 'difficulty') {
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      } else if (sortBy === 'timeEstimate') {
        return a.timeEstimate - b.timeEstimate;
      }
      return a.id - b.id;
    });
  }, [filteredQuestions, sortBy]);

  const groupedQuestions = useMemo(() => {
    if (groupBy === 'default') return { default: sortedQuestions };

    return sortedQuestions.reduce((acc, question) => {
      let groupKey: string;

      switch (groupBy) {
        case 'pattern':
          question.patterns.forEach((pattern) => {
            if (!acc[pattern]) acc[pattern] = [];
            acc[pattern].push(question);
          });
          return acc;
        case 'company':
          question.companies.forEach((company) => {
            if (!acc[company]) acc[company] = [];
            acc[company].push(question);
          });
          return acc;
        case 'topic':
          question.topics.forEach((topic) => {
            if (!acc[topic]) acc[topic] = [];
            acc[topic].push(question);
          });
          return acc;
        case 'difficulty':
          groupKey = question.difficulty;
          break;
        default:
          groupKey = 'default';
      }

      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(question);
      return acc;
    }, {} as Record<string, typeof sortedQuestions>);
  }, [sortedQuestions, groupBy]);

  const hasCustomFilters = useMemo(() => {
    return !!(level || groupBy || showPatterns || showCompanies || showTopics);
  }, [level, groupBy, showPatterns, showCompanies, showTopics]);

  const renderQuestionList = (questions: typeof sortedQuestions) => {
    if (groupBy === 'default') {
      return (
        <ul className="space-y-2">
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              {...question}
              completed={completedQuestions.includes(question.id)}
              showPatterns={showPatterns}
              showCompanies={showCompanies}
              showTopics={showTopics}
            />
          ))}
        </ul>
      );
    }

    return (
      <Accordion type="multiple" className="space-y-2">
        {Object.entries(groupedQuestions).map(([group, questions]) => (
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
                <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
                {questions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    {...question}
                    completed={completedQuestions.includes(question.id)}
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

  return (
    <ProblemListTabs
      problems={sortedQuestions}
      todoProblems={todoQuestions}
      completedList={completedList}
      customLists={customLists}
      hasCustomFilters={hasCustomFilters}
      sessionCustomFilters={null}
      renderProblemsList={renderQuestionList}
    />
  );
};

export default QuestionList;
