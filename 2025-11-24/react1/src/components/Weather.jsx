import axios from "axios";
import { useEffect, useState } from "react"

export default function Weather({nazwa,url})
{
    const [weatherData,setWeatherData] = useState({current:{}});

    useEffect(()=>{
        axios.get(url)
        .then(res=>setWeatherData(res.data));
    },[weatherData])

    return(
        <>
            <h2>{nazwa}</h2>
            <div>
                <p>Temperatura: {weatherData.current.temperature_2m}</p>
                <p>Wilgotność: {weatherData.current.relative_humidity_2m}</p>
                <p>Deszcz: {weatherData.current.rain}</p>
                <p>Opady śniegu: {weatherData.current.snowfall}</p>
                <p>Prędkość wiatru: {weatherData.current.wind_speed_10m}</p>
                <p>Kierunek wiatru: {weatherData.current.wind_direction_10m}</p>
            </div>
        </>
    )
}