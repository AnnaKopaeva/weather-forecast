import type { ForecastHourProps } from '@/types'

export function getGreetingFromLocalTime(): string {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export function getHour(dateValue: string): string {
  const date = new Date(dateValue);
  const hours = date.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour = hours % 12 || 12;
  return `${hour} ${period}`;
}

export function filterFromNow(forecast: ForecastHourProps[]): ForecastHourProps[] {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDate = now.toISOString().slice(0, 10);

  return forecast.filter(({ time }) => {
    const itemDate = time.slice(0, 10);
    const itemHour = new Date(time).getHours();

    return itemDate === currentDate && itemHour >= currentHour;
  });
}
