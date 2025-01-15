'use client';

import QuestionCard from '@/components/problem-list/problem-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getQuestions } from '@/lib/get-problems';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

interface CustomList {
  name: string;
  params: string;
  temporary?: boolean;
}

const QuestionList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [customLists] = useState<CustomList[]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('customLists') || '[]');
    }
    return [];
  });
  const [, setIsDrawerOpen] = useState(false);
  // const [newListName, setNewListName] = useState('');
  const [sessionCustomFilters, setSessionCustomFilters] = useState<string | null>(null);

  const currentList = searchParams.get('list') || 'all';
  const hasCustomFilters = searchParams.toString() !== `list=${currentList}`;

  const groupBy = searchParams.get('groupBy') || 'default';
  const sortBy = searchParams.get('sortBy') || 'default';
  const level = searchParams.get('level') || 'all';
  const hideCompleted = searchParams.get('hideCompleted') === 'true';

  const questions = getQuestions();

  // Get unique patterns from all questions
  // const patterns = [...new Set(questions.flatMap((q) => q.patterns || []).filter(Boolean))];
  // console.log('🚀 ~ Unique patterns:', patterns);

  const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

  const filteredQuestions = questions.filter((q) => {
    const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
    const showQuestion = !hideCompleted || !completedQuestions.includes(q.id);
    return matchesLevel && showQuestion;
  });

  const todoQuestions = questions.filter((q) => !completedQuestions.includes(q.id));
  const completedList = questions.filter((q) => completedQuestions.includes(q.id));

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortBy === 'difficulty') {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    } else if (sortBy === 'timeEstimate') {
      return a.timeEstimate - b.timeEstimate;
    }
    return a.id - b.id;
  });

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

  const loadCustomList = (params: string) => {
    router.push(`?${params}`);
  };

  const renderQuestionList = (questions: typeof sortedQuestions) => {
    if (groupBy === 'default') {
      return (
        <ul className="space-y-2">
          {questions.map((question) => (
            <QuestionCard key={question.id} {...question} completed={completedQuestions.includes(question.id)} />
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
                  <QuestionCard key={question.id} {...question} completed={completedQuestions.includes(question.id)} />
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  useEffect(() => {
    console.log('re-render, searchParams or hasCustomFilter changed');
    if (hasCustomFilters) {
      setSessionCustomFilters(searchParams.toString());
    }
  }, [searchParams, hasCustomFilters]);

  useEffect(() => {
    const isCustomList = searchParams.get('list') === 'custom';
    if (isCustomList) {
      const params = new URLSearchParams(searchParams);
      params.delete('list'); // Remove list param to store only filters
    }
  }, [searchParams]);

  // Track current filters
  useEffect(() => {
    const currentList = searchParams.get('list');
    if (currentList === 'custom' || hasCustomFilters) {
      // Save current filters to session storage
      const params = new URLSearchParams(searchParams.toString());
      params.delete('list'); // Store only filters
      sessionStorage.setItem('currentCustomFilters', params.toString());
    }
  }, [searchParams, hasCustomFilters]);

  // Load custom filters when switching back to custom tab
  const handleTabChange = (value: string) => {
    if (value === 'custom') {
      const savedFilters = sessionStorage.getItem('currentCustomFilters');
      if (savedFilters) {
        const params = new URLSearchParams(savedFilters);
        params.set('list', 'custom');
        router.push(`?${params.toString()}`);
      }
    } else if (customLists.find((l) => l.name === value)) {
      const list = customLists.find((l) => l.name === value);
      loadCustomList(list!.params);
    } else {
      const params = new URLSearchParams();
      params.set('list', value);
      router.push(`?${params.toString()}`);
    }
  };

  // Monitor filter changes
  useEffect(() => {
    const currentList = searchParams.get('list');
    const params = new URLSearchParams(searchParams.toString());

    // If filters exist and we're not already on custom tab
    const hasFilters = Array.from(params.entries()).some(([key, value]) => key !== 'list' && value);

    if (hasFilters && currentList !== 'custom') {
      // Save current filters and switch to custom tab
      sessionStorage.setItem('currentCustomFilters', params.toString());
      params.set('list', 'custom');
      router.push(`?${params.toString()}`);
    }
  }, [searchParams, router]);

  return (
    <Tabs value={currentList} onValueChange={handleTabChange}>
      <TabsList
        defaultValue={hasCustomFilters || sessionCustomFilters ? 'custom' : ''}
        className="flex justify-start border border-accent-foreground/10 md:gap-1 p-0 md:p-1 rounded-md md:px-1 md:py-1 h-12 md:h-fit bg-white"
      >
        <div className="relative flex overflow-x-scroll md:overflow-hidden">
          <div className="relative flex overflow-x-scroll md:overflow-hidden py-2 md:py-1 px-1.5 md:px-1 shadow-inner bg-white/70 rounded-md">
            <div className="flex w-max space-x-1 md:space-x-2 relative">
              <TabsTrigger value="all">
                All
                <span className="text-xs ml-2">({questions.length})</span>
              </TabsTrigger>
              <TabsTrigger value="todo">
                To Do
                <span className="text-xs ml-2">({todoQuestions.length})</span>
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed
                <span className="text-xs ml-2">({completedList.length})</span>
              </TabsTrigger>

              {customLists.map((list) => (
                <TabsTrigger key={list.name} value={list.name}>
                  {list.name}
                </TabsTrigger>
              ))}

              {(hasCustomFilters || sessionCustomFilters) && (
                <TabsTrigger value="custom" className="group py-[3px] md:h-[38px]">
                  Custom
                  <div
                    className="ml-2 bg-black text-white border py-1 md:py-[5px] px-2.5 text-xs rounded-md hover:bg-black/80 transition-transform duration-50 ease-in-out transform hover:scale-95 active:scale-90"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    Save
                  </div>
                </TabsTrigger>
              )}
            </div>
          </div>
          <div className="md:hidden absolute top-0 bottom-0 right-0 w-4 h-[48px] bg-gradient-to-l from-[#e0e0e080] to-transparent m-auto"></div>
        </div>
      </TabsList>

      <TabsContent value="all">{renderQuestionList(sortedQuestions)}</TabsContent>

      <TabsContent value="todo">{renderQuestionList(todoQuestions)}</TabsContent>

      <TabsContent value="completed">{renderQuestionList(completedList)}</TabsContent>

      {customLists.map((list) => (
        <TabsContent key={list.name} value={list.name}>
          {renderQuestionList(sortedQuestions)}
        </TabsContent>
      ))}

      {(hasCustomFilters || sessionCustomFilters) && (
        <TabsContent value="custom">{renderQuestionList(sortedQuestions)}</TabsContent>
      )}
    </Tabs>
  );
};

export default QuestionList;
