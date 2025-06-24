import Header from '@/components/Header'
import Card from '@/components/Card'
import History from '@/components/History'
import { Toaster } from 'react-hot-toast';
import { LocationProvider } from '@/context/LocationContext';
import { SearchHistoryProvider } from '@/context/SearchHistoryContext';

function App() {
  return (
    <LocationProvider>
      <SearchHistoryProvider>
        <Header />
        <Card />
        <History />
        <Toaster />
      </SearchHistoryProvider>
    </LocationProvider>
  )
}

export default App
