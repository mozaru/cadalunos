const express = require('express');    
const cors = require('cors');    
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; //porta padrão


var app = express();

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../frontend'));

console.log(__dirname);

Date.prototype.toJSON = function(){return this.toISOString().replace(/T/, ' ').replace(/\..+/, '')};

app.use(cors());

require('./alunos.js')(app);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
