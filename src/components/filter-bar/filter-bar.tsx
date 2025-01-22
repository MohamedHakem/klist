'use client';

// import CompaniesFilter from '@/components/filter-bar/company-filter';
// import PatternsFilter from '@/components/filter-bar/pattern-filter';
// import TopicsFilter from '@/components/filter-bar/dynamic-filter';
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer-original';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { problemsCompanies, problemsPatterns } from '@/lib/problems';
import { cn } from '@/lib/utils';
import { EyeOff, Group, ListFilter, Search, SlidersHorizontal } from 'lucide-react';
import { parseAsBoolean, parseAsString, useQueryStates } from 'nuqs';
// import LevelsFilter from './levels-filter';
import DynamicFilter from '@/components/filter-bar/dynamic-filter';

// type GroupByValue = 'none' | 'pattern' | 'company' | 'topics' | 'difficulty';
// type filterByLevels = 'all' | 'easy' | 'medium' | 'hard';

export function FilterBar() {
  // const [groupBy, setGroupBy] = useQueryState<GroupByValue>('groupBy', {
  //   defaultValue: 'none',
  //   parse: (value: string | null) => (value as GroupByValue) || 'none',
  //   serialize: (value: GroupByValue) => (value === 'none' ? '' : value)
  // });

  // const [level, setLevel] = useQueryState<filterByLevels>('level', {
  //   defaultValue: 'all',
  //   parse: (value: string | null) => (value as filterByLevels) || 'none',
  //   serialize: (value: filterByLevels) => (value === 'all' ? '' : value)
  // });

  // const [showPatterns, setShowPatterns] = useQueryState('showPatterns', {
  //   defaultValue: true,
  //   parse: (value) => value !== 'false',
  //   serialize: (value) => (value ? '' : 'false')
  // });

  // const [showCompanies, setShowCompanies] = useQueryState('showCompanies', {
  //   defaultValue: true,
  //   parse: (value) => value !== 'false',
  //   serialize: (value) => (value ? '' : 'false')
  // });

  // const [showTopics, setShowTopics] = useQueryState('showTopics', {
  //   defaultValue: true,
  //   parse: (value) => value !== 'false',
  //   serialize: (value) => (value ? '' : 'false')
  // });

  // const [searchQuery, setSearchQuery] = useQueryState('q', {
  //   defaultValue: '',
  //   parse: (value) => value || '',
  //   serialize: (value) => value || ''
  // });

  const [{ showPatterns, showCompanies, showTopics, searchQuery }, setQuery] = useQueryStates({
    showPatterns: parseAsBoolean.withDefault(true),
    showCompanies: parseAsBoolean.withDefault(true),
    showTopics: parseAsBoolean.withDefault(true),
    searchQuery: parseAsString.withDefault('')
  });

  return (
    <div
      className={
        'w-full bg-[#eaecf0] mx-auto transition-all duration-200 ease-in-out md:py-3 md:max-w-3xl md:px-4 translate-y-0 shadow-sm'
      }
    >
      <div className={cn('md:py-2 px-4 md:p-0 rounded-md justify-center flex')}>
        <div className="flex gap-1">
          <div className="flex md:hidden">
            <div className="relative min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setQuery({ searchQuery: e?.target?.value?.trim() })}
                  placeholder="Search problems..."
                  className="w-full placeholder:text-xs rounded-md border border-gray-300 bg-white py-2 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
            <Drawer>
              <DrawerTrigger
                className="h-[38px] px-2 py-1.5 rounded-md select-none text-sm flex items-center justify-center 
            gap-2 border bg-white text-primary hover:bg-white/80 transition-transform duration-50 ease-in-out transform hover:scale-90"
              >
                <SlidersHorizontal size={16} />
                Filters
              </DrawerTrigger>
              <DrawerContent className="h-[75dvh]">
                <DrawerTitle />
                <DrawerDescription />
                <div className="p-4 flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-medium flex gap-2 items-center">
                      <ListFilter className="lucide lucide-list-filter size-5 shrink-0" />
                      Choose
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {/* <TopicsFilter topics={problemsTopics} /> */}
                      {/* <TopicsFilter type="topics" /> */}
                      {/* <PatternsFilter patterns={problemsPatterns} /> */}
                      {/* <CompaniesFilter companies={problemsCompanies} /> */}
                      <DynamicFilter type="topics" />
                      <DynamicFilter type="patterns" />
                      <DynamicFilter type="companies" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-medium flex gap-2 items-center">
                      <EyeOff className="lucide lucide-list-filter size-5 shrink-0" />
                      Show
                    </h4>
                    <div className="flex justify-between">
                      <div
                        className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-md border px-2 py-1.5 gap-2 bg-white"
                        // onClick={() => setShowPatterns(!showPatterns)}
                        onClick={() => setQuery({ showPatterns: !showPatterns })}
                      >
                        <span className="text-sm">patterns</span>
                        <Switch
                          checked={showPatterns}
                          // onCheckedChange={() => setShowPatterns(!showPatterns)}
                          // onCheckedChange={() => setQuery({ showPatterns: !showPatterns })}
                        />
                      </div>
                      <div
                        className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-md border px-2 py-1.5 gap-2 bg-white"
                        onClick={() => setQuery({ showTopics: !showTopics })}
                      >
                        <span className="text-sm">topics</span>
                        <Switch
                          checked={showTopics}
                          // onCheckedChange={() => setQuery({ showTopics: !showTopics })}
                        />
                      </div>
                      <div
                        className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-md border px-2 py-1.5 gap-2 bg-white"
                        onClick={() => setQuery({ showCompanies: !showCompanies })}
                      >
                        <span className="text-sm">Companies</span>
                        <Switch
                          checked={showCompanies}
                          // onCheckedChange={() => setQuery({ showCompanies: !showCompanies })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <h4 className="text-lg font-medium flex gap-2 items-center">
                      <Group className="lucide lucide-list-filter size-5 shrink-0" />
                      Difficulty
                    </h4>
                    <div className="flex gap-1 w-full flex-1">
                      {/* <Tabs value={level} className="w-full" onValueChange={(value: string) => setLevel(value as filterByLevels)}>
                        <TabsList className="w-full flex gap-1">
                          {['All', 'Easy', 'Medium', 'Hard'].map((tab, i) => (
                            <TabsTrigger key={i} value={tab.toLowerCase() as filterByLevels} className="flex-1">
                              {tab}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                      </Tabs> */}
                      <DynamicFilter type="difficulty" triggerClassName="w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <h4 className="text-lg font-medium flex gap-2 items-center flex-shrink-0">
                      <Group className="lucide lucide-list-filter size-5 shrink-0" />
                      Group By
                    </h4>
                    <div className="flex gap-1 w-full flex-1">
                      {/* <Tabs value={groupBy} className="w-full" onValueChange={(value) => setGroupBy(value as GroupByValue)}>
                        <TabsList className="w-full flex gap-1">
                          {['None', 'Pattern', 'Company', 'Topics', 'Difficulty'].map((tab, i) => (
                            <TabsTrigger key={i} value={tab.toLowerCase() as GroupByValue} className="flex-1">
                              {tab}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                      </Tabs> */}
                      <DynamicFilter type="group" triggerClassName="w-full" />
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Hide on mobile */}
          <div className="hidden md:flex items-center justify-between gap-1 text-sm md:flex-wrap">
            {/* <TopicsFilter topics={problemsTopics} /> */}
            {/* <CompaniesFilter companies={problemsCompanies} /> */}
            {/* <PatternsFilter patterns={problemsPatterns} /> */}
            <DynamicFilter type="topics" />
            <DynamicFilter type="patterns" />
            <DynamicFilter type="companies" />
            <DynamicFilter type="difficulty" />
            <DynamicFilter type="group" />
            {/* <LevelsFilter levels={['Easy', 'Medium', 'Hard']} /> */}

            {/* <Select value={groupBy} onValueChange={(value) => setGroupBy(value as GroupByValue)}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Group By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Group By</SelectItem>
                <SelectItem value="pattern">Pattern</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="topic">Topic</SelectItem>
                <SelectItem value="difficulty">Difficulty</SelectItem>
              </SelectContent>
            </Select> */}

            {/* <Select value={level} onValueChange={(value) => setLevel(value as filterByLevels)}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select> */}

            <div className="flex items-center gap-2 w-full">
              <div className="relative min-w-64 w-full flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setQuery({ searchQuery: e.target?.value?.trim() })}
                    placeholder="Search problems, patterns, companies, topics..."
                    className="w-full placeholder:text-xs rounded-md border border-gray-300 bg-white py-2 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-gray-500 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <div
                  className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground flex justify-between items-center rounded-md border px-3 py-2 gap-2 bg-white"
                  onClick={() => setQuery({ showPatterns: !showPatterns })}
                >
                  <p>patterns</p>
                  <Switch
                    checked={showPatterns}
                    // onCheckedChange={() => setQuery({ showPatterns: !showPatterns })}
                  />
                </div>

                <div
                  className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground flex justify-between items-center rounded-md border px-3 py-2 gap-2 bg-white"
                  onClick={() => setQuery({ showTopics: !showTopics })}
                >
                  <p>topics</p>
                  <Switch
                    checked={showTopics}
                    // onCheckedChange={() => setQuery({ showTopics: !showTopics })}
                  />
                </div>
                <div
                  className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground flex justify-between items-center rounded-md border px-3 py-2 gap-2 bg-white"
                  onClick={() => setQuery({ showCompanies: !showCompanies })}
                >
                  <p>Companies</p>
                  <Switch
                    checked={showCompanies}
                    // onCheckedChange={() => setQuery({ showCompanies: !showCompanies })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
