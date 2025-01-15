import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value; // Allow setter functions
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      // Dispatch custom event for same-tab updates
      window.dispatchEvent(
        new CustomEvent(`local-storage-${key}`, {
          detail: valueToStore
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Handle same-tab updates
    const handleCustomEvent = (e: CustomEvent) => {
      setStoredValue(e.detail);
    };

    // Handle cross-tab updates - Listen for changes in localStorage across tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
        } catch (error) {
          console.error(error);
        }
      }
    };
    window.addEventListener(`local-storage-${key}`, handleCustomEvent as EventListener);
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener(s)
    return () => {
      window.removeEventListener(`local-storage-${key}`, handleCustomEvent as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]); // Only re-run when key or initialValue changes

  return [storedValue, setValue] as const;
}
