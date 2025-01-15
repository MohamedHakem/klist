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

// 'use client';

// import QuestionCard from '@/components/problem-card';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import { useLocalStorage } from '@/hooks/use-local-storage';
// import { getQuestions } from '@/lib/get-problems';
// import { cn } from '@/lib/utils';
// import { useQueryState } from 'nuqs';
// import { useEffect, useMemo, useState } from 'react';
// import { ProblemListTabs } from './problems-tabs';
// import { Button } from '@/components/ui/button';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Input } from '@/components/ui/input';

// interface CustomList {
//   name: string;
//   params: string;
// }

// const QuestionList = () => {
//   const [customLists, setCustomLists] = useLocalStorage<CustomList[]>('customLists', []);
//   const [activeTab, setActiveTab] = useQueryState('tab', { defaultValue: 'all' });

//   const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
//   const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
//   const [level] = useQueryState('level', { defaultValue: 'all' });

//   // const createVisibilityQueryState = (key: string) => {
//   //   return useQueryState(key, {
//   //     defaultValue: true,
//   //     parse: (value) => value !== 'false',
//   //     serialize: (value) => (value ? 'true' : 'false')
//   //   });
//   // };

//   const [showPatterns] = useVisibilityQueryState('showPatterns');
//   const [showCompanies] = useVisibilityQueryState('showCompanies');
//   const [showTopics] = useVisibilityQueryState('showTopics');

//   const questions = getQuestions();
//   const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

//   const filteredQuestions = useMemo(() => {
//     return questions.filter((q) => {
//       const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
//       return matchesLevel;
//     });
//   }, [questions, level]);

//   const todoQuestions = useMemo(
//     () => questions.filter((q) => !completedQuestions.includes(q.id)),
//     [questions, completedQuestions]
//   );
//   const completedList = useMemo(
//     () => questions.filter((q) => completedQuestions.includes(q.id)),
//     [questions, completedQuestions]
//   );

//   const sortedQuestions = useMemo(() => {
//     return [...filteredQuestions].sort((a, b) => {
//       if (sortBy === 'difficulty') {
//         const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
//         return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
//       } else if (sortBy === 'timeEstimate') {
//         return a.timeEstimate - b.timeEstimate;
//       }
//       return a.id - b.id;
//     });
//   }, [filteredQuestions, sortBy]);

//   const groupedQuestions = useMemo(() => {
//     if (groupBy === 'default') return { default: sortedQuestions };

//     return sortedQuestions.reduce((acc, question) => {
//       let groupKey: string;

//       switch (groupBy) {
//         case 'pattern':
//           question.patterns.forEach((pattern) => {
//             if (!acc[pattern]) acc[pattern] = [];
//             acc[pattern].push(question);
//           });
//           return acc;
//         case 'company':
//           question.companies.forEach((company) => {
//             if (!acc[company]) acc[company] = [];
//             acc[company].push(question);
//           });
//           return acc;
//         case 'topic':
//           question.topics.forEach((topic) => {
//             if (!acc[topic]) acc[topic] = [];
//             acc[topic].push(question);
//           });
//           return acc;
//         case 'difficulty':
//           groupKey = question.difficulty;
//           break;
//         default:
//           groupKey = 'default';
//       }

//       if (!acc[groupKey]) acc[groupKey] = [];
//       acc[groupKey].push(question);
//       return acc;
//     }, {} as Record<string, typeof sortedQuestions>);
//   }, [sortedQuestions, groupBy]);

//   const hasCustomFilters = useMemo(() => {
//     return !!(level || groupBy || showPatterns || showCompanies || showTopics);
//   }, [level, groupBy, showPatterns, showCompanies, showTopics]);

//   useEffect(() => {
//     if (hasCustomFilters && activeTab !== 'custom') {
//       setCustomTabVisible(true);
//     }
//   }, [hasCustomFilters, activeTab]);

//   const handleSaveCustomList = (name: string) => {
//     const params = new URLSearchParams();
//     if (level) params.set('level', level);
//     if (groupBy) params.set('groupBy', groupBy);
//     if (showPatterns) params.set('showPatterns', showPatterns.toString());
//     if (showCompanies) params.set('showCompanies', showCompanies.toString());
//     if (showTopics) params.set('showTopics', showTopics.toString());

