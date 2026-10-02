import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        city : 'Delhi',
        feelsLike : 40.58,
        humidity : 41,
        temp : 36.52,
        tempMax : 36.52,
        tempMin : 36.52,
        weather : "clear sky",
    });

    const[error, setError] = useState(false);
    console.log(error);

    let updateWeatherData = (newWeatherData) => {
        setWeatherData(newWeatherData);
    }

    let updateError = (newError) => {
        setError(newError);
    }


    return(
        <div className="weatherAppContainer">
            <SearchBox updateWeatherData={updateWeatherData} updateError={updateError}/>
            <WeatherCard weatherData={weatherData} error={error}/>
        </div>
    )
}