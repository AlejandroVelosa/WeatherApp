import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getApiKey from "./utils/getApiKey";
import WeatherCard from "./componets/WeatherCard";
import Loading from "./componets/Loading";

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
  // Manejar el cambio en el campo de entrada de la ciudad
  const handleCityImput = (e) => {
    setCityInput(e.target.value);
  };

  // Manejar el envío del formulario de búsqueda de ciudad
  const handleCitySeacrh = (e) => {
    e.preventDefault();
    if (cityInput) {
      getWeatherCity(cityInput);
      setCityInput("");
    }
  };


  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        weather && (
          <div className='app_container'>
            <div className='container-input'>
              <form onSubmit={handleCitySeacrh}>
                <input
                  onChange={handleCityImput}
                  className='input'
                  type="text"
                  placeholder='Search your City..'
                  value={cityInput}
                />
              </form>
            </div>
            <div className="container_weather">
              <WeatherCard
                weather={weather}
                temp={temp}
              />
            </div>
          </div>
        )
      )}
    </div>

  );
}

export default App;
