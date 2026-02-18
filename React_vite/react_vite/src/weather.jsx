import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const weather = () => {

    const [city,setCity]=useState("");
    const [weather,setWeather]=useState("");
    const handleCityChange=(event)=>{
        setCity(event.target.value)
    }
    const fetchWeather= async ()=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'f7bec21e4e12a357a9149312aac8bfb8'}`);
            setWeather(response);
            console.log(response)
        } catch (error) {
            console.log("Error Fetching Weateher data",error)
        }
    }
    const handleClick=()=>{
        fetchWeather();
    }
    return ( 
        <div className='weather-container'> 
        <input type='text' placeholder='Enter your City Name' value={city} onChange={handleCityChange}/>
        <br/><br/>
    <button onClick={handleClick}>Get Weather</button>
    {weather && <>
    <div className='Weather-info'>
        <h3>City:{weather.data.name}</h3>
        <p>Temp:{weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
    </div>
    </>}
    </div>
    
    )

}

export default weather;