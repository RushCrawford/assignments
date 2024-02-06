const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const port = 7200
const secret = process.env.SECRET

// MIDDLEWARE //
app.use(express.json());
app.use(morgan('dev'));

// ROUTES //
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret, algorithms: ['HS256'] }))  // any request to an endpoint with /api requires a token
app.use('/api/todo', require('./routes/todoRouter'))

// DB CONNECTION //
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://acrawford0221:hFw0XIYfia1TrYJd@rtvcluster.7on5rv6.mongodb.net/',()=> {
    console.log('Connected to the DB')
})

// ERROR HANDLER //
app.use((err,req,res,next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})

// PORT //
app.listen(port, ()=> {
    console.log('The server is running on 7200')
})