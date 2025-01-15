import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface TopicsCommandContentProps {
  selectedTopics: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleTopicToggle: (topic: string) => void;
  topics: string[];
  availableTopics: string[];
  topicCounts: Record<string, number>;
}

export function TopicsCommandContent({
  selectedTopics,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handleTopicToggle,
  topics,
  availableTopics,
  topicCounts
}: TopicsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search topics..." />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer select-none">
            <Checkbox
              id="select-all"
              checked={isAllSelected}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label htmlFor="select-all" className="cursor-pointer pl-2">
              Select All
            </Label>
          </div>
          <span className="text-xs text-muted-foreground">
            {selectedTopics.length}/{topics.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No topic found.</CommandEmpty>
        <CommandGroup>
          {topics.map((topic, index) => (
            <CommandItem
              key={index}
              onSelect={() => availableTopics.includes(topic) && handleTopicToggle(topic)}
              className={`cursor-pointer py-2 border-b ${
                !availableTopics.includes(topic) ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              <Checkbox checked={selectedTopics.includes(topic)} className="mr-2" />
              {topic}
              {availableTopics.includes(topic) && (
                <span className="ml-1 text-xs text-muted-foreground">
                  ({topicCounts[topic]}{topic.length < 14 ? (topicCounts[topic] > 1 ? ' problems' : ' problem') : ''})
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
