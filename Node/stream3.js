const {pipeline} = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
	fs.createReadStream('file.txt'),
	zlib.createGzip(),
	fs.createWriteStream('file.txt.gz'),
	(err) => {
		if(err){console.error('ERRORE', err)}
		else{console.log('SUCCESSO')}
	}
	);