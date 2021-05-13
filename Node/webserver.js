const fs = require('fs');
const http = require('http');

var error = null;
var output = null;

function lista_img(path, callback){
	console.log(path);
	fs.readdir(path, (err, files)=>{
		if(err){callback(err); return}

		var flist = [];
		function iterator(i){
			if(i==files.length){
				callback(null, flist);
				return;
			}
			fs.stat(path+"/"+files[i], (err, stats)=>{
				//console.log(path+files[i]);
				//console.log(stats);
				if(err){callback(err); return}
				if(stats.isFile()){flist.push(files[i])}
				iterator(i+1)
			});
		}
		iterator(1);
	});
}


server = http.createServer();

server.on('request', (req, res)=>{
  	console.log("Incoming request: "+req.method+
	" "+req.url);
  	let appRoot = process.cwd();
  	let path = appRoot + req.url;

  	lista_img(path, (err, listed) => {
  		console.log("leggo dir");
  		error = {'error': err};
  		output = {'error': null,
  		'data': listed};
  	
  	if(err){
  			res.writeHead(400, {'Content-Type': 'application/json'});
  			res.end(JSON.stringify(error) + '\n');
  		}
  		res.writeHead(200, {'Content-Type': 'application/json'});
  		res.end(JSON.stringify(output) + '\n');

  	});

  	console.log("altre cose");

});

server.on('error', function (err) {
    console.log(err);
});

server.listen(3000);