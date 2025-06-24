
import { apiService } from '@/services/API'
import { useQuery } from '@tanstack/react-query';

export const useSearchWeatherForecast = (params: { q: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['search', params],
    queryFn: () => apiService.searchWeatherForecast(params),
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    data,
    isLoading,
    isError: error,
  }
}
