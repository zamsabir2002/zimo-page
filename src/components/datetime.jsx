'use client';

import React, { useEffect, useState } from 'react';


const API_END_POINT = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "e362fb0d6bf9d40d93000a1f683013c2";

// const API_END_POINT = "http://api.geonames.org/findNearbyJSON?";
// const API_key = "sabir_zame2002";


const DateTime = () => {

    const [position, setPosition] = useState({})
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')

    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const successCallBack = (position) => {
        console.log("suc", position)
        setPosition(position)
    }
    const errorCallBack = (error) => {
        console.log(error)
        setPosition(error)
    }

    const fetchData = async () => {

    }

    const getData = async () => {
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        console.log("po", position)
        const res = await fetch(`${API_END_POINT}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_key}`)
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                setCity(data.name)
                setCountry(data.sys.country)

                const date = new Date();
                const utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
                console.log("utcDate1", utcDate)
                // const timezoneOffset = data.timezone;
                // const cityDate = new Date(utcDate + (timezoneOffset * 60 * 60 * 1000));
                const cityDate = new Date(utcDate);
                const cityTime = cityDate.toLocaleTimeString('en-US', { hour12: false });

                console.log("cityDate", cityDate)
                console.log("Date", cityDate.toString())
                console.log("cityTime", cityTime)



                setDate(cityDate)
                setTime(cityTime)
            })
    }

    useEffect(() => {
        const nav = navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)


    }, [])

    useEffect(() => {
        getData()
    }, [position])

    console.log("ss", new Date().toLocaleString())
    return (
        <div className='flex gap-3 items-center text-sm tracking-widest'>
            <div className='flex flex-col'>

                <div>
                    {time.substring(0, 5)} {city}, {country}
                </div>

                <div>
                    {date &&
                        <div>
                            {weeks[date.getDay()]}, {date.getDate} {month[date.getMonth()]} {date.getFullYear()}
                        </div>
                    }
                </div>
            </div>

            <div><img src={`https://flagsapi.com/${country}/flat/32.png`} /></div>
        </div>
    );
}

export default DateTime;