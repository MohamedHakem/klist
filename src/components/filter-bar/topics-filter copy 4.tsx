'use client';

import { FilterTrigger } from '@/components/filter-bar/filter-trigger';
import { ItemsCommandContent } from '@/components/filter-bar/items-command-content';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useFilter } from '@/hooks/use-filters';
// import { useProblemFilters } from '@/hooks/use-problem-filters';

type keyType = 'topics' | 'patterns' | 'companies' | 'difficulty';

export default function TopicsFilter({ type }: { type: keyType }) {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  const {
    allItems,
    availableItems,
    selectedItems,
    itemCount,
    isAllSelected,
    handleToggle,
    handleSelectAll,
    handleDeselectAll,
    isMobile,
    open,
    setOpen
  } = useFilter({ key: type });
  console.log('🚀 ~ TopicsFilter ~ allItems:', allItems.length);
  console.log('🚀 ~ TopicsFilter ~ availableItems:', availableItems.length);
  console.log('🚀 ~ TopicsFilter ~ selectedItems:', selectedItems.length);
  console.log('🚀 ~ TopicsFilter ~ isAllSelected:', isAllSelected);

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          {/* <FilterTrigger selectedCount={selectedTopics.length} label="Topics" /> */}
          <FilterTrigger selectedCount={selectedItems.length} label={capitalizedType} />
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerTitle>Choose {capitalizedType}</DrawerTitle>
          </DrawerHeader>
          <div className="mt-4 border-t">
            <ItemsCommandContent
              type={type}
              items={allItems}
              availableItems={availableItems}
              selectedItems={selectedItems}
              isAllSelected={isAllSelected}
              itemCounts={itemCount}
              handleSelectAll={handleSelectAll}
              handleDeselectAll={handleDeselectAll}
              handleItemToggle={handleToggle}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <FilterTrigger selectedCount={selectedItems.length} label={capitalizedType} />
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <ItemsCommandContent
          type={type}
          items={allItems}
          availableItems={availableItems}
          selectedItems={selectedItems}
          isAllSelected={isAllSelected}
          itemCounts={itemCount}
          handleSelectAll={handleSelectAll}
          handleDeselectAll={handleDeselectAll}
          handleItemToggle={handleToggle}
        />
      </PopoverContent>
    </Popover>
  );
}
