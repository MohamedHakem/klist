import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface ItemsCommandContentProps {
  type: string;
  selectedItems: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleItemToggle: (item: string) => void;
  items: string[];
  availableItems: string[];
  itemCounts: Record<string, number>;
}

export function ItemsCommandContent({
  type,
  items,
  availableItems,
  selectedItems,
  isAllSelected,
  itemCounts,
  handleSelectAll,
  handleDeselectAll,
  handleItemToggle
}: ItemsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder={`Search ${type}...`} />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              'flex items-center select-none',
              availableItems.length === 0 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'
            )}
          >
            <Checkbox
              id="select-all"
              className={availableItems.length ? '' : 'opacity-50'}
              // checked={availableItems.length > 0 ? isAllSelected : 'indeterminate'}
              checked={availableItems.length > 0 ? isAllSelected : false}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label
              htmlFor="select-all"
              className={cn('pl-2', availableItems.length === 0 ? 'opacity-80 pointer-events-none' : 'cursor-pointer')}
            >
              Select all
            </Label>
          </div>
          <span className="text-sm text-muted-foreground">
            {selectedItems.length}/{items.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No {type} found.</CommandEmpty>
        <CommandGroup>
          {items.map((item, index) => (
            <CommandItem
              key={index}
              onSelect={() => availableItems.includes(item) && handleItemToggle(item)}
              className={`cursor-pointer py-2 border-b ${!availableItems.includes(item) ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <Checkbox checked={selectedItems.includes(item)} className={!availableItems.includes(item) ? 'opacity-30' : ''} />
              {item}
              <span className="text-xs text-muted-foreground/70">
                ({itemCounts[item]}
                {item.length < 20 ? (!itemCounts[item] ? '0' : itemCounts[item] > 1 ? ' problems' : ' problem') : ''})
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
