const express = require('express');
const router = express.Router();

const {register,processRegister, login} = require ('../controllers/usersController')

/* GET users listing. */
router
      .get('/register', register)
      .post('/register',processRegister)
      .get('/login', login);

module.exports = router;
