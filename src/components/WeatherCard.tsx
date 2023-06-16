import React from 'react';
import { WeatherCardProps  } from '../types';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './WeatherCard.css'

type CityNames = 'london' | 'paris' | 'sydney' | 'telaviv';

const WeatherCard: React.FC<WeatherCardProps> = ({ cityData }) => {
  const img_urls: Record<CityNames, string> = {
    london : "https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg",
    paris: "https://media.cnn.com/api/v1/images/stellar/prod/230324090551-01-visiting-france-during-protests-what-to-know-top.jpg?c=16x9&q=h_720,w_1280,c_fill",
    sydney: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
    telaviv: "https://media.timeout.com/images/105434111/image.jpg"
  }

  let city_name = cityData.cityName.toLowerCase()
  if(city_name === "tel aviv") {
    city_name = "telaviv";
  }
  
  const img_url = img_urls[city_name as CityNames]

  return (
    <IonCard className="weather-card">
      <img src={img_url} alt={cityData.cityName} className='photo'/>
      <IonCardHeader>
        <IonCardTitle style={{color: "white"}}>{cityData.cityName}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <h3 className="temperature">{cityData.temperature.toFixed(0)}°C</h3>
        <h4>Feels like: {cityData.feelsLike.toFixed(0)}°C</h4>
        <h4>{cityData.weatherType}</h4>
        <h4>Humidity: {cityData.humidity}%</h4>
        <h4>Sunrise: {cityData.sunrise}</h4>
        <h4>Sunset: {cityData.sunset}</h4>
        <h3>Today, {cityData.dayOfWeek}, {cityData.date}</h3>
        <img src={`https://openweathermap.org/img/wn/${cityData.weatherIconCode}.png`} alt={cityData.weatherType} className='weather-icon'/>
      </IonCardContent>

    </IonCard>
  );
};

export default WeatherCard;
