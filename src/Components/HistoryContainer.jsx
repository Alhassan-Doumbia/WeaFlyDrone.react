import React from 'react'
import { useState } from 'react';
function HistoryContainer() {
    // let HistoryArray=[];
    const [History, setHistory] = useState(["bonjour","bonsoir","bonne arrivée"]);
    // Creer une fonction pour trier le tableau et supprimer les rédondances 
  return (
    <>
        <div className="Container flex flex-col gap-2 ">
            <div className="mt-6 title min-w-[250px] w-fit h-fit py-1 border-b-[3px] border-slate-50" >
                <p className=' font-Poppins font-semibold text-xl text-slate-50'>Historique de recherche </p>
            </div>
            <div className="History flex flex-col gap-1 w-full h-[200px]">
                {History.map((item, index) => (<li className=' list-none font-light font-Montserrat '>
                    <p className='text-sm text-slate-50'>{item}</p>
                </li>))}
            </div>

        </div>
    </>
  )
}

export default HistoryContainer