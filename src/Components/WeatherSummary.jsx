import React from 'react'

function WeatherSummary() {
  return (
    <>
        <div className="weather-summary w-full h-fit flex flex-col gap-1 ">
            <p className='text-md font-Montserrat font-normal text-slate-50'>???</p>
            <p className='text-3xl font-Montserrat font-bold text-slate-50'>Abidjan,Côte d'ivoire</p>
            <p className='text-3xl font-Montserrat font-bold text-slate-50'>25°C</p>
        </div>
    </>
  )
}
// Sera lié au dataHub

export default WeatherSummary