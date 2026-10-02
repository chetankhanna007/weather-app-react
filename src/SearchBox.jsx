import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ updateWeatherData, updateError }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'a200405ce6da38b8655c3bb5b54e41e1';

    const getWeatherInfo = async () => {
        try {
            
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let weatherData = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            }
            console.log(`${weatherData.temp}°`);
            console.log(weatherData);
            return weatherData;
        } catch (error) {
            throw error;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity('');
            let newWeatherData = await getWeatherInfo();
            updateWeatherData(newWeatherData);
            setError(false);
            updateError(false);
        } catch (error) {
            setError(true);
            updateError(true);
        }
    }
    
    return(
        <div className='SearchBox'>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Search the weather" variant="outlined" required value={city} onChange={handleChange}/><br /> <br />
                <Button variant="contained" type='submit' id='searchBtn'>Search</Button>
            </form>
            <br />
            {error===true && (<p style={{color:"red",}}>This place doesn't exist.</p>)}
        </div>
    )
}