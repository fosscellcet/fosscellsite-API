var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
    res.json({
        name : "FOSS Cell Website API"
    });
});

router.use('/team',require('./team'));

module.exports = router;
