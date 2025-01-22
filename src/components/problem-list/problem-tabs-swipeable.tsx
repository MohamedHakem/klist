'use client';

import { ProblemTabContent } from '@/components/problem-list/problem-tab-content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProblemContext } from '@/context/problem-context';
import { useState } from 'react';

export const ProblemTabs = () => {
  const { problems, todoProblems, completedList, groupBy } = useProblemContext();
  // console.log('🚀 ~ ProblemTabs ~ completedList:', completedList);
  const [activeTab, setActiveTab] = useState('all');
  // const tabs = ['all', 'todo', 'completed'];

  return (
    <div className="mx-auto max-w-3xl p-4 pt-4 mt-[168px] overflow-hidden md:overflow-visible">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" forceMount className="px-1">
          <ProblemTabContent problems={problems} groupBy={groupBy} />
        </TabsContent>
        <TabsContent value="todo" forceMount className="px-1">
          <ProblemTabContent problems={todoProblems} groupBy={groupBy} />
        </TabsContent>
        <TabsContent value="completed" forceMount className="px-1">
          <ProblemTabContent problems={completedList} groupBy={groupBy} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
