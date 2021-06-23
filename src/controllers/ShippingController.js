const { calcularPrecoPrazo } = require('correios-brasil');

module.exports = {
    async index(req, res) {  
        console.log(req.query.cep)   
        let args = {
            sCepOrigem: '41192065',
            sCepDestino: req.query.cep,
            nVlPeso: '1',
            nCdFormato: '1',
            nVlComprimento: '20',
            nVlAltura: '20',
            nVlLargura: '20',
            nCdServico: ['04014'], 
            nVlDiametro: '0',
          };
          
        calcularPrecoPrazo(args)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(error));
        
    }
}