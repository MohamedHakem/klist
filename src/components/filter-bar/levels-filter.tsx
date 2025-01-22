'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronsUpDown, ListFilter } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useMemo, useState } from 'react';

interface LevelsCommandContentProps {
  selectedLevels: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleLevelToggle: (level: string) => void;
  levels: string[];
}

export default function LevelsFilter({ levels }: { levels: string[] }) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // Use nuqs to manage the levels query parameter
  const [levelsParam, setLevelsParam] = useQueryState('levels', {
    defaultValue: null,
    parse: (value) => (value === 'none' ? [] : value?.split(',') || levels), // Default to all levels if no param
    serialize: (value) => {
      if (!value || value.length === 0) return 'none'; // No levels selected
      if (value.length === levels.length) return ''; // All levels selected (default)
      return value.join(','); // Some levels selected
    }
  });

  const selectedLevels = useMemo(() => levelsParam || levels, [levelsParam, levels]);

  const isAllSelected = selectedLevels.length === levels.length;

  const handleLevelToggle = (level: string) => {
    const newLevels = selectedLevels.includes(level) ? selectedLevels.filter((p) => p !== level) : [...selectedLevels, level];

    setLevelsParam(newLevels);
  };

  const handleSelectAll = () => {
    setLevelsParam(null); // Reset to default (all Levels)
  };

  const handleDeselectAll = () => {
    setLevelsParam([]); // Deselect all Levels
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-2 md:px-2.5">
      <ListFilter className="lucide lucide-list-filter size-4 shrink-0 hidden md:inline" />
      <span className="text-xs md:text-sm font-medium">Levels</span>
      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedLevels.length}</span>
      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerTitle>Choose Levels</DrawerTitle>
          </DrawerHeader>
          <div className="mt-4 border-t">
            <LevelsCommandContent
              selectedLevels={selectedLevels}
              isAllSelected={isAllSelected}
              handleSelectAll={handleSelectAll}
              handleDeselectAll={handleDeselectAll}
              handleLevelToggle={handleLevelToggle}
              levels={levels}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <LevelsCommandContent
          selectedLevels={selectedLevels}
          isAllSelected={isAllSelected}
          handleSelectAll={handleSelectAll}
          handleDeselectAll={handleDeselectAll}
          handleLevelToggle={handleLevelToggle}
          levels={levels}
        />
      </PopoverContent>
    </Popover>
  );
}

function LevelsCommandContent({
  selectedLevels,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handleLevelToggle,
  levels
}: LevelsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search levelss..." />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Checkbox
              id="select-all"
              checked={isAllSelected}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label htmlFor="select-all">{isAllSelected ? 'De-Select All' : 'Select All'}</Label>
          </div>
          <span className="text-xs text-muted-foreground">
            {selectedLevels.length}/{levels.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No levels found.</CommandEmpty>
        <CommandGroup>
          {levels.map((level, index) => (
            <CommandItem key={index} onSelect={() => handleLevelToggle(level)} className="cursor-pointer py-2 border my-1">
              <Checkbox checked={selectedLevels.includes(level)} className="mr-2" />
              {level}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
