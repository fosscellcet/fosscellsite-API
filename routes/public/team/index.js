const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Joi = require('joi');
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
router.post('/',(req,res,next) => {
    controller.addTeamMember(req.body)
        .then((newMember) => {
            res.status(201);
            res.json({
                status : "OK",
                newMember
            })
        })
        .catch((err) => {
            res.json({
                status : "error",
                error : err.message
            });
        })
});
module.exports = router;