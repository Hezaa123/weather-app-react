import { useUnit, useUnitUpdate } from "./UnitContext";
import { WeatherUnitLink } from "./weatherUnit.styles";

export const WeatherUnit = () =>{
    const celsiusUnit = useUnit();
    const toggleUnit = useUnitUpdate();

    if(celsiusUnit) {
        return(
            <span className= "WeatherUnit">
                <div className="units">
                    <span className="activeUnit">C</span>
                    <br/>
                    <WeatherUnitLink className="unitLink" href="/" onClick={toggleUnit}>F</WeatherUnitLink>
                </div>
            </span>
        );
    } else {
        return(
            <span className= "WeatherUnit">
                <span className="units">
                    <span className="activeUnit">F</span>
                    <br/>
                    <WeatherUnitLink className="unitLink" href="/" onClick={toggleUnit}>C</WeatherUnitLink>
                </span>
            </span>
        );
    }
    
}