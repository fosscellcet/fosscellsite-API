const model = require('../models').Blog;
const Promise = require('bluebird');

blogController = {};

blogController.getAllPosts = () => new Promise((resolve, reject) => {
    model.findAll({
        order : [
            ['date','DESC']
        ]
    })
    .then((posts) => resolve(posts))
    .catch((err) => reject(err));
});
blogController.getPostByID = (postid) => new Promise((resolve,reject) => {
    model.findAll({
        where : {
            id : postid
        }
    })
    .then((post) => resolve(post))
    .catch((err) => reject(err))
}); 

module.exports = blogController;