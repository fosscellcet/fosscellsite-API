var model = require('../models').team;
var Promise = require('bluebird');
var Joi = require('joi');

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
    Joi.validate(member, schema)
        .then((value) => {
            model.create(member)
            .then((newMember) => {
                resolve(newMember);
            })
            .catch((err) => {
                reject(err);
            });
        })
        .catch((err) => {
            reject(err);
        });    
});
module.exports = teamMethods;

