const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; //porta padrão
const banco = require('./bd.js');

function sucesso(response, valor)
{
    if (typeof valor == 'object')
        return response.json(valor);
    else
        return response.json({"status":200, "message":valor});
}

function falha(response, valor, status)
{
    if (typeof valor == 'object')
        return response.status(status).json(valor);
    else
        return response.status(status).json({"status":status, "message":valor});
}


module.exports = function(app){
	app.get('/oi', function (request, response){
		try{
			sucesso(response, 'Oi com sucesso!');
		}catch(e){
			falha(response, e.message, 401);
		}
	});
	
	app.get('/tchau', function (request, response){
		try{
			sucesso(response, 'vamos partir!');
		}catch(e){
			falha(response, e.message, 401);
		}
	});
	
	app.get('/alunos', function (request, response){
		try{
			var sql = new banco();
			sql.conectar();
			sql.prepara("select * from aluno");
			sql.executar(function(obj){
				try{
					obj = obj.rows;
					sql.desconectar();
					if (sql.temErro())
						throw new Error(sql.getErro())
					sucesso(response, obj);
		}catch(e){
			falha(response, e.message, 401);
		}
	});
		}catch(e){
			falha(response, e.message, 401);
		}
	});
}