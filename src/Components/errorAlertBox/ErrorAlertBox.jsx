import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import'./styleErrorAlertBox.css'
function ErrorAlertBox({errorMessage="you such a good boi !!"}) {
  const appearingRef=useRef(null)
  useEffect(() => {
    if (appearingRef.current) {
      appearingRef.current.classList.add('errorBox');
    }
  }, []);
  return (
   <>
    <div ref={appearingRef}   className='min-w-[500px] min-h-[50px] bg-black px-2 py-2 opacity-75 border-2 border-opacity-60 border-red-600 rounded-md flex items-center '>
          <p className='font-Montserrat text-sm  text-red-600'>Error : {errorMessage}</p>
    </div>
   </>
  )
}

export default ErrorAlertBox