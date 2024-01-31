const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comments')


commentRouter.post('/:postId', async(req, res, next) => {
    try {
        req.body.userId = req.auth._id
        req.body.postId = req.params.postId
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = commentRouter