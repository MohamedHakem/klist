'use client';

import { FilterTrigger } from '@/components/filter-bar/filter-trigger';
import { ItemsCommandContent } from '@/components/filter-bar/items-command-content';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useFilter } from '@/hooks/use-filters';
// import { useProblemFilters } from '@/hooks/use-problem-filters';

type keyType = 'topics' | 'patterns' | 'companies' | 'difficulty' | 'group';

export default function DynamicFilter({ type, triggerClassName }: { type: keyType; triggerClassName?: string }) {
  let capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  capitalizedType = type === 'group' ? 'Group' + ' by' : capitalizedType;

  console.log('🚀 ~ DynamicFilter ~ capitalizedType:', capitalizedType);

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

  const Comp = (
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
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className='w-full'>
          <FilterTrigger selectedCount={selectedItems.length} label={capitalizedType} triggerClassName={triggerClassName} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Choose {capitalizedType}</DrawerTitle>
          </DrawerHeader>
          <div className="mt-4 border-t">{Comp}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <FilterTrigger selectedCount={selectedItems.length} label={capitalizedType} triggerClassName={triggerClassName} />
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">{Comp}</PopoverContent>
    </Popover>
  );
}
