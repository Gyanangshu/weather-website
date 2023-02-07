import React, { useContext } from 'react'

// import context 
import { WeatherContext } from '../context/WeatherContext'

const Details = () => {

    const { weather } = useContext(WeatherContext);

    return (
        <div>

            {
                typeof weather.main !== "undefined" ? (

                    <div className='lg:pl-[25%] lg:pr-[25%] mt-8 font-forText pl-[15%] pr-[15%]'>

                        <div className='flex justify-between mb-12 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg xl:pr-15 lg:p-2 lg:pr-[10%] lg:pl-[10%] pr-[10%] pl-[10%] shadow-xl hover:bg-opacity-30 hover:-translate-y-1 hover:transition-all'>
                            {/* temp */}
                                                        
                            <p className='text-center text-white lg:p-5 p-2 xl:pt-8 xl:text-2xl text-xl'> {weather.main.feels_like.toFixed()}&deg;C <br /><span className='text-gray-600 lg:text-base text-sm mt-2'>Feels Like</span></p>

                            <p className='text-center text-white lg:p-5 p-2 xl:pt-8 xl:text-2xl text-xl'> {weather.main.temp_max.toFixed()}&deg;C <br /><span className='text-gray-600 lg:text-base text-sm mt-2'>Max</span></p>

                            <p className='text-center text-white lg:p-5 p-2 xl:pt-8 xl:text-2xl text-xl'>{weather.main.temp_min.toFixed()}&deg;C <br /><span className='text-gray-600 lg:text-base text-sm'>Min</span></p>

                        </div>


                        <div className='flex justify-between mb-12 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg xl:pr-15 lg:p-2 lg:pr-[10%] lg:pl-[10%] pr-[10%] pl-[10%] shadow-xl hover:bg-opacity-30 hover:-translate-y-1 hover:transition-all'>
                            {/* pressure, humidity & feels like  */}

                            <p className='text-center text-white lg:p-5 p-2 xl:text-2xl text-l'>{weather.wind.speed} m/s <br /><span className='text-gray-600 lg:text-base text-sm'>Wind Speed</span></p>

                            <p className='text-center text-white lg:p-5 p-2 xl:text-2xl text-l'>{weather.main.humidity}%<br /> <span className='text-gray-600 lg:text-base text-sm'>Humidity</span></p>

                            <p className='text-center text-white lg:p-5 p-2 xl:text-2xl text-l'>{weather.main.pressure} hpa<br /> <span className='text-gray-600 lg:text-base text-sm'>Pressure</span></p>

                        </div>


                    </div>

                ) : (
                    ""
                )
            }


        </div>


    )
}

export default Details


