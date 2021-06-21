const { Router } = require('express');
const ProdutosController = require('./controllers/ProdutosController')


const routes = Router();

routes.get('/products', ProdutosController.index);

module.exports = routes