//     const newCustomList = { name, params: params.toString() };
//     setCustomLists([...customLists, newCustomList]);
//   };

//   const renderQuestionList = (questions: typeof sortedQuestions) => {
//     if (groupBy === 'default') {
//       return (
//         <ul className="space-y-2">
//           {questions.map((question) => (
//             <QuestionCard
//               key={question.id}
//               {...question}
//               completed={completedQuestions.includes(question.id)}
//               showPatterns={showPatterns}
//               showCompanies={showCompanies}
//               showTopics={showTopics}
//             />
//           ))}
//         </ul>
//       );
//     }

//     return (
//       <Accordion type="multiple" className="space-y-2">
//         {Object.entries(groupedQuestions).map(([group, questions]) => (
//           <AccordionItem key={group} value={group}>
//             <AccordionTrigger
//               className={cn(
//                 'text-lg font-semibold capitalize border rounded-lg px-4 bg-white',
//                 '[&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-300',
//                 '[&[data-state=closed]]:rounded-lg'
//               )}
//             >
//               <div className="flex items-center">
//                 {group}
//                 <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
//               </div>
//             </AccordionTrigger>
//             <AccordionContent>
//               <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
//                 {questions.map((question) => (
//                   <QuestionCard
//                     key={question.id}
//                     {...question}
//                     completed={completedQuestions.includes(question.id)}
//                     showPatterns={showPatterns}
//                     showCompanies={showCompanies}
//                     showTopics={showTopics}
//                   />
//                 ))}
//               </ul>
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     );
//   };

//   return (
//     <div>
//       <ProblemListTabs
//         customTabVisible={customTabVisible}
//         customLists={customLists}
//         problems={sortedQuestions}
//         todoProblems={todoQuestions}
//         completedList={completedList}
//         renderProblemsList={renderQuestionList}
//       />

//       {customTabVisible && (
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button className="ml-2">Save</Button>
//           </PopoverTrigger>
//           <PopoverContent>
//             <Input
//               placeholder="Name your list"
//               onChange={(e) => {
//                 const name = e.target.value;
//                 if (name) {
//                   handleSaveCustomList(name);
//                 }
//               }}
//             />
//           </PopoverContent>
//         </Popover>
//       )}
//     </div>
//   );
// };

// export default QuestionList;

// // 'use client';

// // import QuestionCard from '@/components/problem-card';
// // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// // import { useLocalStorage } from '@/hooks/use-local-storage';
// // import { getQuestions } from '@/lib/get-problems';
// // import { cn } from '@/lib/utils';
// // import { useQueryState } from 'nuqs';
// // import { useEffect, useMemo, useState } from 'react';
// // import { ProblemListTabs } from './problems-tabs';

// // interface CustomList {
// //   name: string;
// //   params: string;
// //   temporary?: boolean;
// // }

// // const QuestionList = () => {
// //   const [customLists, setCustomLists] = useState<CustomList[]>([]);

// //   useEffect(() => {
// //     if (typeof window !== 'undefined') {
// //       setCustomLists(JSON.parse(localStorage.getItem('customLists') || '[]'));
// //     }
// //   }, []);

// //   const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
// //   const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
// //   const [level] = useQueryState('level', { defaultValue: 'all' });

// //   // Refactored to avoid repetition
// //   const createVisibilityQueryState = (key: string) => {
// //     return useQueryState(key, {
// //       defaultValue: true,
// //       parse: (value) => value !== 'false',
// //       serialize: (value) => (value ? 'true' : 'false')
// //     });
// //   };

// //   const [showPatterns] = createVisibilityQueryState('showPatterns');
// //   const [showCompanies] = createVisibilityQueryState('showCompanies');
// //   const [showTopics] = createVisibilityQueryState('showTopics');

// //   const questions = getQuestions();
// //   const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

// //   const filteredQuestions = useMemo(() => {
// //     return questions.filter((q) => {
// //       const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
// //       return matchesLevel;
// //     });
// //   }, [questions, level]);

// //   const todoQuestions = useMemo(
// //     () => questions.filter((q) => !completedQuestions.includes(q.id)),
// //     [questions, completedQuestions]
// //   );
// //   const completedList = useMemo(
// //     () => questions.filter((q) => completedQuestions.includes(q.id)),
// //     [questions, completedQuestions]
// //   );

