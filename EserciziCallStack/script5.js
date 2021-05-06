window.onload = function test(){
  $("#cont").html("Carico dal server ...");
  fetch('https://www.dati.lombardia.it/resource/5bbn-8w23.json',{method: 'GET', cache: "force-cache"})
  .then(response => response.json())
  .then(data => load(data))
  .catch(err => console.log("I captured: ", err))
  draw();
}

function load(data){
     $("#cont").html(data[1].denominazione_struttura +" -- "+ data[1].comune);
     track();
}

function track (){throw new Error("Stop computation and show the call stack on console");}

function draw() { 
  $("#cont").css("background-color", "yellow");
  throw new Error("Stop computation and show the call stack on console");
}