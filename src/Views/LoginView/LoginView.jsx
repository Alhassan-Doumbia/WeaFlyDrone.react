import React from 'react'
import './Login.css'
import Form from '../../Components/Form/Form'
function LoginView() {
  return (
    <>
      <section id="mainContainer" className='w-screen h-svh border-2 border-blue-600 flex justify-between'>
          <div id='leftContainer' className='w-[50%] h-full border-2 border-green-300 bg-black px-[30px] py-[45px]' >
              <div className='flex flex-col gap-6'>
                <h1 className='text-3xl text-white font-bold font-Montserrat'>WeaFlyDrone</h1>
                <p className='text-[16px] font-Montserrat text-slate-50'>WeaFlyDrone is a cutting-edge web application designed to provide drone pilots with real-time weather insights. By displaying detailed meteorological data and expert interpretations, it ensures that pilots can make informed decisions about optimal flying conditions.</p>
              </div>
          </div>
          <div id="rightContainer" className='w-[50%] h-full border-2 border-purple-300 flex items-center justify-center'>
                <Form></Form>
          </div>
      </section>
    </>
  )
}

export default LoginView