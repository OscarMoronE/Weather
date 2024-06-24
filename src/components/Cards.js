import React from 'react'
import Cargando from './Cargando'
import photo from '../img/weatherCity.jpeg'

const Cards = ({ loading, show, weather, forecast }) => {

    let todayIs = new Date();
    let day = todayIs.getDate();
    let month = todayIs.getMonth() + 1;
    let year = todayIs.getFullYear();
    let date = day + '/' + month + '/' + year;
    let icon = ""
    let iconUrl;
    let icon3hour;
    let icon6hour;
    let icon9hour;

    let forecast3;
    let forecast6;
    let forecast9;

    if (loading) {
        return <Cargando />;
    }

    if (show) {
        icon = "http://openweathermap.org/img/w/";
        iconUrl = icon + weather.weather[0].icon + ".png"

        icon3hour = icon + forecast.list[1].weather[0].icon + ".png";
        icon6hour = icon + forecast.list[2].weather[0].icon + ".png";
        icon9hour = icon + forecast.list[3].weather[0].icon + ".png";

        forecast3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 16);
        forecast6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 16);
        forecast9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 16);
    }

    return (
        <div className='mt-3'>
            {show === true ? (
                <div className='container'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <h3 className='card-title'>{weather.name}</h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed()}°C</h1>
                                <p className='card-desc'><img src={iconUrl} alt="Weather icon" />{weather.weather[0].description}</p>
                                <img className='img-fluid rounded-start' src={photo} alt='Location' />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body text-start mt-2'>
                                    <h5 className='card-text'>Max temperature {(weather.main.temp_max - 273.15).toFixed()}°C</h5>
                                    <h5 className='card-text'>Min temperature {(weather.main.temp_min - 273.15).toFixed()}°C</h5>
                                    <h5 className='card-text'>Thermal sensation {(weather.main.feels_like - 273.15).toFixed()}°C</h5>
                                    <h5 className='card-text'>Wind {weather.wind.speed} m/s</h5>
                                    <h5 className='card-text'>Humidity {weather.main.humidity}%</h5>
                                    <div className='embed-responsive embed-responsive-16by9'>
                                        <iframe
                                            title="map"
                                            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d${weather.coord.lon}!3d${weather.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1623916874013!5m2!1sen!2s`}
                                            width="100%" style={{ border: 0 }} allowFullScreen=""
                                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                                <hr />
                                <div className='row mt-4'>
                                    <div className='col-12 col-md-4'>
                                        <p>{forecast3} H</p>
                                        <p className='description'><img src={icon3hour} alt='.' />{forecast.list[1].weather[0].description}</p>
                                        <p className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed()}°C</p>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <p>{forecast6} H</p>
                                        <p className='description'><img src={icon6hour} alt='.' />{forecast.list[2].weather[0].description}</p>
                                        <p className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed()}°C</p>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <p>{forecast9} H</p>
                                        <p className='description'><img src={icon9hour} alt='.' />{forecast.list[3].weather[0].description}</p>
                                        <p className='temp'>{(forecast.list[3].main.temp - 273.15).toFixed()}°C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<h3 className="text-light">No data</h3>)}
        </div>
    )
}

export default Cards
