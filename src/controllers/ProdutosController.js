const Produtos = require('../utils/Produtos.json')

module.exports = {
    async index(req, res) {        
        res.json(Produtos)
    }
}