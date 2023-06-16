import React from 'react';
import { ForecastData } from '../types';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './WeeklyForecast.css'

interface WeeklyForecastProps {
  forecastData: ForecastData[];
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ forecastData }) => {
  // Extract the next 5 days starting from tomorrow
  const nextFiveDaysData = forecastData.slice(1, 6);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div>
        <div className="header-container">
            <h2>Weekly Forecast</h2>
        </div>
        <div id='container'>
            {nextFiveDaysData.map((dayData, index) => {
                // Manually parse the date
                const [month, day, year] = dayData.date.split('/');
                const date = new Date();
                date.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));

                // Get the name of the day
                const dayName = daysOfWeek[date.getDay()];

                return (
                    <IonCard key={index} className="forecast-card">
                        <IonCardHeader>
                        {/* Display the name of the day */}
                        <IonCardSubtitle style={{color : "white"}}>{dayName}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                        {dayData.temperature.toFixed(0)}°
                        <br/>
                        {dayData.weatherType}
                        <br />
                        <img src={`https://openweathermap.org/img/wn/${dayData.weatherIconCode}.png`} alt={dayData.weatherType} />
                        </IonCardContent>
                    </IonCard>
                );
            })}
        </div>
    </div>
  );
};

export default WeeklyForecast;
