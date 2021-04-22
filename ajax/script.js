window.onload = function(){
    var rq = new XMLHttpRequest();
    rq.onreadystatechange = function(){
        if(rq.readyState==4){
            if(rq.status==0){
                function load(){
                    document.getElementById('content').innerHTML = "Ricevo dal server";
                    document.getElementById('content').innerHTML += rq.responseText;
                } 
                setTimeout(load, 3000);
            }
        }
    };
    rq.open("GET", "data.txt", true);
    rq.send();
}