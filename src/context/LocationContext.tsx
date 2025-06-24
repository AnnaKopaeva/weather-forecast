import {
  createContext,
  useContext,
  useState,
  useTransition,
} from 'react';
import type { ReactNode } from 'react';

type LocationContextType = {
  location: string;
  setLocation: (location: string) => void;
  isPending: boolean;
};

interface LocationProviderProps {
  children: ReactNode
}

const LocationContext = createContext<LocationContextType>({
  location: '',
  setLocation: () => {},
  isPending: false,
});

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocationState] = useState('Kyiv');
  const [isPending, startTransition] = useTransition();

  const setLocation = (location: string) => {
    startTransition(() => {
      setLocationState(location);
    });
  };

  return (
    <LocationContext.Provider value={{ location, setLocation, isPending }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error('useLocation must be used within a LocationProvider');
  return ctx;
};
