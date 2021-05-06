var http = require('http');

function processa(request,response){
	console.log('Richiesta in arrivo : ' 
		+ request.method + " " + request.url);
	let corpo = "Ciao";
	if(request.url.length>2){
		corpo = 'Sono qui mi hai chamato!\n';
	}
 
	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.end(corpo);
}


var s = http.createServer(processa);
s.listen(8383);