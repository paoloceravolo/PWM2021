const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');

  var urlencodedParser =  bodyParser.urlencoded({ extended: false })

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

app.get('/send_get', function(req,res){
  data = {
    nome_centro: req.query.nome_centro,
    luogo_centro: req.query.luogo_centro
  }
  console.log(data)
  res.send(JSON.stringify(data));
})

app.post('/send_post', urlencodedParser, function(req,res){
  data = {
    nome_centro: req.body.nome_centro,
    luogo_centro: req.body.luogo_centro
  }
  console.log(data)
  res.send(JSON.stringify(data));
})


var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Applicazione in ascolto su http://%s:%s', host,port)
})

