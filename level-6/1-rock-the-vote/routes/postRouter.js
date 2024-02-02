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
postRouter.route('/:postId')
    .get(async (req,res,next)=> {
        try {
            const postId = req.params.postId
            const requestedPost = await Post.findById(postId)
            return res.status(200).send(requestedPost)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .delete(async (req,res,next)=> {
        try {
            const postId = req.params.postId
            const deletedPost = await Post.findByIdAndDelete(postId)
            return res.status(200).send(`Post '${deletedPost.title}' deleted from db`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .put(async (req,res,next)=> {
        try {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.postId,
                req.body,
                {new: true},
            )
            return res.status(200).send(updatedPost)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

module.exports = postRouter