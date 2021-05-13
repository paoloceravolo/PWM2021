const http = require("http");
const fs = require('fs');

var s = http.createServer();
s.listen(8383);

s.on('request', function(req, res){
	const hrstart = process.hrtime();
	const src = fs.createReadStream('./bigfile.txt');
	src.pipe(res).on('end', ()=> res.end());
	//res.write(src);
	//res.end();
	//src.on('data', (chunk)=>res.write(chunk));

	console.log('Connessione attiva\n');
	const hrend = process.hrtime(hrstart);
	console.info("Execution time: " + hrend);
});

s.on('error', (err)=>{
	console.error(err);
})