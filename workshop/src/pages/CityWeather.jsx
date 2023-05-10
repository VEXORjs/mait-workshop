import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const CityWeather = () => {
    const { city } = useParams();
    const api_key = '94d56ca59eae1631d00a37603c272923';
    const [weather, setweather] = useState(false);
    const [image, setimage] = useState();
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(res => res.json())
            .then(respond => setweather(respond))
    }, [])
/*     useEffect(() => {
        if (weather) {
            fetch(`https://pixabay.com`)
                .then(res => res.json())
                .then(res => setimage(res.hits[0].largeImageURL));
        }
    }) */

    return (
        <>
            <div>CityWeather dla {city}</div>
            {
                weather && <ul>
                    <li>Temperatura: {weather.main.temp}</li>
                    <li>Pogoda ogolna: {weather.weather[0].main}</li>
                    <li>Cisnienie: {weather.main.pressure}</li>
                </ul>
            }
            {image}
        </>
    )
}

export default CityWeather