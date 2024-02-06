const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// CREATE A USER //
authRouter.post('/signup', (req,res,next)=> {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user)=> { // check to see if username already exists
        if (err) {
            res.status(500)
            return next(err)
        } 
        if (user) {
            res.status(403)
            return next(new Error('That username is already taken'))    // throw this error if finds username in db
        }
        const newUser = new User(req.body)  // create new user if username is unique
        newUser.save((err, savedUser)=> {   // save new user
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET )   // create a token using the secret in .env file and attach to user
            res.status(201).send({token, user: savedUser})  // send token and new user to front end
        })
    })
})

// LOGIN //
authRouter.post('/login', (req,res,next)=> {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user)=> { // check for username in db
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!user) {    // if username doesnt exist throw error
            res.status(403)
            return next(new Error('Username or password incorrect'))
        }
        if (req.body.password !== user.password) {  // check password
            res.status(403)
            return next(new Error('Username or password incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET )   // create a token using the secret in .env file and attach to user
        res.status(201).send({token, user})  // send token and new user to front end
    })
})

module.exports = authRouter