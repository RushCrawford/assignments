const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const PORT = process.env.PORT
const SECRET = process.env.SECRET
const URI = process.env.URI

// MIDDLEWARE //
app.use(express.json());
app.use(morgan('dev'));

// ROUTES //
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret: SECRET, algorithms: ['HS256'] }))
app.use('/api/watchlist', require('./routes/watchlistRouter'))

// DB CONNECTION //
mongoose.set('strictQuery', true);
mongoose.connect(URI, ()=> {
    console.log('Connected to the DB')
})

// ERROR HANDLER //
app.use((err,req,res,next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})

// PORT //
app.listen(PORT, ()=> {
    console.log('The server is running on port 7200')
})