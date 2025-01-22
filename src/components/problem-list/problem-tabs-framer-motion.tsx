'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProblemContext } from '@/context/problem-context';
import { ProblemTabContent } from '@/components/problem-list/problem-tab-content';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTabGesture } from '@/hooks/use-tab-gesture';

export const ProblemTabs = () => {
  const { problems, todoProblems, completedList, groupBy } = useProblemContext();
  const [activeTab, setActiveTab] = useState('all');
  const tabs = ['all', 'todo', 'completed'];
  const { dragProps, swipeDirection } = useTabGesture(tabs, activeTab, setActiveTab);

  const displacements = 40
  const stiffness = 200
  const damping = 40
  const mass = 0.8
  const velocity = 1

  const variants = {
    enter: (direction: 'left' | 'right' | null) => ({
      x: direction === 'left' ? displacements : -displacements,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    // exit: (direction: 'left' | 'right' | null) => ({
    //   x: direction === 'left' ? -displacements : displacements,
    //   opacity: 0,
    //   transition: {
    //     duration: 0.000001 // Simplify the transition
    //   }
    // })
  };

  return (
    <div className="mx-auto max-w-3xl p-4 pt-4 mt-[168px] overflow-hidden md:overflow-visible">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <div className="relative">
          <AnimatePresence
            mode="wait"
            initial={false}
            custom={swipeDirection}
            // onExitComplete={() => ()}
          >
            {activeTab === 'all' && (
              <motion.div
                {...dragProps}
                key="all"
                custom={swipeDirection}
                variants={variants}
                initial="enter"
                animate="center"
                // exit="exit"
                className="w-full"
                transition={{
                  type: 'spring',
                  stiffness: stiffness,
                  damping: damping,
                  mass: mass,
                  velocity: velocity
                }}
              >
                <TabsContent value="all" forceMount>
                  <ProblemTabContent problems={problems} groupBy={groupBy} />
                </TabsContent>
              </motion.div>
            )}
            {activeTab === 'todo' && (
              <motion.div
                {...dragProps}
                key="todo"
                custom={swipeDirection}
                variants={variants}
                initial="enter"
                animate="center"
                // exit="exit"
                className="w-full"
                transition={{
                  type: 'spring',
                  stiffness: stiffness,
                  damping: damping,
                  mass: mass,
                  velocity: velocity
                }}
              >
                <TabsContent value="todo" forceMount>
                  <ProblemTabContent problems={todoProblems} groupBy={groupBy} />
                </TabsContent>
              </motion.div>
            )}
            {activeTab === 'completed' && (
              <motion.div
                {...dragProps}
                key="completed"
                custom={swipeDirection}
                variants={variants}
                initial="enter"
                animate="center"
                // exit="exit"
                className="w-full"
                transition={{
                  type: 'spring',
                  stiffness: stiffness,
                  damping: damping,
                  mass: mass,
                  velocity: velocity
                }}
              >
                <TabsContent value="completed" forceMount>
                  <ProblemTabContent problems={completedList} groupBy={groupBy} />
                </TabsContent>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
};
