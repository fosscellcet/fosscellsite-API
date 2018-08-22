const express = require('express');
const controller = require('../../../controllers/blogController')

var router = express.Router();

router.get('/',(req,res,next) => {
    controller.getAllPosts()
        .then((posts) => {
            res.send({
                Status : "OK",
                posts,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400)
                .send({
                    Status : "error",
                    error : err.message
                })
        })
});

router.get('/:id',(req,res,next) => {
    controller.getPostByID(req.params.id)
        .then((post) => {
            res.send({
                Status : "OK",
                post,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400)
                .send({
                    Status : "error",
                    error : err.message
                })
        })
});

module.exports = router;