// //   const sortedQuestions = useMemo(() => {
// //     return [...filteredQuestions].sort((a, b) => {
// //       if (sortBy === 'difficulty') {
// //         const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
// //         return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
// //       } else if (sortBy === 'timeEstimate') {
// //         return a.timeEstimate - b.timeEstimate;
// //       }
// //       return a.id - b.id;
// //     });
// //   }, [filteredQuestions, sortBy]);

// //   const groupedQuestions = useMemo(() => {
// //     if (groupBy === 'default') return { default: sortedQuestions };

// //     return sortedQuestions.reduce((acc, question) => {
// //       let groupKey: string;

// //       switch (groupBy) {
// //         case 'pattern':
// //           question.patterns.forEach((pattern) => {
// //             if (!acc[pattern]) acc[pattern] = [];
// //             acc[pattern].push(question);
// //           });
// //           return acc;
// //         case 'company':
// //           question.companies.forEach((company) => {
// //             if (!acc[company]) acc[company] = [];
// //             acc[company].push(question);
// //           });
// //           return acc;
// //         case 'topic':
// //           question.topics.forEach((topic) => {
// //             if (!acc[topic]) acc[topic] = [];
// //             acc[topic].push(question);
// //           });
// //           return acc;
// //         case 'difficulty':
// //           groupKey = question.difficulty;
// //           break;
// //         default:
// //           groupKey = 'default';
// //       }

// //       if (!acc[groupKey]) acc[groupKey] = [];
// //       acc[groupKey].push(question);
// //       return acc;
// //     }, {} as Record<string, typeof sortedQuestions>);
// //   }, [sortedQuestions, groupBy]);

// //   const renderQuestionList = (questions: typeof sortedQuestions) => {
// //     if (groupBy === 'default') {
// //       return (
// //         <ul className="space-y-2">
// //           {questions.map((question) => (
// //             <QuestionCard
// //               key={question.id}
// //               {...question}
// //               completed={completedQuestions.includes(question.id)}
// //               showPatterns={showPatterns}
// //               showCompanies={showCompanies}
// //               showTopics={showTopics}
// //             />
// //           ))}
// //         </ul>
// //       );
// //     }

// //     return (
// //       <Accordion type="multiple" className="space-y-2">
// //         {Object.entries(groupedQuestions).map(([group, questions]) => (
// //           <AccordionItem key={group} value={group}>
// //             <AccordionTrigger
// //               className={cn(
// //                 'text-lg font-semibold capitalize border rounded-lg px-4 bg-white',
// //                 '[&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-300',
// //                 '[&[data-state=closed]]:rounded-lg'
// //               )}
// //             >
// //               <div className="flex items-center">
// //                 {group}
// //                 <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
// //               </div>
// //             </AccordionTrigger>
// //             <AccordionContent>
// //               <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
// //                 {questions.map((question) => (
// //                   <QuestionCard
// //                     key={question.id}
// //                     {...question}
// //                     completed={completedQuestions.includes(question.id)}
// //                     showPatterns={showPatterns}
// //                     showCompanies={showCompanies}
// //                     showTopics={showTopics}
// //                   />
// //                 ))}
// //               </ul>
// //             </AccordionContent>
// //           </AccordionItem>
// //         ))}
// //       </Accordion>
// //     );
// //   };

// //   const hasCustomFilters = useMemo(() => {
// //     return !!(level || groupBy || showPatterns || showCompanies || showTopics);
// //   }, [level, groupBy, showPatterns, showCompanies, showTopics]);

// //   return (
// //     <ProblemListTabs
// //       problems={sortedQuestions}
// //       todoProblems={todoQuestions}
// //       completedList={completedList}
// //       customLists={customLists}
// //       hasCustomFilters={hasCustomFilters}
// //       sessionCustomFilters={null} // No longer needed
// //       renderProblemsList={renderQuestionList}
// //     />
// //   );
// // };

// // export default QuestionList;

// // // 'use client';

// // // import QuestionCard from '@/components/problem-card';
// // // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// // // import { useLocalStorage } from '@/hooks/use-local-storage';
// // // import { getQuestions } from '@/lib/get-problems';
// // // import { cn } from '@/lib/utils';
// // // import { useQueryState } from 'nuqs';
// // // import { useEffect, useMemo, useState } from 'react';
// // // import { ProblemListTabs } from './problems-tabs';

