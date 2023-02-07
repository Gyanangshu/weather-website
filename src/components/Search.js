import React, {useContext} from 'react';
import search from "../asset/images/weather-search.png"

// import context 
import { WeatherContext } from '../context/WeatherContext'

const Search = () => {

    const { getWeather, setSearch } = useContext(WeatherContext);

    return (
        <div className='text-center mb-16 pt-5 '>
            <div className='flex justify-center space-x-36'>
                <input type="text"
                    placeholder='Search City'
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-60 h-9 pl-6 outline-none  placeholder-gray-300 bg-transparent bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg rounded-2xl drop-shadow-lg text-white'
                />
                <button className='absolute' onClick={getWeather}><img className='h-[20px] mt-[8px] ml-10' src={search} alt="Search" /></button>
            </div>

        </div>
    )
}

export default Search
