const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const controller = require('../../../controllers/teamController');

router.get('/', function(req,res,next){
    controller.getAllTeamMembers()
        .then((teamMembers) => {
            res.json({
                status : "OK",
                teamMembers
            });
        })
        .catch((err) => {
            res.status(400);
            res.json({
                status : "error encountered",
                error : err.message
            })
            console.log(err);
        });
});

module.exports = router;