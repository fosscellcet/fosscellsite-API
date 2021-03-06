var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
    res.json({
        name : "FOSS Cell Website API"
    });
});

router.use('/team',require('./team'));
router.use('/events', require('./events'));
router.use('/blog', require('./blog'))
module.exports = router;
