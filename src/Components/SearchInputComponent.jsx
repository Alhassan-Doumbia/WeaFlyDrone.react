import React from "react";
import { useState } from "react";
import FetchWeatherData from "../Functions/ForTests/FetchWeatherData";
function SearchInputComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  // ====== To clean up ======
  // const GatherWeatherData = (e) => {
  //   e.preventDefault();
  //   if (e.keycode == 13) {
  //     // console.log("le bouton entrer est cliqué");
  //     if (searchQuery !== "") {
  //       try {
  //         FetchWeatherData(searchQuery);
  //       } catch (error) {
  //         console.log(
  //           `there is a problem with the searchInput using the FetchWeatherData / error:${error} `
  //         );
  //       }
  //     } else {
  //       try {
  //         FetchWeatherData("Abidjan"); // the actual position of the user 
  //       } catch (error) {
  //         console.log(
  //           `there is a problem with the searchInput using the FetchWeatherData / error:${error} `
  //         );
  //       }
  //     }
  //   }
  // };
  const GatherWeatherData=()=>{
    FetchWeatherData(searchQuery);
  }
  // ====== To clean up ======

  const handleSearchQuery=(e)=>{
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <form>
        <input type="text" className="px-4 w-[85%] h-[64px] font-mono text-sm outline-none placeholder:text-sm placeholder:font-mono text-slate-50 placeholder:text-slate-400  bg-[#262626]" placeholder="type your research here" onChange={handleSearchQuery}></input>
        <input type="button" value="send"  className="w-[15%] h-[62px] bg-[#11A37F] cursor-pointer font-Poppins font-semibold text-slate-50  " onClick={GatherWeatherData} />
      </form>
      {/* C'est ici que la fonction fetch data va fonctionner  */}
    </>
  );
}

export default SearchInputComponent;
