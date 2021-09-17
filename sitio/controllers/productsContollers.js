const path = require ('path');
module.exports = {
    detail : (req,res) =>{
        return res.render('detailProduct')
    },
    carrito : (req,res) =>{
        return res.render('carrito')
    }
}

