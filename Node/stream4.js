const gzip = require('zlib').createGzip();
const fs = require('fs');

const input = fs.createReadStream('file.txt');
const out = fs.createWriteStream('file.txt.gz');

input.pipe(gzip).pipe(out).on('error', (e) => console.log(e)).on('finish', ()=> console.log('FINE'));