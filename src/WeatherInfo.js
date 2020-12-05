import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp, faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="locationName">{props.data.cityName}, {props.data.countryCode}</div>
            <div className="iconTemp clearfix">
                <div className = "icon float-left">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <span className="temp float-left">
                    {Math.round(props.data.temperature)}
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
            <div className="description">{props.data.description}</div>
            <div className="lastUpdated">Last Updated: <FormattedDate date={props.data.lastUpdated}/></div>
            
            <ul className="details">
                <li className="li highsOfLowsOf">
                    <span className="tempMax">{Math.round(props.data.temperatureMax)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                    <span className="tempMin"> | {Math.round(props.data.temperatureMin)}°</span>
                    <FontAwesomeIcon icon={faLongArrowAltDown} />
                </li>
                <li className="li humidity">Humidity: {props.data.humidity}%</li>
            </ul>
            <ul className="details">
                <li className="li feelsLike">
                Feels like: {Math.round(props.data.feelsLike)}°</li>
                <li className="li windspeed">Windspeed: {Math.round(props.data.windspeed)}km/h</li>
            </ul>
        </div>
    )
}