import React, { useState, useEffect } from 'react';
import { CityData, ForecastData } from '../types';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SelectBox from '../components/SelectBox';
import WeatherFunFact from '../components/WeatherFunFact';
import WeatherCard from '../components/WeatherCard';
import WeeklyForecast from '../components/WeeklyForecast';

const Home: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [cityData, setCityData] = useState<CityData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null); // Add state for forecast data

  useEffect(() => {
    const fetchWeatherData = async () => {
      if(city != null) {
        const apiKey = 'your_apiKey';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
  
        // Get forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
        const forecastData = await forecastResponse.json();
  
        const date = new Date();
        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
        const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  
        const weatherIconCode = data.weather[0].icon;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  
        setCityData({
          cityName: data.name,
          dayOfWeek: dayOfWeek,
          date: formattedDate,
          temperature: data.main.temp,
          weatherType: data.weather[0].main,
          humidity: data.main.humidity,
          feelsLike: data.main.feels_like,
          sunrise: sunrise,
          sunset: sunset,
          weatherIconCode: weatherIconCode
        });
  
        // Format and set forecast data
        const dailyForecastData = forecastData.list.reduce((dailyData: any, item: any) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
  
        // If this date is not yet in dailyData, add it with the current item's data
        if (!dailyData[date]) {
          dailyData[date] = {
            date: date,
            temperature: item.main.temp,
            weatherType: item.weather[0].main,
            weatherIconCode: item.weather[0].icon
          };
        } else {
          // Otherwise, update the existing data for this date
          // This example simply averages the temperatures, but you could do something more complex
          dailyData[date].temperature = (dailyData[date].temperature + item.main.temp) / 2;
        }
  
        return dailyData;
        }, {});
  
        setForecastData(Object.values(dailyForecastData));
      }
    }

    fetchWeatherData();
  }, [city]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noa's Weather App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Noa's Weather App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SelectBox onCityChange={(e) => setCity(e)} />
        {cityData ? <WeatherCard cityData={cityData}/> : <WeatherFunFact />}
        {forecastData ? <WeeklyForecast forecastData={forecastData}/> : null}
      </IonContent>
    </IonPage>
  );
};

export default Home;

