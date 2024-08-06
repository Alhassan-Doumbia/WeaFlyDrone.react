import React from 'react'
import { Link } from 'react-router-dom';
function Button({API_key,USER_name}) {
  const handleUpdateLocalStorage=(e)=>{
    try {
       if(API_key!=""&&USER_name!=""){

         console.log(" la clé d'API a été entré")
         localStorage.setItem('API_key',API_key);
         localStorage.setItem('USER_Name',USER_name);
       }
      // as the recording in the localstorage overwrite each ther , a verification to see if it's filled or not is not necessary
    } catch (error) {
      console.error(`il ya une erreur du type:${error}`);
    }  
  }
  return (
    <>
     <button type='submit' className='w-full h-[50px] bg-primary font-Poppins font-extrabold text-slate-50 rounded-md cursor-pointer hover:bg-[#404040] duration-200 'onClick={handleUpdateLocalStorage}><Link to={'/weather-app'}><p className='size-full flex items-center justify-center'>Let's Fly</p></Link></button>
      {/* Trouver un moyen de vider au clique , le contnu des input  */}
    </>
  )
}

export default Button