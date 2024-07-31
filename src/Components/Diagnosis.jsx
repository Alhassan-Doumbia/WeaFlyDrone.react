import React from 'react'
import { useState } from 'react'
function Diagnosis({AI_response="Lorem ipsum dolor sit amet "}) {
    const [show, setShow] = useState(false)// pour gerer  le loader 
    const[status,setStatus]=useState({
        status:"???",// we can fly or not 
        color:"#11A37F"// or #EF233C
    })// c'est du vert ; cette vaeur change selon qu'on puisse voler ou on 
  return (
    <>
        <div className='min-w-[500px] w-fit min-h-[100px] h-fit max-h-[200px] px-2 py-2 flex flex-col gap-2 rounded-lg backdrop-blur-sm bg-black opacity-45'>
            <h1 className='text-3xl font-Poppins 'style={{color:status.color}}>{status.status}</h1>
            <p className='text-sm font-Montserrat text-slate-50'>{AI_response} </p>
        </div>
    </> 
  )
}

export default Diagnosis