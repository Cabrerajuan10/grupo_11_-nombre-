const express = require('express');
const router = express.Router();

const {detail, carrito, add, store, edit, update, search, filter, destroy} = require('../controllers/productsContollers')

/* GET home page. */
router.get('/detailProduct', detail);
router.get('/carrito', carrito);
router.get('/add', add);
router.post('/add', store);
router.get('/edit/:id', edit);
router.put('/update/:id', update)
router.get('/search', search);
router.get('/filter', filter);
router.delete('/destroy/:id', destroy)

module.exports = router;