export interface CityData {
    cityName: string;
    dayOfWeek: string;
    date: string;
    temperature: number;
    weatherType: string;
    humidity: number;
    feelsLike: number;
    sunrise: string;
    sunset: string;
    weatherIconCode: string;
}

export interface ForecastData {
    date: string;
    temperature: number;
    weatherType: string;
    weatherIconCode: string;
    dayOfWeek: string;
}

export interface WeatherCardProps {
    cityData: CityData;
}

export interface SelectBoxProps {
    onCityChange: (city: string) => void;
}
  
  