// // // interface CustomList {
// // //   name: string;
// // //   params: string;
// // //   temporary?: boolean;
// // // }

// // // const QuestionList = () => {
// // //   const [customLists, setCustomLists] = useState<CustomList[]>([]);

// // //   useEffect(() => {
// // //     if (typeof window !== 'undefined') {
// // //       setCustomLists(JSON.parse(localStorage.getItem('customLists') || '[]'));
// // //     }
// // //   }, []);

// // //   const [sessionCustomFilters, setSessionCustomFilters] = useState<string | null>(null);

// // //   const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
// // //   const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
// // //   const [level] = useQueryState('level', { defaultValue: 'all' });
// // //   const [hideCompleted] = useQueryState('hideCompleted', {
// // //     defaultValue: false,
// // //     parse: (value) => value === 'true',
// // //     serialize: (value) => (value ? 'true' : 'false')
// // //   });

// // //   const [showPatterns] = useQueryState('showPatterns', {
// // //     defaultValue: true,
// // //     parse: (value) => value !== 'false',
// // //     serialize: (value) => (value ? 'true' : 'false')
// // //   });

// // //   const [showCompanies] = useQueryState('showCompanies', {
// // //     defaultValue: true,
// // //     parse: (value) => value !== 'false',
// // //     serialize: (value) => (value ? 'true' : 'false')
// // //   });

// // //   const [showTopics] = useQueryState('showTopics', {
// // //     defaultValue: true,
// // //     parse: (value) => value !== 'false',
// // //     serialize: (value) => (value ? 'true' : 'false')
// // //   });

// // //   const questions = getQuestions();
// // //   const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

// // //   const filteredQuestions = questions.filter((q) => {
// // //     const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
// // //     const showQuestion = !hideCompleted || !completedQuestions.includes(q.id);
// // //     return matchesLevel && showQuestion;
// // //   });

// // //   const todoQuestions = questions.filter((q) => !completedQuestions.includes(q.id));
// // //   const completedList = questions.filter((q) => completedQuestions.includes(q.id));

// // //   const sortedQuestions = useMemo(() => {
// // //     return [...filteredQuestions].sort((a, b) => {
// // //       if (sortBy === 'difficulty') {
// // //         const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
// // //         return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
// // //       } else if (sortBy === 'timeEstimate') {
// // //         return a.timeEstimate - b.timeEstimate;
// // //       }
// // //       return a.id - b.id;
// // //     });
// // //   }, [filteredQuestions, sortBy]);

// // //   const groupedQuestions = useMemo(() => {
// // //     if (groupBy === 'default') return { default: sortedQuestions };

// // //     return sortedQuestions.reduce((acc, question) => {
// // //       let groupKey: string;

// // //       switch (groupBy) {
// // //         case 'pattern':
// // //           question.patterns.forEach((pattern) => {
// // //             if (!acc[pattern]) acc[pattern] = [];
// // //             acc[pattern].push(question);
// // //           });
// // //           return acc;
// // //         case 'company':
// // //           question.companies.forEach((company) => {
// // //             if (!acc[company]) acc[company] = [];
// // //             acc[company].push(question);
// // //           });
// // //           return acc;
// // //         case 'topic':
// // //           question.topics.forEach((topic) => {
// // //             if (!acc[topic]) acc[topic] = [];
// // //             acc[topic].push(question);
// // //           });
// // //           return acc;
// // //         case 'difficulty':
// // //           groupKey = question.difficulty;
// // //           break;
// // //         default:
// // //           groupKey = 'default';
// // //       }

// // //       if (!acc[groupKey]) acc[groupKey] = [];
// // //       acc[groupKey].push(question);
// // //       return acc;
// // //     }, {} as Record<string, typeof sortedQuestions>);
// // //   }, [sortedQuestions, groupBy]);

// // //   const renderQuestionList = (questions: typeof sortedQuestions) => {
// // //     if (groupBy === 'default') {
// // //       return (
// // //         <ul className="space-y-2">
// // //           {questions.map((question) => (
// // //             <QuestionCard
// // //               key={question.id}
// // //               {...question}
// // //               completed={completedQuestions.includes(question.id)}
// // //               showPatterns={showPatterns}
// // //               showCompanies={showCompanies}
// // //               showTopics={showTopics}
// // //             />
// // //           ))}
// // //         </ul>
// // //       );
// // //     }

