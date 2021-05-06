const http = require("http");
const fs = require('fs');

var s = http.createServer();
s.listen(8383);

s.on('request', function(req, res){
	const hrstart = process.hrtime();
	fs.readFile('./bigfile.txt', function(err, data){
		if(err) throw err;
		res.end(data);
	});

	console.log('Connessione attiva\n');
	const hrend = process.hrtime(hrstart);
	console.info("Execution time: " + hrend);
});
