// lib/createArrayQueryState.ts
export function createArrayQueryState(allValues: string[]) {
  return {
    parse: (value: string | null) => {
      if (value === 'none') return [];
      if (!value) return allValues;
      return value.split(',');
    },
    serialize: (value: string[]) => {
      if (value.length === 0) return 'none';
      if (value.length === allValues.length) return '';
      return value.join(',');
    }
  };
}
