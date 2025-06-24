import React, { createContext, useContext, useEffect, useState } from 'react';
import { historyService } from '@/services/HistoryService'

type SearchHistoryContextType = {
  history: string[];
  addCity: (city: string) => void;
  deleteCity: (city: string) => void;
  clearHistory: () => void;
};

const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined);

export const SearchHistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const stored = historyService.getHistory();
    if (stored) {
      setHistory(stored);
    }
  }, []);

  const saveHistory = (newHistory: string[]) => {
    historyService.setHistory(newHistory);
  };

  const addCity = (city: string) => {
    setHistory((prev) => {
      const filtered = prev.filter((c) => c.toLowerCase() !== city.toLowerCase());
      const newHistory = [...filtered, city];
      saveHistory(newHistory);
      return newHistory;
    });
  };

  const deleteCity = (city: string) => {
    setHistory((prev) => {
      const newHistory = prev.filter((c) => c.toLowerCase() !== city.toLowerCase());
      saveHistory(newHistory);
      return newHistory;
    });
  };

  const clearHistory = () => {
    historyService.clearHistory();
    setHistory([]);
  };

  return (
    <SearchHistoryContext.Provider value={{ history, addCity, deleteCity, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export const useSearchHistory = (): SearchHistoryContextType => {
  const context = useContext(SearchHistoryContext);
  if (!context) {
    throw new Error('useSearchHistory must be used within a SearchHistoryProvider');
  }
  return context;
};
