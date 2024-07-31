import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import SearchInputComponent from '../Components/SearchInputComponent'
import DataContainer from '../Components/DataContainer'
import HistoryContainer from '../Components/HistoryContainer'
import Diagnosis from '../Components/Diagnosis'
import WeatherSummary from '../Components/WeatherSummary'
function MainInterfaceView() {
  return (
    <>
        <main className='size-full border-3 border-green-500 flex'>
          <div className="Maincontainer w-[70%] h-svh  bg-[#161616] flex flex-col justify-between py-[20px] px-[20px]">
            <NavbarComponent />
            <WeatherSummary/>
            <Diagnosis/>
          </div>
          <div className='DataContainer w-[30%] bg-[#343333] opacity-65 gap-8'>
            <SearchInputComponent />
            {/* On va mettre ici la zone de recherche , les historique et la partie qui contient les données  */}
            <div className='w-full h-fit px-[20px]'>
                  <HistoryContainer></HistoryContainer>
                  <DataContainer></DataContainer>
            </div>
         
          </div>
        </main>
        
        
    </>
  )
}

export default MainInterfaceView