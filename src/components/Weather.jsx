import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
  if (city.trim() === "") {
    setError("Please enter a city name.");
    setWeatherData(null);
    return;
  }

  try {
    setLoading(true);
    setError(""); // Clear previous error

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "City not found.");
      setWeatherData(null);
      return;
    }

    const icon = allIcons[data.weather[0].icon] || clear_icon;
    setWeatherData({
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      temperature: Math.floor(data.main.temp),
      location: data.name,
      icon: icon,
    });
  } catch (error) {
    setError("Failed to fetch data. Please try again.");
    setWeatherData(null);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    search('Delhi');
  }, []);

  return (
    <div className='weather'>
      <div className='card glass'>
        <div className='search-bar'>
          <input ref={inputRef} type="text" placeholder='Search City' />
          <img
            src={search_icon}
            alt="search"
            onClick={() => search(inputRef.current.value)}
            className='search-icon'
          />
        </div>
        {error && <div className="error-message">{error}</div>}


        {loading ? (
          <div className="shimmer-wrapper">
            <div className="shimmer circle" />
            <div className="shimmer temp" />
            <div className="shimmer location" />
            <div className="shimmer info" />
          </div>
        ) : weatherData ? (
          <div className='fade-in'>
            <img src={weatherData.icon} alt="weather" className='weather-icon' />
            <p className='temperature'>{weatherData.temperature}°C</p>
            <p className='location'>{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="humidity" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="wind" />
                <div>
                  <p>{weatherData.windSpeed} kmph</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