// // //     return (
// // //       <Accordion type="multiple" className="space-y-2">
// // //         {Object.entries(groupedQuestions).map(([group, questions]) => (
// // //           <AccordionItem key={group} value={group}>
// // //             <AccordionTrigger
// // //               className={cn(
// // //                 'text-lg font-semibold capitalize border rounded-lg px-4 bg-white',
// // //                 '[&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-300',
// // //                 '[&[data-state=closed]]:rounded-lg'
// // //               )}
// // //             >
// // //               <div className="flex items-center">
// // //                 {group}
// // //                 <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
// // //               </div>
// // //             </AccordionTrigger>
// // //             <AccordionContent>
// // //               <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
// // //                 {questions.map((question) => (
// // //                   <QuestionCard
// // //                     key={question.id}
// // //                     {...question}
// // //                     completed={completedQuestions.includes(question.id)}
// // //                     showPatterns={showPatterns}
// // //                     showCompanies={showCompanies}
// // //                     showTopics={showTopics}
// // //                   />
// // //                 ))}
// // //               </ul>
// // //             </AccordionContent>
// // //           </AccordionItem>
// // //         ))}
// // //       </Accordion>
// // //     );
// // //   };

// // //   const hasCustomFilters = useMemo(() => {
// // //     return !!(level || groupBy || showPatterns || showCompanies || showTopics);
// // //   }, [level, groupBy, showPatterns, showCompanies, showTopics]);

// // //   useEffect(() => {
// // //     if (typeof window !== 'undefined' && hasCustomFilters) {
// // //       setSessionCustomFilters(new URLSearchParams(window.location.search).toString());
// // //     }
// // //   }, [hasCustomFilters]);

// // //   return (
// // //     <ProblemListTabs
// // //       problems={sortedQuestions}
// // //       todoProblems={todoQuestions}
// // //       completedList={completedList}
// // //       customLists={customLists}
// // //       hasCustomFilters={hasCustomFilters}
// // //       sessionCustomFilters={sessionCustomFilters}
// // //       renderProblemsList={renderQuestionList}
// // //     />
// // //   );
// // // };

// // // export default QuestionList;

// // // // 'use client';

// // // // import QuestionCard from '@/components/problem-card';
// // // // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// // // // import { useLocalStorage } from '@/hooks/use-local-storage';
// // // // import { getQuestions } from '@/lib/get-problems';
// // // // import { cn } from '@/lib/utils';
// // // // import { useQueryState } from 'nuqs';
// // // // import { useEffect, useMemo, useState } from 'react';
// // // // import { ProblemListTabs } from './problems-tabs';

// // // // interface CustomList {
// // // //   name: string;
// // // //   params: string;
// // // //   temporary?: boolean;
// // // // }

// // // // const QuestionList = () => {
// // // //   const [customLists] = useState<CustomList[]>(() => {
// // // //     if (typeof window !== 'undefined') {
// // // //       return JSON.parse(localStorage.getItem('customLists') || '[]');
// // // //     }
// // // //     return [];
// // // //   });

// // // //   const [sessionCustomFilters, setSessionCustomFilters] = useState<string | null>(null);

// // // //   // Query parameters with nuqs
// // // //   // const [currentList] = useQueryState('list', { defaultValue: 'all' });
// // // //   const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
// // // //   const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
// // // //   const [level] = useQueryState('level', { defaultValue: 'all' });
// // // //   const [hideCompleted] = useQueryState('hideCompleted', {
// // // //     defaultValue: false,
// // // //     parse: (value) => value === 'true',
// // // //     serialize: (value) => (value ? 'true' : 'false')
// // // //   });

// // // //   // New query parameters for toggling visibility
// // // //   const [showPatterns] = useQueryState('showPatterns', {
// // // //     defaultValue: true,
// // // //     parse: (value) => value !== 'false',
// // // //     serialize: (value) => (value ? 'true' : 'false')
// // // //   });

