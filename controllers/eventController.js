var model = require('../models').events;
var Promise = require('bluebird');

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

module.exports = eventMethods;