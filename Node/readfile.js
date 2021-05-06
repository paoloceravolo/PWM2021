var fs = require('fs');

var arg = process.argv;

fs.readFile(arg[2], 'utf8', function(err, data){
	if (err) throw err;
	console.log(data.length);
	});