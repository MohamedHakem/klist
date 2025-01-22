// Generalized version of the use-problem-filter.ts custom hook
import { getProblems } from '@/lib/get-problems';
import { parseAsArrayOf, parseAsString, useQueryStates } from 'nuqs';
import { useMemo, useState } from 'react';
import { useIsMobile } from './use-mobile';
import { ProblemItemProps } from '@/lib/types';

type FiltersReturn = {
  allItems: string[];
  availableItems: string[];
  selectedItems: string[];
  itemCount: Record<string, number>;
  isAllSelected: boolean;
  filteredProblems: ProblemItemProps[];
  handleToggle: (item: string) => void;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  isMobile: boolean;
};

type FilterKeyType = keyof Pick<ProblemItemProps, 'topics' | 'patterns' | 'companies' | 'difficulty'> | 'group';
const groupItems = ['topics', 'patterns', 'difficulty', 'companies'];

export function useFilter({ key }: { key: FilterKeyType }): FiltersReturn {
  const [open, setOpen] = useState(false);
  const problems = getProblems();

  // Extract all items for the given key
  const allItems = useMemo(() => {
    if (key === 'group') return groupItems;

    // Flatten all items for the specified key across all problems and remove duplicates
    return Array.from(new Set(problems.flatMap((problem) => problem[key] || [])));
  }, [key, problems]);

  // Read/initialize query states for companies, patterns, levels, and topics
  const [{ companies, patterns, difficulty, topics, group }, setQuery] = useQueryStates({
    companies: parseAsArrayOf(parseAsString).withDefault([]),
    patterns: parseAsArrayOf(parseAsString).withDefault([]),
    difficulty: parseAsArrayOf(parseAsString).withDefault([]),
    topics: parseAsArrayOf(parseAsString).withDefault([]),
    group: parseAsArrayOf(parseAsString).withDefault(['none'])
  });

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const filters: { [key: string]: boolean } = {
        companies: !companies || companies.length === 0 || companies.some((c) => problem.companies.includes(c)),
        patterns: !patterns || patterns.length === 0 || patterns.some((pattern) => problem.patterns.includes(pattern)),
        difficulty: !difficulty || difficulty.length === 0 || difficulty.some((level) => level === problem.difficulty),
        topics: !topics || topics.length === 0 || topics.some((topic) => problem.topics.includes(topic))
      };

      // exclude current key from the filter object
      const activeFilters = Object.keys(filters).filter((f) => f !== key);
      return activeFilters.every((f) => filters[f]); // match active filters
    });
  }, [problems, companies, patterns, difficulty, topics, key]);

  // Extract available topics from filtered problems
  const availableItems = useMemo(() => {
    if (key === 'group') return groupItems;

    // combine all topics, flat them into an arr, throw them in a set to remove duplicates, turn into an arr
    const res = Array.from(new Set(filteredProblems.flatMap((problem) => problem[key])));
    console.log('🚀 ~ availableItems ~ res:', res);
    return res;
  }, [filteredProblems, key]);

  // Determine selected topics
  const selectedItems = useMemo(() => {
    const data = { companies, patterns, difficulty, topics, group };
    const filterKeyArray = data[key as keyof typeof data]; // Dynamically access the array using the `key`

    if (!filterKeyArray || filterKeyArray.length === 0) return availableItems;
    else return availableItems.filter((item) => filterKeyArray.includes(item));
  }, [companies, patterns, difficulty, topics, group, key, availableItems]);

  // Compute topic counts
  const itemCount = useMemo(() => {
    return availableItems.reduce((accumulator, item) => {
      if (key === 'group') {
        accumulator[item] = 169;
      } else {
        accumulator[item] = filteredProblems.filter((problem) => problem[key].includes(item)).length;
      }

      return accumulator;
    }, {} as Record<string, number>);
  }, [filteredProblems, availableItems, key]);

  // Determine if all available topics are selected
  const isAllSelected = availableItems.length === selectedItems.length;

  const handleToggle = (option: string) => {
    // const newSelection = availableItems.includes(option)
    const newSelection = selectedItems.includes(option)
      ? // ? availableItems.filter((item) => item !== option)
        selectedItems.filter((item) => item !== option)
      : // : [...availableItems, option];
        [...selectedItems, option];

    const isAllAvailableSelected = key === 'group' ? false : newSelection.length === availableItems.length;
    const query = isAllAvailableSelected ? [] : newSelection.length === 0 ? ['none'] : Array.from(new Set(newSelection));
    setQuery({ [key]: query });
  };

  const handleSelectAll = () => setQuery({ [key]: [] });
  const handleDeselectAll = () => setQuery({ [key]: ['none'] });

  return {
    allItems: key === 'group' ? groupItems : allItems,
    availableItems,
    selectedItems,
    // ...(key !== 'group' && itemCount),
    itemCount,
    isAllSelected,
    handleToggle,
    handleSelectAll,
    handleDeselectAll,
    filteredProblems,
    isMobile: useIsMobile(),
    open,
    setOpen
  };
}
