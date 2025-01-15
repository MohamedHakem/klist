import { useQueryState } from 'nuqs';

export const useVisibilityQueryState = (key: string) => {
  return useQueryState(key, {
    defaultValue: true,
    parse: (value) => value !== 'false',
    serialize: (value) => (value ? 'true' : 'false')
  });
};
