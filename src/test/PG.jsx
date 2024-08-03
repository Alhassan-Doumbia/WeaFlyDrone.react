import React from 'react'
import HistoryContainer from '../Components/HistoryContainer'
import DataContainer from '../Components/DataContainer'
import Diagnosis from '../Components/Diagnosis'
import WeatherSummary from '../Components/WeatherSummary'
import SearchInputComponent from '../Components/SearchInputComponent'
function PG() {
  return (
   <div className='px-[10px] flex flex-col gap-4 items-center justify-center bg-slate-600 '>
      <HistoryContainer>
      </HistoryContainer>
      <DataContainer></DataContainer>
      <SearchInputComponent></SearchInputComponent>
   </div>
  )
}

// I will test things here 
export default PG