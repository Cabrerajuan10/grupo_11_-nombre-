var express = require('express');
var router = express.Router();


const {getEmails} = require('../controllers/apiController');


/* /api */
router
    .get('/get-emails', getEmails)

module.exports = router;