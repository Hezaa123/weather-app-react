import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastHourly.css";

export default function WeatherForecastInfo(props){
    function hours(){
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }
    
    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°`
    }

    return(
        <div className="WeatherForecastHourly col">
            <div className="threeHourForecast">
                {hours()}
                <WeatherIcon code={props.data.weather[0].icon}/>
                {temperature()}
            </div>
        </div>
    );
}