const { Router } = require('express');
const ProdutosController = require('./controllers/ProdutosController')
const ShippingController = require('./controllers/ShippingController')


const routes = Router();

routes.get('/products', ProdutosController.index);
routes.get('/shipping', ShippingController.index);

module.exports = routes