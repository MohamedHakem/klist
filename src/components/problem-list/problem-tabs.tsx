'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProblemContext } from '@/context/problem-context';
import { ProblemTabContent } from '@/components/problem-list/problem-tab-content';

export const ProblemTabs = () => {
  const { problems, todoProblems, completedList, groupBy } = useProblemContext();

  return (
    <div className="mx-auto max-w-3xl p-4 pt-4 mt-[168px]">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ProblemTabContent problems={problems} groupBy={groupBy} />
        </TabsContent>
        <TabsContent value="todo">
          <ProblemTabContent problems={todoProblems} groupBy={groupBy} />
        </TabsContent>
        <TabsContent value="completed">
          <ProblemTabContent problems={completedList} groupBy={groupBy} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
