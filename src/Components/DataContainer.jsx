import React from 'react'
import { useState } from 'react'
function DataContainer() {
    // Le bouton qui permet de lancer la recherche sera lié à un fichier JSON dont les données changeront tout le temps 
    // les données de ce fichier JSON seront donc chargé par ce composant et seront donc affichés instantanément 
    // vu que je ne sais pas commnt faire transiter les infos pour l'instant 
  const [weatherData,setWeatherData]=useState({
    temperature:"???",
    humidity:"???",
    windSpeed:"???",
    precipitaion:"???",
    AtmosphericPres:"???",
    weather:"???",
  });
const UpdateWeatherData=()=>{
  //ici on va charger les données du fichier JSON
  // on va d'abord importer le module fs 
  const fs=require('fs');
  fs.readFile('../utils/jsons/DataHub.json','utf8',(err,data)=>{
    if(err){
      console.error(`error while reading the daata hub file : ${err}`)
      return;
    }
    const dataObj=JSON.parse(data);// convertir les données contenues dans le fichier en bjet javacript manipulable ;
    console.log(`les données du fichiers JSON : ${dataObj}`);// debug
  })
  UpdateWeatherData();

}
  return (
    <>
         <div className="Container flex flex-col gap-2 ">
            <div className="title min-w-[250px] w-fit h-fit py-1 border-b-[3px] border-slate-50" >
                <p className=' font-Poppins font-semibold text-xl text-slate-50'>Détail de la météo</p>
            </div>
            <div className="History flex flex-col  w-full h-[200px]">
                <ul className='flex flex-col gap-3 mt-6'>
                    <li className=' list-none font-light font-Montserrat '><div className='flex justify-between'><p className='text-sm text-slate-50'>Temperature:</p><p className='text-sm text-slate-50'>{weatherData.temperature}</p></div></li>
                    <li className=' list-none font-light font-Montserrat '><div className='flex justify-between'><p className='text-sm text-slate-50'>WindSpeed:</p><p className='text-sm text-slate-50'>{weatherData.windSpeed}</p></div></li>
                    <li className=' list-none font-light font-Montserrat '><div className='flex justify-between'><p className='text-sm text-slate-50'>Humidity:</p><p className='text-sm text-slate-50'>{weatherData.humidity}</p></div></li>
                    <li className=' list-none font-light font-Montserrat '><div className='flex justify-between'><p 
                    className='text-sm text-slate-50'>Atmospheric-Pressure:</p><p className='text-sm text-slate-50'>{weatherData.AtmosphericPres}</p></div></li>
                    <li className=' list-none font-light font-Montserrat '><div className='flex justify-between'><p className='text-sm text-slate-50'>Weather:</p><p className='text-sm text-slate-50'>{weatherData.weather}</p></div></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default DataContainer