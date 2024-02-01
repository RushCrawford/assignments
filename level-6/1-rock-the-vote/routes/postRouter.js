const express = require('express')
const postRouter = express.Router()
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

// GET ALL, POST TO ALL ROUTES //
postRouter.route('/')
    .get(async (req,res,next)=> {
        try {
            allPosts = await Post.find()
            return res.status(200).send(allPosts)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .post(async (req,res,next)=> {
        try {
            req.body.user = req.auth._id
            const newPost = new Post(req.body)
            const savedPost = await newPost.save()
            return res.status(201).send(savedPost)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

// GET ONE, UPDATE ONE, DELETE ONE ROUTES //
postRouter.route('/:Itemid')
    .get()
    .put()
    .delete()

module.exports = postRouter