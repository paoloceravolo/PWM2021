const express = require('express');
var app = express();
var port = 3000;

app.get('/', hello, log);

app.get('/atenei/:sede', (req,res)=>{
	let sede = req.params.sede;
	res.send('Ateneo ' + sede);
});

function log(req,res,next){
	console.log(
		new Date(), req.method, req.url
	);
	next();
}

function hello(req,res,next){
	res.write('Sono qui mi hai chiamato!');
	res.end()
	next();
}

app.listen(port,function(err){
	if(err){console.log("Errore!!!")}
	else{console.log("Sono qui mi hai chiamato!? Ancora")}
});