// lib/createArrayQueryState.ts
export function createArrayQueryState() {
  return {
    parse: (value: string | null) => {
      if (value === 'none') return [];
      if (!value) return ['all'];
      return value.split(',');
    }
    // serialize: (value: string[]) => {
    //   if (value.length === 0) return 'none';
    //   if (value.length === allValues.length) return '';
    //   return value.join(',');
    // }
  };
}

// I want this to work, and return all by default without using args
