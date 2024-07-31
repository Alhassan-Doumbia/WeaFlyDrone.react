import React from 'react'

function SearchInputComponent() {
  return (
    <>
      <form>
          <input type='text' className='px-4 w-[85%] h-[64px] font-mono text-sm outline-none placeholder:text-sm placeholder:font-mono text-slate-50 placeholder:text-slate-400  bg-[#262626]' placeholder='type your research here '></input>
          <input type="button" value="send" className='w-[15%] h-[62px] bg-[#11A37F] cursor-pointer font-Poppins font-semibold text-slate-50  '/>
      </form>
    </>
  )
}

export default SearchInputComponent