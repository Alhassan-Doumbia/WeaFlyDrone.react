
function UpdateDataHub(KeyArray,ValueArray){
    // en fonction des clés dans cléArray et leur position , on trouvera leurs correspondant et 
    //on mettra à jour le fichier 
    const fs=require('fs');
    //permet de lir le fichier JSON
    fs.readFile('../DataHub.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
    let dataHubObjected=data;
    KeyArray.map((keys,index)=>{
        dataHubObjected[keys]=ValueArray[index] // mise à jour du JSON par clé 
    })
    let dataHubJsoned=JSON.stringify(dataHubObjected,null);// retransformer en objet JSON
    fs.writeFile('../DataHub.json', dataHubJsoned, (err) => {
        if(err){
            console.error('Error writing data in the dataHub.json file , error type :', err);
            return;
        }
        console.log("the dataHub is updated ! ");
    })})}

    export default UpdateDataHub;