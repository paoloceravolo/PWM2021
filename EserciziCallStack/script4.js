window.onload = function test(){
  $("#cont").html("Carico dal server ...");
  ajax();
  draw();
}

function ajax(){
     $.ajax({url: "https://www.dati.lombardia.it/resource/5bbn-8w23.json", success: function(result){
        $("#cont").html(result[1].denominazione_struttura +" -- "+ result[1].comune);
     track();
    }});
}

function track (){throw new Error("Stop computation and show the call stack on console");}

function draw() { 
  $("#cont").css("background-color", "yellow");
  throw new Error("Stop computation and show the call stack on console");
}