const express = require('express')
const route = express.Router();
const homeController = require('./src/controllers/homecontroller');
const contatoController = require('./src/controllers/contatoController');

//rotas da home
route.get('/',  homeController.paginainicial, function(req, res ){
  

});
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato',contatoController.paginainicial);

module.exports = route;