
async function FetchWeatherData(city){
    const ApiKey=localStorage.getItem('API_key');
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key':"45539c1454mshe2988be1e97c2cfp173326jsn950d6de2fb8f", //process.env.API_KEY,//ive to use .env element to hide the API key 
            // Remplacer la clé d'API par la variable ApiKey ; 
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();// parse to object format so that i can manipulate with js easily
        console.log("the data are there");
        return result;
        
    } catch (error) {
        console.error(`there is an error with your fetch method : ${error}`);
    }
}
export default FetchWeatherData;