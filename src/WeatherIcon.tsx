import ReactAnimatedWeather from "react-animated-weather";

interface WeatherIconProps{
    code: string;
}

export const WeatherIcon = (props: WeatherIconProps) => {
    const codeMapping: { [key: string]: string } = {
        "01d" : "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : "PARTLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "03d" : "PARTLY_CLOUDY_DAY",
        "03n" : "PARTLY_CLOUDY_NIGHT",
        "04d" : "CLOUDY",
        "04n" : "CLOUDY",
        "09d" : "RAIN",
        "09n" : "RAIN",
        "10d" : "RAIN",
        "10n" : "RAIN",
        "11d" : "RAIN",
        "11n" : "RAIN",
        "13d" : "SNOW",
        "13n" : "SNOW",
        "50d" : "FOG",
        "50n" : "FOG",
    }

    const date = new Date();
    const hours = date.getHours();

    let color = "#000000";

    if(hours >= 20 || hours < 5){
        color = "#ffffff";
    }

    return(
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color= {color}
            size={70}
            animate={true}
        />  
    );
}