import React from 'react'
import './styles/Hightlights.css'

const Hightlights = ({ weather }) => {
    return (
        <section className="weather_hightlights">
            <h2 className="hightlights_title"> Today's Hightlights</h2>

            <div className="weather_container">

                <div className="card">
                    <p className="card_title">Wind status</p>
                    <p className="card_date">{weather.wind.speed} <span className="card_text">mph</span></p>

                    <div className="icon_hightlights">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <g clip-path="url(#clip0_1_329)">
                                <path d="M6.02379 12.0507L7.12476 3.90019C7.18595 3.44903 7.77026 3.2999 8.03683 3.67067L9.78531 6.06342C9.87169 6.17777 9.99917 6.25137 10.1414 6.269L13.0878 6.58686C13.5397 6.63672 13.7052 7.21292 13.3451 7.4915L6.83705 12.5202C6.48133 12.8013 5.9626 12.5018 6.02379 12.0507Z" fill="#E7E7EB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_329">
                                    <rect width="12.1825" height="12.1825" fill="white" transform="translate(10.6266 17.2048) rotate(-150)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h4 className="medition">WSW</h4>
                    </div>
                </div>



                <div className="card cart-abajo">
                    <p className="card_title">Air Pressure</p>
                    <p className="card_date">{weather.main.pressure} <span className="card_text">mb</span></p>
                </div>

                <div className="card">
                    <p className="card_title">Humidity</p>
                    <p className="card_date">{weather.main.humidity} <span className="card_text">%</span>
                    </p>

                    <div className="progress_bar">
                        <div className="progress_bar_fill" style={{ width: `${weather.main.humidity}%` }}></div>
                        <div className="progress_bar_marker marker_start">0%</div>
                        <div className="progress_bar_marker marker_end">100%</div>
                    </div>
                </div>


            </div>

            <footer className='footer'>
                <div className='footer-title'>
                    <h1>create by Alejandro Velosa</h1>
                </div>
                <div className='footer-mio'>
                    <a href="https://github.com/AlejandroVelosa/WeatherApp" target='_blank'><i className='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/jairo-alejandro-velosa-bola%C3%B1os-879986270/" target='_blank'><i className='bx bxl-linkedin'></i></a>
                </div>
            </footer>
        </section>
    )
}

export default Hightlights