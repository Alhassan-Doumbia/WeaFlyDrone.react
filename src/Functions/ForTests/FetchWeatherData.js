// import UpdateDataHub from "./UpdateDataHub";
async function FetchWeatherData(city){
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': "45539c1454mshe2988be1e97c2cfp173326jsn950d6de2fb8f",//ive to use .env element to hide the API key 
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        // const data=await response.text();
        const result = await response.json();// parse to object format so that i can manipulate with js easily
        let weather=result.weather[0].main;
        console.log(result);
        console.log(`la météo est ${weather}`);
        console.log("the data are there");
    } catch (error) {
        console.error(`there is an error with your fetch method : ${error}`);
    }
}
export default FetchWeatherData;

// fonctionne , je dois me fier au Dataxample.json pour pouvoir mieux afficher les données ; 
//Mettre à jour le fihcier principalet les interractions avec la searchBar etc 