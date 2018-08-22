var model = require('../models').events;
const Promise = require('bluebird');
const Joi = require('joi');
eventMethods = {}

eventMethods.getAllEvents = () => new Promise((resolve, reject) => {
    model.findAll()
        .then((events) => {
            resolve(events);
        })
        .catch((err) => {
            reject(err);
        });
});

eventMethods.getEventByDate = (date) => new Promise((resolve, reject) => {
    model.findAll({
        where : {
            date : new Date(date)
        }
    })
    .then((events) => {
        resolve(events);
    })
    .catch((err) => {
        reject(err);
    })
})

eventMethods.addEvent = (data) => new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
        name : Joi.string().required(),
        description : Joi.string().required(),
        date : Joi.date().required(),
        venue : Joi.string().required()
    })
    Joi.validate(data,schema)
        .then((value) => {
            model.create(data)
                .then((event) => resolve(event))
                .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
});

module.exports = eventMethods;