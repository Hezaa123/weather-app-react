import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="locationName">{props.data.cityName}, {props.data.countryCode}</div>
            <div className="iconTemp clearfix">
                <div className = "icon">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <WeatherTemperature celsius={props.data.temperature}/>
            </div> 
            <div className="description">{props.data.description}</div>
            <div className="lastUpdated">Last Updated: <FormattedDate date={props.data.lastUpdated}/></div>
            
            <div className="details">
                <span className="li feelsLike">
                    Feels like: {Math.round(props.data.feelsLike)}°
                </span>
            </div>
            <ul className="details">
                <li className="li humidity">
                    Humidity: {props.data.humidity}%
                </li>
                <li className="li windspeed">
                    Windspeed: {Math.round(props.data.windspeed)}km/h
                </li>
            </ul>
            <ul className="details">
                <li className="li sunrise">
                Sunrise: </li>
                <li className="li sunset">Sunset: </li>
            </ul>
        </div>
    );
}