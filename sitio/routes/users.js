const express = require('express');
const router = express.Router();
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');

const userLoginCheck = require ('../middlewares/userLoginCheck');
const adminUserCheck = require ('../middlewares/adminUserCheck');
const notEntry = require('../middlewares/notEntry');
const profileValidator = require('../validations/profileValidator');
const upload = require('../middlewares/muterImageUser');


const {register,processRegister,login,processLogin,logout,profile,update} = require ('../controllers/usersController');
const {userAdd, userStore, userEdit, userUpdate, userSearch, userFilter, userDestroy} = require ('../controllers/crudUsersController');
/* GET users listing. */
router
.get('/register',notEntry, register)
.post('/register',registerValidator,processRegister)
.get('/login',notEntry, login)
.post('/login', loginValidator, processLogin)
.get('/logout',logout)
.get('/profile',userLoginCheck,profile)
.post('/profile',upload.single('avatar'),profileValidator, update)

/*CRUD USUARIOS */

.get('/userAdd',adminUserCheck, userAdd)
.post('/userAdd', upload.single('avatar'), userStore)
.get('/userEdit/:id',adminUserCheck, userEdit)
.put('/userUpdate/:id',upload.single('avatar'), userUpdate)
.get('/userSearch', userSearch)
.get('/userFilter', userFilter)
.delete('/userDestroy/:id', userDestroy)


module.exports = router;
