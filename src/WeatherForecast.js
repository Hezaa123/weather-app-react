import React, { useState } from "react";
import Axios from "axios";
import WeatherForecastInfo from "./WeatherForecastInfo";

import "./WeatherForecast.css"

export default function WeatherForecast (props){
    const [loaded, setloaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    function handleForecastResponse(response){
        setForecastData(response.data);
        setloaded(true);
    }

    if(loaded && props.city === forecastData.city.name){
        return (
            <div className="WeatherForecast">
                <span className="forecastTitle">
                    3 Hourly
                </span> 
                <div className="threeHourlyForecast row no-gutters">
                    <WeatherForecastInfo data={forecastData.list[0]}/>
                    <WeatherForecastInfo data={forecastData.list[1]}/>
                    <WeatherForecastInfo data={forecastData.list[2]}/>
                    <WeatherForecastInfo data={forecastData.list[3]}/>
                    <WeatherForecastInfo data={forecastData.list[4]}/>
                    <WeatherForecastInfo data={forecastData.list[5]}/>
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