function load(data){
    data.forEach(function(val,ind){
        document.getElementById('content')
    .innerHTML += data[ind].denominazione + '<br>';
    });
}

function success(){
    let data = JSON.parse(this.response);
    //let data = this.response;
    console.log('Ricevo: ', this.status);
    console.log('Da: ', this.responseURL);
    console.log(data);
    load(data);
};

function error(err){
    console.log('An Error: ', err);
};

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
//xhr.open('GET', 'https://homes.di.unimi.it/ceravolo/');
xhr.open('GET', 'https://www.dati.lombardia.it/resource/nmru-kdry.json');
xhr.send();