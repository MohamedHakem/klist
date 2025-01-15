'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProblemTabsProps } from '@/lib/types';
import { useQueryState } from 'nuqs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from './ui/button';

export const ProblemListTabs = ({
  problems,
  todoProblems,
  completedList,
  customLists,
  hasCustomFilters,
  sessionCustomFilters,
  renderProblemsList
}: ProblemTabsProps) => {
  const [currentList, setCurrentList] = useQueryState('list', { defaultValue: 'all' });
  const [newListName, setNewListName] = useState('');

  const handleTabChange = (value: string) => {
    setCurrentList(value);
  };

  const handleSaveCustomList = () => {
    if (newListName.trim()) {
      const params = new URLSearchParams(window.location.search);
      const newCustomList = { name: newListName, params: params.toString() };
      customLists.push(newCustomList);
      setNewListName('');
    }
  };

  return (
    <Tabs value={currentList} onValueChange={handleTabChange}>
      <TabsList className="flex justify-start border border-accent-foreground/10 md:gap-1 p-0 md:p-1 rounded-md md:px-1 md:py-1 h-12 md:h-fit bg-gray-100">
        <div className="relative flex overflow-x-scroll md:overflow-hidden">
          <div className="relative flex overflow-x-scroll md:overflow-hidden py-2 md:py-1 px-1.5 md:px-1 rounded-md">
            <div className="flex w-max space-x-1 md:space-x-2 relative">
              <TabsTrigger value="all">
                All
                <span className="text-xs ml-2">({problems.length})</span>
              </TabsTrigger>
              <TabsTrigger value="todo">
                To Do
                <span className="text-xs ml-2">({todoProblems.length})</span>
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="ml-2 bg-black text-white border py-1 md:py-[5px] px-2.5 text-xs rounded-md hover:bg-black/80 transition-transform duration-50 ease-in-out transform hover:scale-95 active:scale-90">
                        Save
                      </div>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Input
                        placeholder="Name your list"
                        value={newListName}
                        onChange={(e) => setNewListName(e.target.value)}
                      />
                      <Button onClick={handleSaveCustomList} className="mt-2">
                        Save
                      </Button>
                    </PopoverContent>
                  </Popover>
                </TabsTrigger>
              )}
            </div>
          </div>
          <div className="md:hidden absolute top-0 bottom-0 right-0 w-4 h-[48px] bg-gradient-to-l from-[#e0e0e040] to-transparent m-auto"></div>
        </div>
      </TabsList>

      <TabsContent value="all">{renderProblemsList(problems)}</TabsContent>
      <TabsContent value="todo">{renderProblemsList(todoProblems)}</TabsContent>
      <TabsContent value="completed">{renderProblemsList(completedList)}</TabsContent>

      {customLists.map((list) => (
        <TabsContent key={list.name} value={list.name}>
          {renderProblemsList(problems)}
        </TabsContent>
      ))}

      {(hasCustomFilters || sessionCustomFilters) && (
        <TabsContent value="custom">{renderProblemsList(problems)}</TabsContent>
      )}
    </Tabs>
  );
};
