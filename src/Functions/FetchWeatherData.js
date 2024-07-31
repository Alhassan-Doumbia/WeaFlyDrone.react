import UpdateDataHub from "./UpdateDataHub";
async function FetchWeatherData(city){
    const secret =require('dotenv').config({path:'../secret.env'});// on met le chemin vers le fichier.ev s'il n'est pas à la racine 
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.API_KEY,//ive to use .env element to hide the API key 
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();// parse to object format so that i can manipulate with js easily
    
        //    Updating the DataHub 
        let TempData=result.weather.main.temp;
        let HumData=result.weather.main.humidity;
        let WindData=result.weather.main.pressure;
        let ApressureData=result.weather.wind;
        let cityData=city;
        let CountryData=result.weather.sys.country;
        let weatherData=result.weather[0].main;

        UpdateDataHub(["temperature","humidity","windspeed","AtmosphericPres","weather","City","Country"],
            [TempData,HumData,WindData,ApressureData,weatherData,cityData,CountryData]);//mise à jour de la temperature 
       
        console.log("the data are there");
    } catch (error) {
        console.error(`there is an error with your fetch method : ${error}`);
    }
}
export default FetchWeatherData;