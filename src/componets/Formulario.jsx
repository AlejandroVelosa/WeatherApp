import { useState } from 'react'
import './styles/Formulario.css'

const Formulario = ({ getWeatherCity }) => {
    const [cityInput, setCityInput] = useState("");


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
        <div className='formulario'>
            <form className='formulario-total' onSubmit={handleCitySeacrh}>
                <input
                    onChange={handleCityImput}
                    className='input'
                    type="text"
                    placeholder='Search your City..'
                    value={cityInput}
                />
                <button className='fomulario-button'>
                    <i className=" busquedad bx bx-target-lock"></i>
                </button>
            </form>
        </div>
    )
}

export default Formulario