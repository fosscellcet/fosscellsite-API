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
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$");
    const schema = Joi.object().keys({
        // Name is a required string
        name : Joi.string().required(),

        //Designation is a required string
        designation : Joi.string().required(),

        //Quote is a string
        quote : Joi.string(),

        /*Image name should be string
          It should be of jpg or jpeg format */
        image : Joi.string().regex(regex).required()
    });
    Joi.validate(req.body, schema)
        .then((value) => {
            controller.addTeamMember(req.body)
                .then((newMember) => {
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
        })
        .catch((err) => {
            res.json({
                status : "error",
                error : err.message
            });
        });
});
module.exports = router;