import { useState } from "react";
import "../componets/styles/weatherCard.css";

const WeatherCard = ({ weather, temp, backgroundImage }) => {
  const [isCelsius, setisCelsius] = useState(true);
  const [changeF, setChangeF] = useState(true);

  const handleChange = () => {
    setisCelsius(!isCelsius);
    setChangeF(!changeF);
  };

  return (
    <article className="weather" >
      <header className="weather_header">
        <h2 className="weather_subtitle">
          {weather?.name} , {weather?.sys.country}
        </h2>
      </header>
      <section className="weather_body">
        <div className="weather_img-container">
          <img
            src={
              weather &&
              `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
            }
            alt=""
          />

        </div>
        <div className="weather_temperature">
          <h2 className="weather_temp">
            {isCelsius ? temp?.celsius + " °" : temp?.farenheit + " °F"}
          </h2>
          <h3 className="weather_info-title">
            "{weather?.weather[0].description}"
          </h3>
        </div>
      </section>
      <section className="weather_info">
        <ul className="weather_list">
          <li className="weather_list-item">
            <span className="weather_list-label">Wind Speed <i className="bx bx-wind"></i> </span>
            <span className="weather_list-value">
              {weather?.wind.speed}m/s
            </span>
          </li>
          <li className="weather_list-item">
            <span className="weather_list-label">Clouds <i className="bx bx-cloud"></i> </span>
            <span className="weather_list-value">{weather?.clouds.all}% </span>
          </li>
          <li className="weather_list-item">
            <span className="weather_list-label">Pressure <i className="bx bx-vertical-center"></i></span>
            <span className="weather_list-value">
              {weather?.main.pressure} hPa
            </span>
          </li>
        </ul>
      </section>
      <footer className="weather_footer">
        <button className="weather_btn" onClick={handleChange}>
          {changeF ? "change to °F" : "change to °C"}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;
