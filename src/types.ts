interface ForecastConditionProps {
  icon: string;
  text: string;
}

export interface ForecastHourProps {
  time: string;
  time_epoch: number;
  condition: ForecastConditionProps;
  temp_c: number;
}

interface ForecastDayProps {
  day: {
    mintemp_c: number;
    maxtemp_c: number;
  };
  hour: ForecastHourProps[];
}

export interface WeatherForecastProps {
  location: {
    name: string;
  },
  forecast: {
    forecastday: ForecastDayProps[];
  },
  current: {
    wind_kph: number;
    temp_c: number;
    condition: ForecastConditionProps;
  },
}