const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

var accessLogStream =  fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined',{stream: accessLogStream}))

app.get('/', function(req,res){
  res.send('Ciao Mondo')
})

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Applicazione in ascolto su http://%s:%s', host,port)
})