// // // //   const [showCompanies] = useQueryState('showCompanies', {
// // // //     defaultValue: true,
// // // //     parse: (value) => value !== 'false',
// // // //     serialize: (value) => (value ? 'true' : 'false')
// // // //   });

// // // //   const [showTopics] = useQueryState('showTopics', {
// // // //     defaultValue: true,
// // // //     parse: (value) => value !== 'false',
// // // //     serialize: (value) => (value ? 'true' : 'false')
// // // //   });

// // // //   const questions = getQuestions();
// // // //   const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

// // // //   const filteredQuestions = questions.filter((q) => {
// // // //     const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
// // // //     const showQuestion = !hideCompleted || !completedQuestions.includes(q.id);
// // // //     return matchesLevel && showQuestion;
// // // //   });

// // // //   const todoQuestions = questions.filter((q) => !completedQuestions.includes(q.id));
// // // //   const completedList = questions.filter((q) => completedQuestions.includes(q.id));

// // // //   const sortedQuestions = useMemo(() => {
// // // //     return [...filteredQuestions].sort((a, b) => {
// // // //       if (sortBy === 'difficulty') {
// // // //         const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
// // // //         return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
// // // //       } else if (sortBy === 'timeEstimate') {
// // // //         return a.timeEstimate - b.timeEstimate;
// // // //       }
// // // //       return a.id - b.id;
// // // //     });
// // // //   }, [filteredQuestions, sortBy]);

// // // //   const groupedQuestions = useMemo(() => {
// // // //     if (groupBy === 'default') return { default: sortedQuestions };

// // // //     return sortedQuestions.reduce((acc, question) => {
// // // //       let groupKey: string;

// // // //       switch (groupBy) {
// // // //         case 'pattern':
// // // //           question.patterns.forEach((pattern) => {
// // // //             if (!acc[pattern]) acc[pattern] = [];
// // // //             acc[pattern].push(question);
// // // //           });
// // // //           return acc;
// // // //         case 'company':
// // // //           question.companies.forEach((company) => {
// // // //             if (!acc[company]) acc[company] = [];
// // // //             acc[company].push(question);
// // // //           });
// // // //           return acc;
// // // //         case 'topic':
// // // //           question.topics.forEach((topic) => {
// // // //             if (!acc[topic]) acc[topic] = [];
// // // //             acc[topic].push(question);
// // // //           });
// // // //           return acc;
// // // //         case 'difficulty':
// // // //           groupKey = question.difficulty;
// // // //           break;
// // // //         default:
// // // //           groupKey = 'default';
// // // //       }

// // // //       if (!acc[groupKey]) acc[groupKey] = [];
// // // //       acc[groupKey].push(question);
// // // //       return acc;
// // // //     }, {} as Record<string, typeof sortedQuestions>);
// // // //   }, [sortedQuestions, groupBy]);

// // // //   const renderQuestionList = (questions: typeof sortedQuestions) => {
// // // //     if (groupBy === 'default') {
// // // //       return (
// // // //         <ul className="space-y-2">
// // // //           {questions.map((question) => (
// // // //             <QuestionCard
// // // //               key={question.id}
// // // //               {...question}
// // // //               completed={completedQuestions.includes(question.id)}
// // // //               showPatterns={showPatterns}
// // // //               showCompanies={showCompanies}
// // // //               showTopics={showTopics}
// // // //             />
// // // //           ))}
// // // //         </ul>
// // // //       );
// // // //     }

// // // //     return (
// // // //       <Accordion type="multiple" className="space-y-2">
// // // //         {Object.entries(groupedQuestions).map(([group, questions]) => (
// // // //           <AccordionItem key={group} value={group}>
// // // //             <AccordionTrigger
// // // //               className={cn(
// // // //                 'text-lg font-semibold capitalize border rounded-lg px-4 bg-white',
// // // //                 '[&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-300',
// // // //                 '[&[data-state=closed]]:rounded-lg'
// // // //               )}
// // // //             >
// // // //               <div className="flex items-center">
// // // //                 {group}
// // // //                 <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
// // // //               </div>
// // // //             </AccordionTrigger>
// // // //             <AccordionContent>
// // // //               <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
// // // //                 {questions.map((question) => (
// // // //                   <QuestionCard
// // // //                     key={question.id}
// // // //                     {...question}
// // // //                     completed={completedQuestions.includes(question.id)}
// // // //                     showPatterns={showPatterns}
// // // //                     showCompanies={showCompanies}
// // // //                     showTopics={showTopics}
// // // //                   />
// // // //                 ))}
// // // //               </ul>
// // // //             </AccordionContent>
// // // //           </AccordionItem>
// // // //         ))}
// // // //       </Accordion>
// // // //     );
// // // //   };

