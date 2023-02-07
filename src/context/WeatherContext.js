import React, { createContext } from 'react'

// create context 
export const WeatherContext = createContext();


const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = React.useState({})
    const [search, setSearch] = React.useState("")


    const getWeather = () => {
        try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=97b8ac908ec2149d51e215f8902f542d
        `)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result)
               
            })   
        } 
        catch (error) {
            console.log(error.result) 
        }     
    }


    return (

        <WeatherContext.Provider value={{ weather, getWeather, setSearch }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
