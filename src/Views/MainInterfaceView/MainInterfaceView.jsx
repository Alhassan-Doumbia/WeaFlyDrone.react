import React from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import Diagnosis from "../../Components/Diagnosis";
import WeatherSummary from "../../Components/WeatherSummary";
import FetchWeatherData from "../../Functions/FetchWeatherData";
import './MainInterfaceStyle.css'
import { useState } from "react";
import { useRef } from "react";
function MainInterfaceView() {
  const [weatherData, setWeatherData] = useState({
    temperature: "???",
    humidity: "???",
    windSpeed: "???",
    AtmosphericPres: "???",
    weather: "???",
    city: "???",
    country: "???",
    AI_Text: "???",
  });

  // state pour la requête de recherche
  const [searchQuery, setSearchQuery] = useState("");

  // state pour l'historique
  const [History, setHistory] = useState([]); // on mettra dans le tableau , les noms contenu dans l'historique via useRef
  let noDublonsHistory = Array.from(new Set(History));

  // Gestion de la mise à jour de la requête de recherche
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  // Référence pour l'input
  const inputRef = useRef(null);

  // Fonction pour mettre à jour les données météo
  const UpdateWeatherData = async () => {
    let datas = await FetchWeatherData(searchQuery);
    console.log(datas);

    // Convertir les valeurs en unités métriques
    const temperatureInCelsius = datas.main.temp - 273.15;
    const windSpeedInMs = datas.wind.speed;
    const atmosphericPressureInHpa = datas.main.pressure; // Already in hPa

    setWeatherData({
      temperature: temperatureInCelsius.toFixed(2),
      humidity: datas.main.humidity + " %",
      windSpeed: windSpeedInMs.toFixed(2) + " m/s",
      AtmosphericPres: atmosphericPressureInHpa.toFixed(2) + " hPa",
      weather: datas.weather[0].main,
      city: datas.name,
      country: datas.sys.country,
    });
    // Ajouter la requête de recherche à l'historique
    setHistory([...History, searchQuery]);

    // Réinitialiser l'input
    inputRef.current.value = "";
    setSearchQuery("");
  };

  return (
    <>
      <main className="size-full border-3 border-green-500 flex">
        <div className="Maincontainer w-[70%] h-svh  bg-[#161616] flex flex-col justify-between py-[20px] px-[20px]">
          <NavbarComponent />
          <WeatherSummary
            city={weatherData.city}
            country={weatherData.country}
            weather={weatherData.weather}
            temperature={weatherData.temperature}
          />
          <Diagnosis />
        </div>
        <div className="DataContainer w-[30%] bg-[#343333] opacity-1 gap-8">
          <form>
            <input
              ref={inputRef}
              type="text"
              className="px-4 w-[85%] h-[64px] font-mono text-sm outline-none placeholder:text-sm placeholder:font-mono text-slate-50 placeholder:text-slate-400  bg-[#262626]"
              placeholder="type your research here"
              onChange={handleSearchQuery}
            ></input>
            <input
              type="button"
              value="send"
              className="w-[15%] h-[62px] bg-[#11A37F] hover:bg-green-800 duration-200 cursor-pointer font-Poppins font-semibold text-slate-50  "
              onClick={() => {
                UpdateWeatherData();
                setSearchQuery("");
              }}
            />
          </form>

          <div className="w-full h-fit px-[20px]">
            <div className="Container flex flex-col gap-2 ">
              <div className="mt-6 title min-w-[250px] w-fit h-fit py-1 border-b-[3px] border-slate-50">
                <p className=" font-Poppins font-semibold text-xl text-slate-50">
                  Historique de recherche{" "}
                </p>
              </div>
              <div
                className="History flex flex-col gap-1 w-full py-2 pt-8"
                id="historyDisplay"
              >
                {noDublonsHistory.map((item, index) => (
                  <li
                    key={index}
                    className=" list-none font-light font-Montserrat w-full h-30 py-4 cursor-pointer hover:bg-slate-900 hover:bg-opacity-60 duration-150 ease-linear "
                  >
                    <p className="text-sm text-slate-50 w-full h-full px-4 hover:opacity-100 duration-150 ease-linear ">
                      {item}
                    </p>
                  </li>
                ))}
              </div>
            </div>
            <div className="Container flex flex-col gap-2 ">
              <div className="title min-w-[250px] w-fit h-fit py-1 border-b-[3px] border-slate-50">
                <p className=" font-Poppins font-semibold text-xl text-slate-50">
                  Détail de la météo
                </p>
              </div>
              <div className="History flex flex-col  w-full h-[200px]">
                <ul className="flex flex-col gap-3 mt-6">
                  <li className=" list-none font-light font-Montserrat ">
                    <div className="flex justify-between">
                      <p className="text-sm text-slate-50">Temperature:</p>
                      <p className="text-sm text-slate-50">
                        {weatherData.temperature}
                      </p>
                    </div>
                  </li>
                  <li className=" list-none font-light font-Montserrat ">
                    <div className="flex justify-between">
                      <p className="text-sm text-slate-50">WindSpeed:</p>
                      <p className="text-sm text-slate-50">
                        {weatherData.windSpeed}
                      </p>
                    </div>
                  </li>
                  <li className=" list-none font-light font-Montserrat ">
                    <div className="flex justify-between">
                      <p className="text-sm text-slate-50">Humidity:</p>
                      <p className="text-sm text-slate-50">
                        {weatherData.humidity}
                      </p>
                    </div>
                  </li>
                  <li className=" list-none font-light font-Montserrat ">
                    <div className="flex justify-between">
                      <p className="text-sm text-slate-50">
                        Atmospheric-Pressure:
                      </p>
                      <p className="text-sm text-slate-50">
                        {weatherData.AtmosphericPres}
                      </p>
                    </div>
                  </li>
                  <li className=" list-none font-light font-Montserrat ">
                    <div className="flex justify-between">
                      <p className="text-sm text-slate-50">Weather:</p>
                      <p className="text-sm text-slate-50">
                        {weatherData.weather}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainInterfaceView;
