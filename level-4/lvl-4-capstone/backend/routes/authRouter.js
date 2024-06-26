const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')


// REGISTER //
authRouter.post('/register', (req,res,next)=> {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user)=> { // check to see if username exists
        if (err) {
            res.status(500)
            return next(err)
        }
        if (user) {
            res.status(403)
            return next(new Error('Username already taken')) // throws this error if username exists
        }
        const newUser = new User(req.body) // create new user if username is unique
        newUser.save((err, savedUser)=> { // save user
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET) // attatch token
            res.status(201).send({ token, user: savedUser.withoutPassword() }) // send token and new user to frontend
        })
    })
})

// LOGIN //
authRouter.post('/login', (req,res,next)=> {
    User.findOne({ username: req.body.username.toLowerCase() } ,(err, user)=> { // check for username in db
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!user) { // if user not found throw error
            res.status(403)
            return next(new Error('wrong username or password'))
        }
        
        user.checkPassword(req.body.password, (err, isMatch)=> {
            if (err) {
                res.status(403)
                return next(err)
            }
            if (!isMatch) {
                res.status(403)
                return next(err)
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET) // attatch token
            res.status(200).send({ token, user: user.withoutPassword() }) // send token and new user to frontend
        })
    })
})

module.exports = authRouter