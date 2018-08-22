var model = require('../models').team;
var Promise = require('bluebird');

teamMethods = {};

teamMethods.getAllTeamMembers = () => new Promise((resolve,reject) => {
        model.findAll()
            .then((teamMembers) => {
                resolve(teamMembers);
            })
            .catch((err) => {
                reject(err);
            });
    });

teamMethods.addTeamMember = (member) => new Promise((resolve,reject) => {
        model.create(member)
            .then((newMember) => {
                resolve(newMember);
            })
            .catch((err) => {
                reject(err);
            });
});
module.exports = teamMethods;

