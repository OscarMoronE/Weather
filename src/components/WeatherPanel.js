import React, { useState } from 'react'
import Form from './Form';
import Cards from './Cards';

const WeatherPanel = () => {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=ce87fa7c79a6aafabce7468b5de8662e&lang=en';
    let cityUrl = "&q=";

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=ce87fa7c79a6aafabce7468b5de8662e&lang=en';

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("")

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //llamada weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather)
            .then((res) => {
                if (!res.ok) throw { res }
                return res.json();
            }).then((weatherData) => {
                setWeather(weatherData);
                console.log(weatherData);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false)
            })
        // obtener forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast)
            .then((res) => {
                if (!res.ok) throw { res }
                return res.json();
            }).then((forecastData) => {
                setForecast(forecastData);
                console.log(forecastData);

                setLoading(false);
                setShow(true);

            }).catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });
    }

    return (
        <>
            <Form newLocation={getLocation} />
            <Cards show={show} loading={loading} weather={weather} forecast={forecast} />
        </>

    );
}

export default WeatherPanel