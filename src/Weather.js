import React, { useState } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt, faLongArrowAltUp, faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";

export default function Weather(){
    const [weatherData, setWeatherData] = useState({loaded: false})
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);

    const searchForm = (
        <form onSubmit={handleSubmit}>
            <div className = "locationSearch input-group">
                <input
                    className="searchBar form-control rounded pr-3"
                    type="search"
                    placeholder="Search location.."
                    autoFocus={false}
                    onChange={updateLocation}
                />
                <button className="searchButton btn" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
                <button className="geoLocationButton btn mt-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </button>
        </form>
    );

    const currentWeather = (
        <div className="currentWeather">
            <div className="locationName">{weatherData.cityName}, {weatherData.countryCode}</div>
            <div className="iconTemp clearfix">
                <img className="icon float-left" src={weatherData.icon} alt={weatherData.description} />
                <span className="currentTemp float-left">
                    {Math.round(weatherData.temperature)}
                </span>
                <span className="degree float-left">
                    °
                </span>
                <span className="unitLinks">
                    <a className="celsiusLink" href="/">C</a>
                    <br/>
                    <a className="fahrenheitLink" href="/">F</a>
                </span>
            </div> 
            <div className="description">{weatherData.description}</div>
            <div className="lastUpdated">Last Updated: <FormattedDate date={weatherData.lastUpdated}/></div>
            
            <ul className="details">
                <li className="li highsOfLowsOf">
                    <span className="currentTempMax">{Math.round(weatherData.temperatureMax)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                    <span className="currentTempMin"> | {Math.round(weatherData.temperatureMin)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltDown} />
                </li>
                <li className="li humidity">Humidity: {weatherData.humidity}%</li>
            </ul>
            <ul className="details">
                <li className="li feelsLike">
                Feels like: {Math.round(weatherData.feelsLike)}°</li>
                <li className="li windspeed">Windspeed: {Math.round(weatherData.windspeed)}km/h</li>
            </ul>
        </div>
    );
    
    function setWeather(response) {
        setWeatherData({
            loaded: true,
            cityName: response.data.name,
            countryCode: response.data.sys.country,
            description: response.data.weather[0].description,
            lastUpdated: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            temperatureMax: response.data.main.temp_max,
            temperatureMin: response.data.main.temp_min,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            windspeed: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
    }

    function searchLocation(city, country) {                                                                                           
        const apiKey = "3f5abe4ce673d5dda415df055d820a42";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
        Axios.get(apiUrl).then(setWeather);
    }
    function handleSubmit(event) {
        event.preventDefault();
        searchLocation(city, country);
    }

    function updateLocation(event){
        const location = event.target.value;
        const locationArray = location.split(",");

        setCity(locationArray[0]);
        setCountry(locationArray[1]);
    }
    
    if (weatherData.loaded) {
        return (
            <div className="Weather">
                {searchForm}
                {currentWeather}
            </div>
        );
    } else {
        searchLocation("London", "GB");
        return (
            <div className="Weather">
                {searchForm}
                <Loader
                    type="ThreeDots"
                    color="Black"
                    height={50}
                    width={50}
                />
            </div>
        );
    }
}