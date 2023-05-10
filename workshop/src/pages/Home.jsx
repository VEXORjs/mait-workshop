import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [city, setCity] = useState("Warszawa");
    const cities = ['Warszawa', 'Londyn', "Paryz", 'Bangkok', 'Laponia'];
    const navigate = useNavigate();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            navigate(`/cityweather/${city}`);
        }}>
            <h1>Aplikacja pogodowa</h1>
            <select value={city} onChange={(event => setCity(event.target.value))}>
                {
                    cities.map(el => {
                        return <option key={el} value={el}>{el}</option>
                    })
                }
            </select>
            <button>sprawdz jaka jest pogoda w {city}</button>

        </form>
    )
}

export default Home