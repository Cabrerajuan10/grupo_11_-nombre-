/*MODULOS*/
const express = require('express');
const router = express.Router();

/*VALIDACIONES*/
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidtor');
const profileValidator = require('../validations/profileValidator');

/*MIDDLEWARES */
const userLoginCheck = require('../middlewares/userLoginCheck');
const notEntry = require('../middlewares/notEntry');
const upload = require('../middlewares/muterImageUser');

const {register,processRegister, login, processLogin,logout, profile, update} = require ('../controllers/usersController')

/* GET users listing. */
router
      .get('/register',notEntry, register)
      .post('/register',registerValidator, processRegister)
      .get('/login',notEntry, login)
      .post('/login',loginValidator, processLogin)
      .get('/logout',logout)
      .get('/profile',userLoginCheck, profile)
      .post('/profile',upload.single('avatar'),profileValidator, update)

module.exports = router;
