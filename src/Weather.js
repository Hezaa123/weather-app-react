import React, { useState } from "react";
import Axios from "axios";
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt, faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import "./Weather.css";

export default function Weather(){
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState(null);
    const [apiCity, setApiCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [apiCountry, setApiCountry] = useState(null);
    const [description, setDescription] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [maxTemperature, setMaxTemperature] = useState(null);
    const [minTemperature, setMinTemperature] = useState(null);
    const [feelsLike, setFeelsLike] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [icon, setIcon] = useState(null);

    let searchForm = (
        <div className="Weather searchForm">
            <form onSubmit={handleSubmit}>
                <input
                    className="Weather searchBar"
                    type="search"
                    placeholder="Search location.."
                    autoFocus={false}
                    onChange={updateLocation}
                />
                <button className="Weather searchButton" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <button className="Weather geoLocationButton">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </button>
            </form>
        </div>
    );

    let currentWeather = (
        <div>
            <h2 className="Weather locationName">{apiCity}, {apiCountry}</h2>
            <div className="Weather description">{description}</div>
            <img className="Weather icon" src={icon} alt={description} />
            <div className="Weather currentTemp">
                {Math.round(temperature)}
                <span className="Weather units">
                    <a className="Weather celsiusLink" href="/">°C</a>
                    {" "}|{" "}
                    <a className="Weather fahrenheitLink" href="/">°F</a>
                </span>
            </div>
            <ul className="Weather details">
                <li>
                    <span className="Weather currentTempMax">{Math.round(maxTemperature)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                    <span className="Weather currentTempMin"> | {Math.round(minTemperature)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltDown} />
                </li>
                <li>Feels like: {Math.round(feelsLike)}°</li>
                <li>Humidity: {humidity}%</li>
                <li>Windspeed: {Math.round(wind)}km/h</li>
            </ul>
        </div>
  );
    
    function showWeather(response) {
        setLoaded(true);
        setApiCity(response.data.name);
        setApiCountry(response.data.sys.country);
        setDescription(response.data.weather[0].description);
        setTemperature(response.data.main.temp);
        setMaxTemperature(response.data.main.temp_max);
        setMinTemperature(response.data.main.temp_min);
        setFeelsLike(response.data.main.feels_like);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    }

    function searchLocation(city, country) {                                                                                           
        const apiKey = "3f5abe4ce673d5dda415df055d820a42";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
        Axios.get(apiUrl).then(showWeather);
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
    
    if (loaded) {
        return (
        <div className="Weather">
            {searchForm}
            {currentWeather}
        </div>
        );
    } else {
        searchLocation("London", "GB");
        return (
        <div>
            <div className="Weather">
                {searchForm}
            </div>
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