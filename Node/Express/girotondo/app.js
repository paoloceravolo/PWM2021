const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');


  var urlencodedParser =  bodyParser.urlencoded({ extended: false })

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "PWM2021",
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false, maxAge: 3600000} 
  }));

app.use(express.static('public'));
app.use('/images', serveIndex('public/images'));

var accessLogStream =  fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined',{stream: accessLogStream}))

const axios = require('axios');

  axios.all([
  axios.get('https://www.dati.lombardia.it/resource/xv6v-yepr.json'),
  axios.get('https://www.dati.lombardia.it/resource/xv6v-yepr.json')
  ]).then(axios.spread((response1, response2) => {
  console.log(response1.headers.date);
  console.log(response2.data[0].link.url);
  })).catch(error => {
  console.log(error);
  });


app.get('/', function(req,res){
  console.log('Ricevo una richiesta '+req.method)
  //res.send('Ciao Mondo '+req.method)
  res.render('index', {title: 'ciao', method: req.method, query: req.query})
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

app.get('/cookies', function(req,res){
  if(req.session.page_views){
    console.log("Utente ha vistato la pagina " + req.session.page_views + " volte");
    req.session.page_views++;
    }else{
    req.session.page_views = 1;
    console.log("Prima volta che utente visita la pagina");
    //console.log(JSON.stringify(req.session))
    }
    res.send("Ciao cookies "+JSON.stringify(req.session));
});

app.post('/login', urlencodedParser, function(req, res) {
    const pass = 'admin';
    const hash1 = crypto.createHash('md5').update(pass).digest('hex');
    const hash2 = crypto.createHash('md5').update(req.body.pass).digest('hex');

    if(req.session.user_id){console.log("Utente " + req.session.user_id + " autenticato");}
    if(hash1 === hash2){
    console.log("Utente " + req.body.user_id + " autenticato");
    req.session.user_id = req.body.user_id;
    }else{
    console.log("Utente non autenticato");
    delete req.session.user_id
    }
    res.send("Ciao cookies "+JSON.stringify(req.session));
  }); 


var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Applicazione in ascolto su http://%s:%s', host,port)
})

