'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useMediaQuery from '@/hooks/use-media-query';
import { ChevronsUpDown, ListFilter } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useMemo, useState } from 'react';

interface PatternsCommandContentProps {
  selectedPatterns: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handlePatternToggle: (pattern: string) => void;
  patterns: string[];
}

export default function PatternsFilter({ patterns }: { patterns: string[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Use nuqs to manage the patterns query parameter
  const [patternsParam, setPatternsParam] = useQueryState('patterns', {
    defaultValue: null,
    parse: (value) => (value === 'none' ? [] : value?.split(',') || patterns), // Default to all patterns if no param
    serialize: (value) => {
      if (!value || value.length === 0) return 'none'; // No patterns selected
      if (value.length === patterns.length) return ''; // All patterns selected (default)
      return value.join(','); // Some patterns selected
    }
  });

  const selectedPatterns = useMemo(() => patternsParam || patterns, [patternsParam, patterns]);

  const isAllSelected = selectedPatterns.length === patterns.length;

  const handlePatternToggle = (pattern: string) => {
    const newPatterns = selectedPatterns.includes(pattern)
      ? selectedPatterns.filter((p) => p !== pattern)
      : [...selectedPatterns, pattern];

    setPatternsParam(newPatterns);
  };

  const handleSelectAll = () => {
    setPatternsParam(null); // Reset to default (all patterns)
  };

  const handleDeselectAll = () => {
    setPatternsParam([]); // Deselect all patterns
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-2 md:px-2.5">
      <ListFilter className="lucide lucide-list-filter size-4 shrink-0 hidden md:inline" />
      <span className="text-xs md:text-sm font-medium">Patterns</span>
      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedPatterns.length}</span>
      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <PatternsCommandContent
            selectedPatterns={selectedPatterns}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handlePatternToggle={handlePatternToggle}
            patterns={patterns}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Choose Patterns</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <PatternsCommandContent
            selectedPatterns={selectedPatterns}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handlePatternToggle={handlePatternToggle}
            patterns={patterns}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function PatternsCommandContent({
  selectedPatterns,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handlePatternToggle,
  patterns
}: PatternsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search patterns..." />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              checked={isAllSelected}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label htmlFor="select-all">Select All</Label>
          </div>
          <span className="text-xs text-muted-foreground">
            {selectedPatterns.length}/{patterns.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No pattern found.</CommandEmpty>
        <CommandGroup>
          {patterns.map((pattern, index) => (
            <CommandItem
              key={index}
              onSelect={() => handlePatternToggle(pattern)}
              className="cursor-pointer py-2 border-b"
            >
              <Checkbox checked={selectedPatterns.includes(pattern)} className="mr-2" />
              {pattern}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
// import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
// import { Label } from '@/components/ui/label';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import useMediaQuery from '@/hooks/use-media-query';
// import { ChevronsUpDown, ListFilter } from 'lucide-react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useMemo, useState } from 'react';

// // Update with your actual topics
// // const klistQuestionsTopics = ['Arrays', 'Strings', 'DP', 'Trees'];

// interface PatternsCommandContentProps {
//   selectedPatterns: string[];
//   isAllSelected: boolean;
//   handleSelectAll: () => void;
//   handleDeselectAll: () => void;
//   handlePatternToggle: (pattern: string) => void;
//   patterns: string[];
// }

// export default function PatternsFilter({ patterns }: { patterns: string[] }) {
//   const [open, setOpen] = useState(false);
//   const isDesktop = useMediaQuery('(min-width: 768px)');
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const patternsParam = searchParams.get('patterns');
//   const selectedPatterns = useMemo(() => {
//     if (patternsParam === 'none') return [];
//     if (!patternsParam) return [...patterns];
//     return patternsParam.split(',').filter(Boolean);
//   }, [patternsParam, patterns]);

//   const isAllSelected = selectedPatterns.length === patterns.length;

//   const updateSearchParams = (key: string, value: string | null) => {
//     const current = new URLSearchParams(Array.from(searchParams.entries()));
//     current.set('list', 'custom');
//     if (value === null) {
//       current.delete(key);
//     } else {
//       current.set(key, value);
//     }
//     router.push(`?${current.toString()}`);
//   };

//   const handlePatternToggle = (pattern: string) => {
//     const newPatterns = selectedPatterns.includes(pattern)
//       ? selectedPatterns.filter((t) => t !== pattern)
//       : [...selectedPatterns, pattern];

//     if (newPatterns.length === 0) {
//       updateSearchParams('topics', 'none');
//     } else if (newPatterns.length < patterns.length) {
//       updateSearchParams('patterns', newPatterns.join(','));
//     } else {
//       updateSearchParams('patterns', null);
//     }
//   };

//   const handleSelectAll = () => {
//     updateSearchParams('patterns', null);
//     // setOpen(false);
//   };

//   const handleDeselectAll = () => {
//     updateSearchParams('patterns', 'none');
//     // setOpen(false);
//   };

//   const triggerButton = (
//     <Button variant="outline" className="flex items-center gap-1 px-2 md:px-2.5">
//       <ListFilter className="lucide lucide-list-filter size-4 shrink-0 hidden md:inline" />
//       <span className="text-xs md:text-sm font-medium">Patterns</span>
//       {/* {selectedPatterns.length > 0 && ( */}
//       <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedPatterns.length}</span>
//       {/* )} */}
//       <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
//     </Button>
//   );

//   if (isDesktop) {
//     return (
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
//         <PopoverContent className="w-[300px] p-0">
//           <PatternsCommandContent
//             selectedPatterns={selectedPatterns}
//             isAllSelected={isAllSelected}
//             handleSelectAll={handleSelectAll}
//             handleDeselectAll={handleDeselectAll}
//             handlePatternToggle={handlePatternToggle}
//             patterns={patterns}
//           />
//         </PopoverContent>
//       </Popover>
//     );
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
//       <DrawerContent className="">
//         <DrawerHeader>
//           <DrawerTitle>Choose Patterns</DrawerTitle>
//         </DrawerHeader>
//         <div className="mt-4 border-t">
//           <PatternsCommandContent
//             selectedPatterns={selectedPatterns}
//             isAllSelected={isAllSelected}
//             handleSelectAll={handleSelectAll}
//             handleDeselectAll={handleDeselectAll}
//             handlePatternToggle={handlePatternToggle}
//             patterns={patterns}
//           />
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// }

// function PatternsCommandContent({
//   selectedPatterns,
//   isAllSelected,
//   handleSelectAll,
//   handleDeselectAll,
//   handlePatternToggle,
//   patterns
// }: PatternsCommandContentProps) {
//   return (
//     <Command>
//       <CommandInput placeholder="Search patterns..." />
//       <div className="border-b p-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Checkbox
//               id="select-all"
//               checked={isAllSelected}
//               onCheckedChange={(checked) => {
//                 if (checked) handleSelectAll();
//                 else handleDeselectAll();
//               }}
//             />
//             <Label htmlFor="select-all">Select All</Label>
//           </div>
//           <span className="text-xs text-muted-foreground">
//             {selectedPatterns.length}/{patterns.length}
//           </span>
//         </div>
//       </div>
//       <CommandList>
//         <CommandEmpty>No topic found.</CommandEmpty>
//         <CommandGroup>
//           {patterns.map((pattern, index) => (
//             <CommandItem
//               key={index}
//               onSelect={() => handlePatternToggle(pattern)}
//               className="cursor-pointer py-2 border-b"
//             >
//               <Checkbox checked={selectedPatterns.includes(pattern)} className="mr-2" />
//               {pattern}
//             </CommandItem>
//           ))}
//         </CommandGroup>
//       </CommandList>
//     </Command>
//   );
// }
