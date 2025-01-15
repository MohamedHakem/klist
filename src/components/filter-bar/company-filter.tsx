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

interface CompaniesCommandContentProps {
  selectedCompanies: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleCompanyToggle: (company: string) => void;
  companies: string[];
}

export default function CompaniesFilter({ companies }: { companies: string[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Use nuqs to manage the companies query parameter
  const [companiesParam, setCompaniesParam] = useQueryState('companies', {
    defaultValue: null,
    parse: (value) => (value === 'none' ? [] : value?.split(',') || companies), // Default to all companies if no param
    serialize: (value) => {
      if (!value || value.length === 0) return 'none'; // No companies selected
      if (value.length === companies.length) return ''; // All companies selected (default)
      return value.join(','); // Some companies selected
    }
  });

  const selectedCompanies = useMemo(() => companiesParam || companies, [companiesParam, companies]);

  const isAllSelected = selectedCompanies.length === companies.length;

  const handleCompanyToggle = (company: string) => {
    const newCompanies = selectedCompanies.includes(company)
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];

    setCompaniesParam(newCompanies);
  };

  const handleSelectAll = () => {
    setCompaniesParam(null); // Reset to default (all companies)
  };

  const handleDeselectAll = () => {
    setCompaniesParam([]); // Deselect all companies
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-2 md:px-2.5">
      <ListFilter className="lucide lucide-list-filter size-4 shrink-0 hidden md:inline" />
      <span className="text-xs md:text-sm font-medium">Companies</span>
      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedCompanies.length}</span>
      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <CompaniesCommandContent
            selectedCompanies={selectedCompanies}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleCompanyToggle={handleCompanyToggle}
            companies={companies}
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
          <DrawerTitle>Choose Companies</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <CompaniesCommandContent
            selectedCompanies={selectedCompanies}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleCompanyToggle={handleCompanyToggle}
            companies={companies}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CompaniesCommandContent({
  selectedCompanies,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handleCompanyToggle,
  companies
}: CompaniesCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search companies..." />
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
            {selectedCompanies.length}/{companies.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No company found.</CommandEmpty>
        <CommandGroup>
          {companies.map((company, index) => (
            <CommandItem
              key={index}
              onSelect={() => handleCompanyToggle(company)}
              className="cursor-pointer py-2 border-b"
            >
              <Checkbox checked={selectedCompanies.includes(company)} className="mr-2" />
              {company}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
