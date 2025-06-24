import { useSearchHistory } from '@/context/SearchHistoryContext';
import { useLocation } from '@/context/LocationContext';
import toast from 'react-hot-toast';

import deleteIcon from '@/assets/delete.svg';

interface ToastProps {
  id: string;
}

function History() {
  const { history, addCity, deleteCity } = useSearchHistory();
  const { setLocation, isPending } = useLocation();

  const handleSelectCity = (city: string) => {
    setLocation(city);
  }

  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, city: string) => {
    e.stopPropagation();
    deleteCity(city);

    toast(
      (t: ToastProps) => (
        <div className="flex justify-between items-center">
          <span>{city} deleted</span>
          <button
            onClick={() => {
              addCity(city);
              toast.dismiss(t.id);
            }}
            className="ml-4 text-blue-500 hover:underline"
          >
            Undo
          </button>
        </div>
      ),
      {
        duration: 4000,
      }
    );
  };

  return (
    <div className="border-t border-white m-6 pt-6">
      <h3 className="text-lg font-semibold mb-2">Search History</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((item) => (
          <button
            key={item}
            className='flex items-center bg-gray-100 rounded px-3 py-1 shadow text-gray-800 hover:bg-blue-100 hover:cursor-pointer transition-colors'
            onClick={() =>handleSelectCity(item)}
            disabled={isPending}
          >
            <span className='font-bold mr-4'>{item}</span>
            <div
              className='text-base bg-transparent p-2 hover:bg-red-100 hover:cursor-pointer rounded transition-colors'
              onClick={(e) => handleDelete(e, item)}
            >
              <img src={deleteIcon} alt="Delete" className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default History
