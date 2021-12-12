const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerImageProduct');
const {detail, carrito, add, store, edit, update, search, filter, destroy, searchHome} = require('../controllers/productsController');
const adminUserCheck = require ('../middlewares/adminUserCheck');
const productValidator = require('../validations/productValidator');

/* GET home page. */
router.get('/detailProduct/:id', detail);
router.get('/carrito', carrito);
router.get('/add',adminUserCheck, add);
router.post('/add', upload.array('image'),productValidator, store);
router.get('/edit/:id',adminUserCheck, edit);
router.put('/update/:id',upload.array('image'), productValidator, update)
router.get('/search', search);
router.get('/filter', filter);
router.delete('/destroy/:id', destroy)
router.get('/searchHome', searchHome);

module.exports = router;