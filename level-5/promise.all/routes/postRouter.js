const express = require('express')
const postRouter = express.Router()
const Post = require('../models/posts')
const Comment = require('../models/comments')
const User = require('../models/user')


postRouter.post('/', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        return res.status(201).send(savedPost)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

postRouter.get('/', async (req, res, next) => {
    try {
       const posts = await Post.find()
       
       const postsWithData = await Promise.all(posts.map(async post => {
        const comments = await Comment.find({postId: post._id}).populate('userId', '-password')
        const user = await User.findById(post.userId)
        return {...post.toObject(), comments, user: user.withoutPassword()}
       }))
       return res.status(200).send(postsWithData)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = postRouter