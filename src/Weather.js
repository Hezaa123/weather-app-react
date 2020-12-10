import React, { useState } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({loaded: false})
    const [city, setCity] = useState(props.defaultCity);
    const [countryCode, setCountryCode] = useState(props.defaultCountryCode);

    // Search bar with button, followed by a geolocation button and additional info button
    const searchForm = (
        <form onSubmit={handleSubmit}>
            <div className="locationSearch input-group">
                <input
                    className="searchBar form-control rounded"
                    type="search"
                    placeholder="Search location.."
                    autoFocus={false}
                    onChange={updateLocation}
                />
                <button className="searchButton btn" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <span className="searchInfo">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <span className="infoDetails">
                        Try searching for "City, 2-Letter Country Code" e.g. London, GB
                    </span>
                </span>
            </div>
            <button className="geoLocationButton btn mt-2" onClick={handleGeolocation}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </button>
        </form>
    );
    
    // Function used to set the weather data when a search has been performed
    function setWeather(response) {
        setWeatherData({
            loaded: true,
            cityName: response.data.name,
            countryCode: response.data.sys.country,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            lastUpdated: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            windspeed: response.data.wind.speed,
            sunrise: new Date(response.data.sys.sunrise * 1000),
            sunset: new Date(response.data.sys.sunset * 1000)
        })
    }

    //Function used to call the API once the submit has been handled
    function searchLocation() {                                                                                           
        const apiKey = "3f5abe4ce673d5dda415df055d820a42";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;
        Axios.get(apiUrl).then(setWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchLocation();
    }
    
    //Function used to call the API once the coordinated of current location have been fetched
    function setCoordinates(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiKey = "3f5abe4ce673d5dda415df055d820a42";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        Axios.get(apiUrl).then(setWeather);
    }

    function handleGeolocation() {
        navigator.geolocation.getCurrentPosition(setCoordinates);
    }

    function updateLocation(event) {
        const location = event.target.value;
        const locationArray = location.split(",");

        setCity(locationArray[0]);
        setCountryCode(locationArray[1]);
    }

    //Function created to determine the time of day, so I can add a second className to the div with class Weather
    function getTime() {
        const date = new Date();
        const hours = date.getHours();
        let time = "sunrise";

        if(hours >= 8 && hours < 10) {
            time = "morning";
        } else if(hours >= 10 && hours < 17) {
            time = "day";
        } else if(hours >= 17 && hours < 20) {
            time = "dusk";
        } else if(hours >= 20 || hours < 5) {
            time ="night";
        }

        return time;
    }
    
    if(weatherData.loaded) {
        return (
            <div className={"Weather " + getTime()}>
                {searchForm}
                <WeatherInfo data={weatherData}/>
                <WeatherForecast city={weatherData.cityName} country={weatherData.countryCode}/>
            </div>
        );
    } else {
        const color = getTime()==="night" ? "White" : "Black";
        searchLocation();

        return (
            <div className={"Weather " + getTime()}>
                {searchForm}

                <Loader
                    type="ThreeDots"
                    color={color}
                    height={50}
                    width={50}
                />
            </div>
        );
    }
}