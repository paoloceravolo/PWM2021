let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');
reqHeader.append("accept", "application/json");
reqHeader.append("Access-Control-Allow-Origin", "*");

let initObject = {
    method: 'GET',
    mode: 'cors',
    headers: reqHeader
};

let myRequest = new Request('https://www.dati.lombardia.it/resource/nmru-kdry.json', initObject);

fetch(myRequest)
    .then(function(response){return response.json()})
    .then(function(data){
        document.getElementById('content')
        .innerHTML += data[0].denominazione;
    })
    .catch(function(err){
        console.log("Errore!!!", err)
    });