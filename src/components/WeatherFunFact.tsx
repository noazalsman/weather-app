import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { bulb } from 'ionicons/icons';
import './WeatherFunFact.css'; // import CSS file

const WeatherFunFact: React.FC = () => {
    const [fact, setFact] = useState<string>("");

    const weatherFacts = [
        "A cumulus cloud can weigh up to a million pounds!",
        "A gallon of water weighs 8.34 pounds.",
        "About two-thirds of Earth’s rain falls near the equator.",
        "Antarctica is the coldest, windiest, highest and driest continent on Earth.",
        "At any given time, Earth’s atmosphere contains 37.5 million billion gallons of water vapor.",
        "Contrary to popular belief, lightning often does strike the same place twice!",
        "Hurricanes can push large amounts of sea water ashore, called storm surges.",
        "It’s a myth that no two snowflakes are exactly the same.",
        "Rain contains vitamin B12.",
        "The highest temperature ever recorded on Earth was 134°F!"
    ];

    useEffect(() => {
        setFact(weatherFacts[Math.floor(Math.random() * weatherFacts.length)]);
    }, []);

    return (
        <div className="weather-fun-fact-container">
            <IonIcon icon={bulb} className="weather-fun-fact-icon" />
            <h3>Weather Fun Fact!</h3>
            <p>{fact}</p>
        </div>
    );
};

export default WeatherFunFact;