// // // //   // const hasCustomFilters = useMemo(() => {
// // // //   //   const params = new URLSearchParams(window.location.search);
// // // //   //   return Array.from(params.entries()).some(([key, value]) => key !== 'list' && value);
// // // //   // }, []);

// // // //   const hasCustomFilters = useMemo(() => {
// // // //     return !!(level || groupBy || pattern || company || topic || q);
// // // //   }, [level, groupBy]);

// // // //   useEffect(() => {
// // // //     if (hasCustomFilters) {
// // // //       setSessionCustomFilters(new URLSearchParams(window.location.search).toString());
// // // //     }
// // // //   }, [hasCustomFilters]);

// // // //   return (
// // // //     <ProblemListTabs
// // // //       problems={sortedQuestions}
// // // //       todoProblems={todoQuestions}
// // // //       completedList={completedList}
// // // //       customLists={customLists}
// // // //       hasCustomFilters={hasCustomFilters}
// // // //       sessionCustomFilters={sessionCustomFilters}
// // // //       renderProblemsList={renderQuestionList}
// // // //     />
// // // //   );
// // // // };

// // // // export default QuestionList;

// // // // // 'use client';

// // // // // import QuestionCard from '@/components/problem-card';
// // // // // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// // // // // import { useLocalStorage } from '@/hooks/use-local-storage';
// // // // // import { getQuestions } from '@/lib/get-problems';
// // // // // import { cn } from '@/lib/utils';
// // // // // import { useQueryState } from 'nuqs';
// // // // // import { useEffect, useMemo, useState } from 'react';
// // // // // import { ProblemListTabs } from './problems-tabs';

// // // // // type CustomList = {
// // // // //   name: string;
// // // // //   params: string;
// // // // //   temporary?: boolean;
// // // // // };

// // // // // const QuestionList = () => {
// // // // //   const [customLists] = useState<CustomList[]>(() => {
// // // // //     if (typeof window !== 'undefined') {
// // // // //       return JSON.parse(localStorage.getItem('customLists') || '[]');
// // // // //     }
// // // // //     return [];
// // // // //   });

// // // // //   const [sessionCustomFilters, setSessionCustomFilters] = useState<string | null>(null);

// // // // //   // const [currentList] = useQueryState('list', { defaultValue: 'all' });
// // // // //   const [groupBy] = useQueryState('groupBy', { defaultValue: 'default' });
// // // // //   const [sortBy] = useQueryState('sortBy', { defaultValue: 'default' });
// // // // //   const [level] = useQueryState('level', { defaultValue: 'all' });
// // // // //   const [hideCompleted] = useQueryState('hideCompleted', {
// // // // //     defaultValue: false,
// // // // //     parse: (value) => value === 'true',
// // // // //     serialize: (value) => (value ? 'true' : 'false')
// // // // //   });

// // // // //   const questions = getQuestions();
// // // // //   const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);

// // // // //   const filteredQuestions = questions.filter((q) => {
// // // // //     const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
// // // // //     const showQuestion = !hideCompleted || !completedQuestions.includes(q.id);
// // // // //     return matchesLevel && showQuestion;
// // // // //   });

// // // // //   const todoQuestions = questions.filter((q) => !completedQuestions.includes(q.id));
// // // // //   const completedList = questions.filter((q) => completedQuestions.includes(q.id));

// // // // //   const sortedQuestions = useMemo(() => {
// // // // //     return [...filteredQuestions].sort((a, b) => {
// // // // //       if (sortBy === 'difficulty') {
// // // // //         const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
// // // // //         return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
// // // // //       } else if (sortBy === 'timeEstimate') {
// // // // //         return a.timeEstimate - b.timeEstimate;
// // // // //       }
// // // // //       return a.id - b.id;
// // // // //     });
// // // // //   }, [filteredQuestions, sortBy]);

