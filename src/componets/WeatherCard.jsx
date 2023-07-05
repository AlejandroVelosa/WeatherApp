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
    <article className="weather">
      <header className="weather_header">
        <div className="weather_position">
          <i className="ubicacion_icon bx bx-map"></i>
          <h2 className="weather_subtitle">
            <span className="weather_city"> {weather?.name}</span>{" "}
            <span className="weather_subtitle-country">
              {weather?.sys.country}
            </span>
          </h2>
        </div>
        <div className="weather_cloud">
          <div>
            <i className="  wint bx bx-wind"></i>
            <i className="cloud bx bx-cloud "></i>
          </div>
          <h2 className="weather_cloud-fast">
            <span className="weather_cloud-medi">{weather?.wind.speed}</span>{" "}
            <span className="weather_cloud-cloud">m/s</span>{" "}
          </h2>
        </div>
      </header>
      <section className="weather_body">
        <div className="weather_img-container">
          <img
            className="img-nube"
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
      <section className="weather_info center">
        <ul className="weather_list">
          <li className="weather_list-item humidity">
            <span className="weather_list-label">
              <span className="weather_list-lavel-wind">Humidity</span>
              <i className="icon bx bx-cloud-light-rain"></i>
            </span>
            <span className="weather_list-value">
              <span className="number_weather"> {weather?.main.humidity}</span>
              <span className="metres_weather">%</span>
            </span>
          </li>
          <li className="weather_list-item clouds">
            <span className="weather_list-label">
              <span className="weather_list-lavel-wind">Clouds</span> <i className="icon bx bx-cloud"></i>{" "}
            </span>
            <span className="weather_list-value">
              <span className="number_weather"> {weather?.clouds.all}</span>{" "}
              <span className="metres_weather">%</span>
            </span>
          </li>
          <li className="weather_list-item pressure">
            <span className="weather_list-label">
              <span className="weather_list-lavel-wind">Pressure </span>
              <i className="icon-p bx bx-vertical-center"></i>
            </span>
            <span className="weather_list-value">
              <span className="number_weather">{weather?.main.pressure}</span>
              <span className="metres_weather"> hPa</span>
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
