/*MODULOS */
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerImageProduct')

/*CONTROLADORES*/
const {detail, carrito, add, store, edit, update, search, filter, destroy} = require('../controllers/productsController')

/* VALIDACIONES*/
const productValidator = require('../validations/productValidator');
const adminUserCheck = require('../middlewares/adminUserCheck')


/* GET home page. */
router.get('/detailProduct/:id', detail);
router.get('/carrito', carrito);
router.get('/add', adminUserCheck, add);
router.post('/add', upload.array('image'), productValidator, store);
router.get('/edit/:id',adminUserCheck, edit);
router.put('/update/:id',productValidator, update)
router.get('/search/:id', search);
router.get('/filter', filter);
router.delete('/destroy/:id', destroy)

module.exports = router;