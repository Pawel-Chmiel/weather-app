import React from 'react';

const Result = (props) => {

    const { icon, city, sunrise, sunset, temp, wind, pressure, timezone, err } = props.weatherData;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date((sunrise + timezone - 3600) * 1000).toLocaleTimeString();
        const sunsetTime = new Date((sunset + timezone - 3600) * 1000).toLocaleTimeString();
        const cityText = city.toUpperCase();

        content = (
            <div className="result">
                <h1>{cityText}</h1>
                <img
                    className="icon"
                    src={`https://openweathermap.org/img/w/${icon}.png`}
                    alt="weather-img"
                />
                <h4 className="temp">{temp.toFixed(0)}&deg;C</h4>
                <h4>Wschód słońca: <span>{sunriseTime}</span></h4>
                <h4>Zachód słońca: <span>{sunsetTime}</span></h4>
                <h4>Ciśnienie: <span>{pressure}</span> hPa</h4>
                <h4>Prędkość wiatru: <span>{wind}</span> km/h</h4>
            </div>
        )
    }

    return (
        <>
            {err ? <p>{`Nie mamy w bazie miasta ${city}`}</p> : content}
        </>
    );
}

export default Result;