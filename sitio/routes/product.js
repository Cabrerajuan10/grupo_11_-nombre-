var express = require('express');
var router = express.Router();

const {detail,carrito} = require('../controllers/productsContollers')

/* GET home page. */
router.get('/detailProduct',detail);
router.get('/carrito',carrito);

module.exports = router;