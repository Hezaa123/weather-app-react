import React, { useState } from "react";
import Axios from "axios";
import WeatherForecastInfo from "./WeatherForecastInfo";

import "./WeatherForecast.css"

export default function WeatherForecast (props) {
    const [loaded, setloaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    function handleForecastResponse(response) {
        setForecastData(response.data);
        setloaded(true);
    }

    //Forecast will only be displayed if loaded, and the city / country match that of the current weather details
    //By accessing the forecast list, slicing the first 6 items, mapping it to go through each item individually, then each item is temporarily called forecastItem and therefore displayed
    if(loaded && props.city === forecastData.city.name && props.country === forecastData.city.country) {
        const forecastItems = forecastData.list.slice(0,6).map(function(forecastItem, index) {
                        return <WeatherForecastInfo key={index} data={forecastItem}/>
                    })
        return (
            <div className="WeatherForecast">
                <span className="forecastTitle">
                    3 Hourly
                </span> 
                <div className="threeHourlyForecast row no-gutters">
                    {forecastItems}
                </div>
            </div>
        );
    }else{
        const apiKey = "3f5abe4ce673d5dda415df055d820a42";
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},${props.country}&units=metric&appid=${apiKey}`;
        
        Axios.get(apiUrl).then(handleForecastResponse);

        return null
    }
}