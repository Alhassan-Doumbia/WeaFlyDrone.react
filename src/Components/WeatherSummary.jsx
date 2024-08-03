import React from 'react'

function WeatherSummary({city="Abidjan",country="côte d'ivoire",weather="???",temperature="???"}) {
  return (
    <>
        <div className="weather-summary w-full h-fit flex flex-col gap-1 ">
            <p className='text-md font-Montserrat font-normal text-slate-50'>{weather}</p>
            <p className='text-3xl font-Montserrat font-bold text-slate-50'>{city},{country}</p>
            <p className='text-3xl font-Montserrat font-bold text-slate-50'>{temperature}°C</p>
        </div>
    </>
  )
}
// Sera lié au dataHub

export default WeatherSummary