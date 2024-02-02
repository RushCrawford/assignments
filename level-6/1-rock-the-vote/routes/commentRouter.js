const express = require('express')
const commentRouter = express.Router()
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

// POST ROUTE //
commentRouter.post('/:postId', async (req,res,next)=> {
    try {
        req.body.post = req.params.postId
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = commentRouter