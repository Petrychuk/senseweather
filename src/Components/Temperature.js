import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";

export default function Weather(props) {
  const [data, setData] = useState({
    temperature: null,
    description: null,
    humidity: null,
    wind: null,
    icon: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "a20a1e741e425790fda43f119987f4da";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then((response) => {
      setData({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
      setLoading(false);
    });
  }, [props.city]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <ul>
          <li>Temperature: {Math.round(data.temperature)}°C</li>
          <li>Description: {data.description}</li>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind: {data.wind} km/h</li>
          <li>
            <img src={data.icon} alt={data.description} />
          </li>
        </ul>
      </div>
    );
  }
}
