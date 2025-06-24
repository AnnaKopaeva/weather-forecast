import queryString from 'query-string'
import type { WeatherForecastProps } from '@/types'

class APIService {
  private BASE_URL = import.meta.env.VITE_API_URL;
  private API_KEY = import.meta.env.VITE_API_KEY || "";

  private async request<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const res = await fetch(`${this.BASE_URL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
      },
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || 'Fetch failed');
    }

    return res.json();
  }

  async searchWeatherForecast(params: { q: string }): Promise<WeatherForecastProps> {
    const res = await this.request<WeatherForecastProps>(`/forecast.json?${queryString.stringify({
      ...params,
      key: this.API_KEY,
      days: 1,
      aqi: 'no',
      alerts: 'no'
     })}`);
    return res;
  }
}

export const apiService = new APIService()
