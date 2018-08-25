var model = require('../models').events;
const Promise = require('bluebird');

eventController = {}

eventController.getAllEvents = () => new Promise((resolve, reject) => {
    model.findAll()
        .then((events) => {
            resolve(events);
        })
        .catch((err) => {
            reject(err);
        });
});

eventController.getEventByDate = (date) => new Promise((resolve, reject) => {
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


module.exports = eventController;