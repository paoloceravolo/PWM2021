const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();

app.use(express.static('public'));
app.use('/images', serveIndex('public/images'));

var accessLogStream =  fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined',{stream: accessLogStream}))

app.get('/', function(req,res){
  console.log('Ricevo una richiesta '+req.method)
  res.send('Ciao Mondo '+req.method)
})

app.post('/', function(req,res){
  console.log('Ricevo una richiesta '+req.method)
  res.send('Ciao Mondo '+req.method)
})

app.delete('/del_centro', function(req,res){
  console.log('Ricevo una richiesta '+req.method)
  res.send('Ciao Mondo '+req.method)
})

app.get('/univ*', function(req,res){
  console.log('Ricevo una richiesta '+req.method)
  res.send('Cerchi '+req.path+ ' ?')
})

app.get('/centro/:nome', function(req,res){
  console.log('Ricevo una richiesta '+req.params.nome)
  res.send('Centro '+req.params.nome)
})


var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Applicazione in ascolto su http://%s:%s', host,port)
})

