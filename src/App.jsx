import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getApiKey from "./utils/getApiKey";
import WeatherCard from "./componets/WeatherCard";
import Loading from "./componets/Loading";
import Formulario from "./componets/Formulario";
import Hightlights from "./componets/Hightlights";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [cityInput, setCityInput] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  console.log(weather);
  // obtener la ubicacion actual del usuario
  useEffect(() => {
    const success = (position) => {
      const obj = {
        latitud: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      setCoords(obj);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  // obtener el clima actual por coordenadas
  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitud
        }&lon=${coords.longitude}&appid=${getApiKey()}`;
      axios
        .get(url)
        .then((res) => {
          setWeather(res.data);
          setIsLoading(false);
          const objTemp = {
            celsius: (res.data.main.temp - 273.15).toFixed(0),
            farenheit: (((res.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(
              1
            ),
          };
          setTemp(objTemp);
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(true)
        });
    }
  }, [coords]);

  // Obtener el clima por nombre de la ciudad

  const getWeatherCity = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${getApiKey()}`;
    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
        const objTemp = {
          celsius: (res.data.main.temp - 273.15).toFixed(0),
          farenheit: (((res.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0),
        };
        setTemp(objTemp);
      })
      .catch((err) => console.log(err));
  };


  const getWeatherDays = () => {
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=${getApiKey()}`;
    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
        const objTemp = {
          celsius: (res.data.main.temp - 273.15).toFixed(0),
          farenheit: (((res.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0),
        };
        setTemp(objTemp);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        weather && (
          <>
            <div className='app_container'>
              <div className='container-input'>
                <Formulario getWeatherCity={getWeatherCity} />
              </div>
              <div className="container_weather">
                <WeatherCard
                  weather={weather}
                  temp={temp}
                />
              </div>
            </div>
            <div>
              <Hightlights weather={weather} />
            </div>
          </>
        )
      )}
    </div>

  );
}

export default App;
