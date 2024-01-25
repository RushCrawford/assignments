const express = require('express')
const userRouter = express.Router()
const Users = require('../models/users')

// TO ALL ROUTES //
userRouter.route('/')
    .get(async(req,res,next)=> {
        try{
            const users = await Users.find()
            return res.status(200).send(users)
        } catch(err) {
            res.status(500)
            return next(err)
        }
    })
    .post(async(req,res,next)=> {
        try {
            const newUser = new Users(req.body)
            const savedUser = await newUser.save(Users)
            return res.status(201).send(savedUser)
        } catch(err) {
            res.status(500)
            return next(err)
        }
    })

// BY ID ROUTES //
userRouter.route('/:userId')
    .get(async(req,res,next)=> {
        try {
            const requestedUser = await Users.findById(req.params.userId)
            return res.status(200).send(requestedUser)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .put(async(req,res,next)=> {
        try {
            const updatedUser = await Users.findByIdAndUpdate(
                req.params.userId,
                req.body,
                { new: true }
                )
            return res.status(200).send(updatedUser)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .delete(async(req,res,next)=> {
        try {
            const deletedUser = await Users.findByIdAndDelete(req.params.userId)
            return res.status(201).send(`${deletedUser.name} removed from the DB`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

module.exports = userRouter