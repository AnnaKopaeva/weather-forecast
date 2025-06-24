import { useState } from 'react';
import classNames from 'classnames';
import { useLocation } from '@/context/LocationContext'
import { useSearchHistory } from '@/context/SearchHistoryContext'

import searchIcon from '@/assets/search.svg';

interface SearchProps {
  className?: string;
}
 
export default function Search({ className = '' }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');
  const { setLocation, isPending } = useLocation();
  const { addCity } = useSearchHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = searchValue.trim();
    if (value) {
      setLocation(value);
      addCity(value);
      setSearchValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type='search'
        value={searchValue}
        placeholder='Search city...'
        className={classNames(
          'bg-white border border-gray-300 text-gray-400 rounded-lg px-4 py-1.5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow transition-all duration-200',
          className
        )}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-2.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        aria-label="Search"
        disabled={isPending}
      >
       <img src={searchIcon} alt="Search" className="h-5 w-5" />
      </button>
    </form>
  );
}