// // // // //   const groupedQuestions = useMemo(() => {
// // // // //     if (groupBy === 'default') return { default: sortedQuestions };

// // // // //     return sortedQuestions.reduce((acc, question) => {
// // // // //       let groupKey: string;

// // // // //       switch (groupBy) {
// // // // //         case 'pattern':
// // // // //           question.patterns.forEach((pattern) => {
// // // // //             if (!acc[pattern]) acc[pattern] = [];
// // // // //             acc[pattern].push(question);
// // // // //           });
// // // // //           return acc;
// // // // //         case 'company':
// // // // //           question.companies.forEach((company) => {
// // // // //             if (!acc[company]) acc[company] = [];
// // // // //             acc[company].push(question);
// // // // //           });
// // // // //           return acc;
// // // // //         case 'topic':
// // // // //           question.topics.forEach((topic) => {
// // // // //             if (!acc[topic]) acc[topic] = [];
// // // // //             acc[topic].push(question);
// // // // //           });
// // // // //           return acc;
// // // // //         case 'difficulty':
// // // // //           groupKey = question.difficulty;
// // // // //           break;
// // // // //         default:
// // // // //           groupKey = 'default';
// // // // //       }

// // // // //       if (!acc[groupKey]) acc[groupKey] = [];
// // // // //       acc[groupKey].push(question);
// // // // //       return acc;
// // // // //     }, {} as Record<string, typeof sortedQuestions>);
// // // // //   }, [sortedQuestions, groupBy]);

// // // // //   const renderQuestionList = (questions: typeof sortedQuestions) => {
// // // // //     if (groupBy === 'default') {
// // // // //       return (
// // // // //         <ul className="space-y-2">
// // // // //           {questions.map((question) => (
// // // // //             <QuestionCard key={question.id} {...question} completed={completedQuestions.includes(question.id)} />
// // // // //           ))}
// // // // //         </ul>
// // // // //       );
// // // // //     }

// // // // //     return (
// // // // //       <Accordion type="multiple" className="space-y-2">
// // // // //         {Object.entries(groupedQuestions).map(([group, questions]) => (
// // // // //           <AccordionItem key={group} value={group}>
// // // // //             <AccordionTrigger
// // // // //               className={cn(
// // // // //                 'text-lg font-semibold capitalize border rounded-lg px-4 bg-white',
// // // // //                 '[&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-300',
// // // // //                 '[&[data-state=closed]]:rounded-lg'
// // // // //               )}
// // // // //             >
// // // // //               <div className="flex items-center">
// // // // //                 {group}
// // // // //                 <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
// // // // //               </div>
// // // // //             </AccordionTrigger>
// // // // //             <AccordionContent>
// // // // //               <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/40 transition-all duration-200 ease-in-out">
// // // // //                 {questions.map((question) => (
// // // // //                   <QuestionCard key={question.id} {...question} completed={completedQuestions.includes(question.id)} />
// // // // //                 ))}
// // // // //               </ul>
// // // // //             </AccordionContent>
// // // // //           </AccordionItem>
// // // // //         ))}
// // // // //       </Accordion>
// // // // //     );
// // // // //   };

// // // // //   const hasCustomFilters = useMemo(() => {
// // // // //     const params = new URLSearchParams(window.location.search);
// // // // //     return Array.from(params.entries()).some(([key, value]) => key !== 'list' && value);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (hasCustomFilters) {
// // // // //       setSessionCustomFilters(new URLSearchParams(window.location.search).toString());
// // // // //     }
// // // // //   }, [hasCustomFilters]);

// // // // //   return (
// // // // //     <ProblemListTabs
// // // // //       problems={sortedQuestions}
// // // // //       todoProblems={todoQuestions}
// // // // //       completedList={completedList}
// // // // //       customLists={customLists}
// // // // //       hasCustomFilters={hasCustomFilters}
// // // // //       sessionCustomFilters={sessionCustomFilters}
// // // // //       renderProblemsList={renderQuestionList}
// // // // //     />
// // // // //   );
// // // // // };

// // // // // export default QuestionList;

// const useVisibilityQueryState = (key: string) => {
//   return useQueryState(key, {
//     defaultValue: true,
//     parse: (value) => value !== 'false',
//     serialize: (value) => (value ? 'true' : 'false')
//   });
// };
