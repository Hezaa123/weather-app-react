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

    const searchForm = (
        <form onSubmit={handleSubmit}>
            <div className = "input-group mb-3">
                <input
                    className="searchBar form-control rounded"
                    type="search"
                    placeholder="Search location.."
                    autoFocus={false}
                    onChange={updateLocation}
                />
                <div className="input-group-append">
                    <button className="searchButton btn" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                
                <button className="geoLocationButton btn">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </button>
            </div>
        </form>
        
    );

    const currentWeather = (
        <div className="currentWeather">
            <div className="locationName">{apiCity}, {apiCountry}</div>
            <div className="iconTemp clearfix">
                <img className="icon float-left" src={icon} alt={description} />
                <span className="currentTemp float-left">
                    {Math.round(temperature)}
                </span>
                <span className="degree float-left">
                    °
                </span>
                <span className="unitLinks">
                    <a className="celsiusLink " href="/">C</a>
                    <br/>
                    <a className="fahrenheitLink" href="/">F</a>
                </span>
            </div> 
            
            <div className="description">{description}</div>
            <div className="lastUpdated">Last Updated: 23:35pm</div>
            <div className="row">
                <div className="col">

                </div>
            </div>
            <ul className="details">
                <li className="li highsOfLowsOf">
                    <span className="currentTempMax">{Math.round(maxTemperature)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                    <span className="currentTempMin"> | {Math.round(minTemperature)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltDown} />
                </li>
                <li className="li feelsLike">Feels like: {Math.round(feelsLike)}°</li>
            </ul>
            <ul className="details">
                <li className="li humidity">Humidity: {humidity}%</li>
                <li className="li windspeed">Windspeed: {Math.round(wind)}km/h</li>
            </ul>
        </div>
    );
    
    const hourlyForecast = (
        <div>
            Hourly forecast here
        </div>
    )
    
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
                {hourlyForecast}
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