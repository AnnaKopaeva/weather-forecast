import { useDeferredValue } from 'react';
import { useLocation } from '@/context/LocationContext';
import CardSkeleton from './CardSkeleton'
import { useSearchWeatherForecast } from '@/hooks/useSearchWeatherForecast'
import { getHour, filterFromNow } from '@/utils'

function Card() {
  const { location } = useLocation();
  const deferredLocation = useDeferredValue(location);
  const { data, isLoading, isError } = useSearchWeatherForecast({ q: deferredLocation });

  if (!data) {
    return
  }

  const { location: currentLocation, forecast, current } = data;
  const currentDay = forecast?.forecastday && forecast?.forecastday[0];

  if (isError && !isLoading) {
    return <span>Error in loading data, please try again.</span>
  }

  if (isLoading) {
    return (
      <CardSkeleton />
    );
  }

  return (
    <div className='flex flex-col w-screen p-6'>
      <h4 className='text-4xl font-bold mb-4'>{currentLocation?.name}</h4>
      <div className='grid grid-cols-[420px_1fr] gap-4'>
        <div className='flex items-center gap-4'>
          <img src={current?.condition?.icon} alt={current?.condition?.text} className='w-32' />
          <h4 className='text-4xl font-bold'>{current?.temp_c} °C</h4>
          <div className='flex flex-col'>
            <span>Min: {currentDay?.day?.mintemp_c} °C</span>
            <span>Max: {currentDay?.day?.maxtemp_c} °C</span>
            <span>Wind: {current?.wind_kph} km/h</span>
          </div>
        </div>
        <div className='flex overflow-x-auto border-l border-white pl-4'>
          {filterFromNow(currentDay.hour).map(({ time, time_epoch, condition, temp_c }) => (
            <div key={time_epoch} className='flex flex-col min-w-16 items-center p-2'>
              <span>{getHour(time)}</span>
              <img src={condition?.icon} alt={condition?.text} />
              <span>{temp_c} °C</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
