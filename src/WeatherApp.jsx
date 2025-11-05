import { useState } from 'react'
import './WeatherApp.css'

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'API_KEY'
    const difKelvin = 273.15 // Para convertir de Kelvin a Celsius

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (event) => {
        setCiudad(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (ciudad.length > 0) {
            fetchClima()
        }
    }

    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}&lang=es`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error('Ocurrió un error: ', error)
        }
    }

  return (
    <div className="container">
      <h1>Aplicación de Clima</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ingresa una ciudad" 
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <button type="submit">Buscar</button>
      </form>
      {
        dataClima && (
          <div>
            <h2>{dataClima.name} , {dataClima.sys.country}</h2>
            <p>Temperatura Actual: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
            <p>Condición meteorológica: {dataClima.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt={dataClima.weather[0].description} />
          </div>
        )
      }
    </div>
  );
};
