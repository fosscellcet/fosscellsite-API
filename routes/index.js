var express = require('express');
var router = express.Router();

router.use('/',require('./public'));
//router.use('/auth',require('./auth'));
//router.use('/admindash',require('./dashboard'));
module.exports = router;
