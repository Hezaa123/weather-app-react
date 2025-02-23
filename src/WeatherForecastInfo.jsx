import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useUnit } from "./UnitContext";

export default function WeatherForecastInfo(props) {
    const celsiusUnit = useUnit();
    const setUnit = {
        temperature: celsiusUnit ? props.data.main.temp : ((props.data.main.temp * 9) / 5 + 32),
    }

    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }

    return(
        <div className="WeatherForecastInfo col-2 nopadding">
            <div className="threeHourForecast">
                {hours()}
                <WeatherIcon code={props.data.weather[0].icon}/>
                {Math.round(setUnit.temperature)}°
            </div>
        </div>
    );
}