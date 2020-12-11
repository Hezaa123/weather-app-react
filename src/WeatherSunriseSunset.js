import React from "react";

export default function WeatherSunriseSunset(props) {

    function sunrise() {
        let hours = props.sunriseDate.getHours() < 10 ? `0${props.sunriseDate.getHours()}` : props.sunriseDate.getHours();
        let minutes = props.sunriseDate.getMinutes() < 10 ? `0${props.sunriseDate.getMinutes()}` : props.sunriseDate.getMinutes();

        return `${hours}:${minutes}`
    }

    function sunset() {
        let hours = props.sunsetDate.getHours() < 10 ? `0${props.sunsetDate.getHours()}` : props.sunsetDate.getHours();
        let minutes = props.sunsetDate.getMinutes() < 10 ? `0${props.sunsetDate.getMinutes()}` : props.sunsetDate.getMinutes();

        return `${hours}:${minutes}`
    }

    return(
        <div className="WeatherSunriseSunset">
            <ul className="details">
                <li className="sunrise">
                    Sunrise: {sunrise()}
                </li>
                <li className="sunset">
                    Sunset: {sunset()}
                </li>
            </ul>
        </div>
    );
}