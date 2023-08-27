import { useState } from "react";
import "../componets/styles/weatherCard.css";

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [changeF, setChangeF] = useState(true);

  const handleChange = () => {
    setIsCelsius(!isCelsius);
    setChangeF(!changeF);
  };

  const toggleTemperature = () => {
    if (isCelsius) {
      return temp.celsius;
    } else {
      return temp.farenheit;
    }
  };

  return (
    <article className="weather">
      <section className="weather_body">
        <div className="weather_img-container">
          <img
            className="img-nube"
            src={
              weather &&
              `https://openweathermap.org/img/wn/${weather?.weather[0].icon
              }@4x.png`
            }
            alt=""
          />
        </div>
        <div className="weather_img-nuves">
          <img
            className="img_nubes"
            src="./img/Cloud-background.png"
            alt=""
          />
        </div>
      </section>

      <section className="weather_text-body">
        <h2 className="weather_temp">{toggleTemperature()}
          <span className="weather_cf">{isCelsius ? "C°" : "F°"}</span>
        </h2>
        <p className=" weather_time">{weather.weather[0].description}</p>
        <p className="weather_country">{weather.sys.country}</p>
        <div className="weather_city">
          <i className="weather_ub bx bx-map"></i>
          <p className="weather_city">{weather.name}</p>
        </div>
        <button className="weather_btn" onClick={handleChange}>
          {changeF ? "°F" : "°C"}
        </button>
      </section>

    </article>
  );
};

export default WeatherCard;
