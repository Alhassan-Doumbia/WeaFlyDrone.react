import React from 'react'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
import ErrorAlertBox from '../errorAlertBox/ErrorAlertBox';
function Button({API_key,USER_name,AI_Key,validation}) {
  const navigate = useNavigate();
  const handleUpdateLocalStorage=(e)=>{
    try {
      const handlingValidation=validation();
       if(API_key!==""&&USER_name!==""&&AI_Key!=="" ){
         if(handlingValidation.length===0){// i'm not confy with this condition lmao
          console.log(" la clé d'API a été entré")
          localStorage.setItem('API_key',API_key);
          localStorage.setItem('USER_Name',USER_name);
          localStorage.setItem('AI_Key',AI_Key);
          console.log('les infos sont entrées ');//debug
          navigate('/weather-app')
        }
      }
      else{
        // navigate('/404-not-found');
        console.log('les informations sont pas entrée ');//debug
        console.log(`le message d'erreur est ${handlingValidation.join(',')}`);//debug
        return(<ErrorAlertBox ></ErrorAlertBox>)
      }
        
      // as the recording in the localstorage overwrite each ther , a verification to see if it's filled or not is not necessary
    } catch (error) {
      console.error(`il ya une erreur du type:${error}`);
    }  
  }
  return (
    <>
     <button type='submit' className='w-full h-[50px] bg-primary font-Poppins font-extrabold text-slate-50 rounded-md cursor-pointer hover:bg-[#404040] duration-200 'onClick={handleUpdateLocalStorage}><p className='size-full flex items-center justify-center'>Let's Fly</p></button>
    </>
  )
}

export default Button