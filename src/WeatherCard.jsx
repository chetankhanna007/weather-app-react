import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./WeatherCard.css";
import {HOT_URL, COLD_URL, RAIN_URL, SHINY_URL, NOT_EXIST_URL} from "./helper.js"

export default function WeatherCard({weatherData,error}) {
    

    console.log(weatherData.city);


    return(
        <div className="weatherCard">
            {/* <h1>Weather Info - {weatherData.weather}</h1> */}
            <br />
            <div className='weatherCardContainer'>
                <Card sx={{ maxWidth: 345 }} style={{width: "400px", border: "1px solid #c3b5b5", boxShadow: "2px 2px 15px gray"}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={(error === true) ? NOT_EXIST_URL : weatherData.humidity > 80 ? RAIN_URL : weatherData.temp > 25 ? HOT_URL : (15 < weatherData.temp < 25) ? SHINY_URL : weatherData.temp <= 15 && COLD_URL}
                    alt="Weather Image"
                    style={{height: "220px"}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherData?.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                        <div>Temperature : {weatherData?.temp} &deg;C</div>
                        <div>Humidity : {weatherData?.humidity}%</div>
                        <div>Minimum Temperature : {weatherData?.tempMin} &deg;C</div>
                        <div>Maximum Temperature : {weatherData?.tempMax} &deg;C</div>
                        <div>Temperature feels like : {weatherData?.feelsLike} &deg;C</div>
                        <div><h3>{weatherData?.weather}</h3></div>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
            <br />
            {error===true && (<p style={{color:"red",}}>This place doesn't exist(State Lift up has been used here.)</p>)}
        </div>
    )
}