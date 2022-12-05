import React, { useState } from 'react'
import './weather.css'

const Weather = () => {
    const apiKey = '0f7648e3bb45f233b1b09cb1a8ce4157'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState()

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }
    const celcius = Math.round((weatherData?.main?.temp - 32) / 1.8);
    // console.log(celcius);
    // console.log(city);
    // const cityin = weatherData.name;
    // const handle = () => {
    //     localStorage.setItem('City', cityin);
    //     localStorage.setItem('Temperature', celcius);
    // };
    // const remove = () => {
    //     localStorage.removeItem('City');
    //     localStorage.removeItem('Temperature');
    // };
    return (
        <div>
            <div className='container container_weather_main'>
                <input className='weather_search_bar' placeholder='Enter city...' onChange={e => setCity(e.target.value)}
                    value={city} onKeyPress={getWeather} />
                {typeof weatherData.main === 'undefined' ? (
                    <p className='welcome_msg'>Welcome to the weather app! Enter in a city to get the weather...</p>
                ) : (
                    <div className='weather_data'>
                        <p className='weather_place'>{weatherData.name}</p>
                        <p className={(typeof weatherData.main != "undefined") ? ((celcius > 16) ? 'app_img'
                            : 'app_img_rainy') : 'app_img_rainy'}></p>
                        <p className='weather_temp'>{celcius}°C</p>
                        <p className='cloud_status'>{weatherData.weather[0].main}</p>
                        {/* <button className='save_btn' onClick={handle}>Save</button> */}
                    </div>
                )}
            </div>
            {/* <table className='table_weather'>
                <th>
                    <td className='city'>City</td>
                    <td className='Temperature'>Temperature</td>
                </th>
                <tr>
                    {localStorage.getItem('City') && (
                        <td className='city_td'>{(localStorage.getItem('City'))}</td>
                    )}
                        {localStorage.getItem('Temperature') && (
                            <td className='Temperature_td'>{(localStorage.getItem('Temperature'))}</td>
                        )}
                </tr>
                <button className='remove_btn' onClick={remove}>Remove</button>
            </table> */}
            <div>

            </div>
        </div>
    )
}

export default Weather