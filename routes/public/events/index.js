const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Joi = require('joi');
const controller = require('../../../controllers/eventController');

router.get('/',(req, res, next) => {
    controller.getAllEvents()
        .then((events) => {
            res.send({
                status : "OK",
                events
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400);
            res.send({
                status : "error",
                error : err.message
            })
        })
});
router.get('/:date',(req,res,next) => {
    controller.getEventByDate(req.params.date)
    .then((events) => {
        res.send({
            status : "OK Date",
            events
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send({
            status : "error",
            error : err.message
        })
    })
});
module.exports = router;