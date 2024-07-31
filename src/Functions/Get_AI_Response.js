function Get_AI_Response(temp,hum,weather,windspeed,visibility){
    let needed_content = `You are a weather AI designed for drone enthusiasts. 
    just tell if it's good or not to fly a drone according to the data we gave to you and why
     (still according to the data). You provide recommendations on whether it\'s safe to fly based on data
     , offering clear explanations for your decisions. what do you think of those  conditions 
      ${humi}%,${temp}°C,${windInt}m/s,${visib}m,${weatheForecast},${pressure}hPa ?,
      try to write your diagnostic in 4line max `;
    return new Promise((resolve, reject) => {
      const url = "https://open-ai21.p.rapidapi.com/chatgpt";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "45539c1454mshe2988be1e97c2cfp173326jsn950d6de2fb8f" /**Eviter d'utiliser l'API sauf en demo */,
          "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: needed_content,
            },
          ],
          web_access: false,
        }),
      };
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Réponse d'API non réussie : ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => {
          console.log(
            `il ya une erreur au niveau de la fonction de GPT  : ${error}`
          );
          reject(error);
        });
    });
}
