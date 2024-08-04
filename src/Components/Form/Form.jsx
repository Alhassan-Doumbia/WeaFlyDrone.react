import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button';
function Form() {
    const [userName,setUserName]=useState("");
    const [key,setKey]=useState("");

    // record the UserName in the state ;
    const  handleUserNameInputs=(e)=>{
        e.preventDefault();
        setUserName(e.target.value);
    }
    // record the API key in the state 
    const handleKeyInputs=(e)=>{
        e.preventDefault();
       setKey(e.target.value);
    }
    // Will use useEffect once to clear the localStorage if one of the key in the local storage is already filled 
    // 
  return (
    <div className='min-w-[500px] w-fit min-h-[470px] h-fit  flex flex-col gap-2 justify-between px-[30px] py-[50px]'>
        <div>
            <h1 className=' font-Poppins font-semibold text-xl'>Welcome to WeaFlyDrone</h1>
            <p className='font-Montserrat Font-normal text-sm'>Log in to the platfeform</p>
        </div>
        <form>
            <label htmlFor="username" className=' font-Poppins font-medium text-[12px]'>Username</label>
            <input type="text" name="username" id="username" onChange={handleUserNameInputs} value={userName} className='w-full h-[40px] mt-1 border-[1px] border-borderColor rounded-md outline-none px-3 text-sm'/>

            <label htmlFor="keys" className=' font-Poppins font-medium text-[12px]'>OpenWeather API key</label>
            <input type="text" name="username" id="keys"onChange={handleKeyInputs} className='w-full h-[40px] mt-1 border-[1px] border-borderColor rounded-md outline-none px-3 text-sm'/>

            <p className='font-Montserrat text-[12px] text-linkColor '>Those datas are completely stored in your localStorage*</p>
        </form> 
        <div className='w-full h-fit flex flex-col gap-4 items-center justify-between'>
                {/* On va integrer le bouton ici , le bouton contiendra une fonction qui va integrer les donnnées au localstorage  */}
            <Button API_key={key} USER_name={userName}></Button>
            <p className='font-Montserrat font-normal text-[12px] text-primary '>No API key ? <a href="https://rapidapi.com/worldapi/api/open-weather13" className='text-linkColor underline'>Go there ! </a></p>
        </div>

    
    </div>
)
}

export default Form