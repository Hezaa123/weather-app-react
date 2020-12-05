import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }
    if(unit === "celsius") {
        return(
            <span className= "WeatherTemperature">
                <span className="temp">
                    {Math.round(props.celsius)}
                </span>
                <span className="degree">
                    °
                </span>
                <div className="units">
                    <span className="activeUnit">C</span>
                    <br/>
                    <a className="unitLink" href="/" onClick={showFahrenheit}>F</a>
                </div>
            </span>
        );
    } else {
        let fahrenheit = (props.celsius * 9)/5 + 32;
        return(
            <span className= "WeatherTemperature">
                <span className="temp">
                    {Math.round(fahrenheit)}
                </span>
                <span className="degree">
                    °
                </span>
                <span className="units">
                    <span className="activeUnit" href="/">F</span>
                    <br/>
                    <a className="unitLink" href="/" onClick={showCelsius}>C</a>
                </span>
            </span>
        );
    }
    
}