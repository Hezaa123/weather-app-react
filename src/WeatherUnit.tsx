import { useUnit, useUnitUpdate } from "./UnitContext";

export const WeatherUnit = () =>{
    const celsiusUnit = useUnit();
    const toggleUnit = useUnitUpdate();

    if(celsiusUnit) {
        return(
            <span className= "WeatherUnit">
                <div className="units">
                    <span className="activeUnit">C</span>
                    <br/>
                    <a className="unitLink" href="/" onClick={toggleUnit}>F</a>
                </div>
            </span>
        );
    } else {
        return(
            <span className= "WeatherUnit">
                <span className="units">
                    <span className="activeUnit">F</span>
                    <br/>
                    <a className="unitLink" href="/" onClick={toggleUnit}>C</a>
                </span>
            </span>
        );
    }
    
}