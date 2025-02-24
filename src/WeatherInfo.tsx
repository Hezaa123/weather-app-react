import { FormattedDate } from "./FormattedDate";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherUnit } from "./WeatherUnit";
import { WeatherSunriseSunset } from "./WeatherSunriseSunset";
import { useUnit } from "./UnitContext";
import "./WeatherInfo.css";

interface WeatherInfoProps{
    data: {
        cityName: string;
        countryCode: string;
        temperature: number;
        description: string;
        icon: string;
        humidity: number;
        windspeed: number;
        feelsLike: number;
        sunrise: Date;
        sunset: Date;
        lastUpdated: Date;
    }
}
export const WeatherInfo = (props: WeatherInfoProps) => {
    const celsiusUnit = useUnit();

    const setUnit = {
        temperature: celsiusUnit ? props.data.temperature : ((props.data.temperature * 9) / 5 + 32),
        feelsLike: celsiusUnit ? props.data.feelsLike : ((props.data.feelsLike * 9) / 5 + 32)
    }
    
    return(
        <div className="WeatherInfo">
            <div className="locationName">{props.data.cityName}, {props.data.countryCode}</div>
            <div className="iconTemp clearfix">
                <div className = "icon">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <span className="temp">
                    {Math.round(setUnit.temperature)}
                </span>
                <span className="degree">
                    °
                </span>
                <WeatherUnit/>
            </div> 
            <div className="description">{props.data.description}</div>
            <div className="lastUpdated">Last Updated: <FormattedDate date={props.data.lastUpdated}/></div>
            
            <div className="details">
                <span className="feelsLike">
                    Feels like: {Math.round(setUnit.feelsLike)}°
                </span>
            </div>
            <ul className="details">
                <li className="humidity">
                    Humidity: {props.data.humidity}%
                </li>
                <li className="windspeed">
                    Windspeed: {Math.round(props.data.windspeed * 3.6)}km/h
                </li>
            </ul>
            <WeatherSunriseSunset sunriseDate={props.data.sunrise} sunsetDate={props.data.sunset}/>
        </div>
    );
}