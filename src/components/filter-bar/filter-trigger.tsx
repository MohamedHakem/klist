import { cn } from '@/lib/utils';
import { ChevronsUpDown, ListFilter } from 'lucide-react';

type FilterTriggerProps = {
  selectedCount: number;
  label: string;
  triggerClassName?: string;
};

export function FilterTrigger({ selectedCount, label, triggerClassName }: FilterTriggerProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 h-9 py-2 px-1.5 md:px-2 border border-input bg-background shadow-sm justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors',
        'hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        'disabled:pointer-events-none disabled:opacity-50',
        'gap-4 md:gap-0 h-10 md:h-9',
        triggerClassName
      )}
    >
      <ListFilter className="lucide lucide-list-filter size-4 shrink-0 hidden md:inline" />
      <span className="text-base md:text-sm font-normal md:font-medium">{label}</span>
      {label === 'Group by' ? (
        <></>
      ) : (
        <span className="rounded-full bg-primary/10 px-1 py-0.5 text-xs w-6 flex justify-center">{selectedCount}</span>
      )}
      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
    </div>
  );
}
