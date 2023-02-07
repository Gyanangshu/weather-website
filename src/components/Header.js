import React, { useContext } from 'react'

// import context 
import { WeatherContext } from '../context/WeatherContext'

const Header = () => {

  const { weather } = useContext(WeatherContext);

  return (

    <div className='text-center'>

      {
        typeof weather.main !== "undefined" ? (

          <div className='text-white flex justify-center flex-col'>
            <p className='font-forText text-4xl'>{weather.name}, {weather.sys.country}</p>

            <p className='font-forText text-8xl mt-8 mb-4'>{weather.main.temp.toFixed()}<span className='text-4xl'>&deg;C</span></p>

            <p className='font-forText text-2xl'>{weather.weather[0].description} </p>
           
          </div>

        ) : (
          ""
        )
      }

    </div>
  )
}

export default Header
