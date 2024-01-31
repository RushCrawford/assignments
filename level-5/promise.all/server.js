const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const { expressjwt } = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)

mongoose.connect(
    'mongodb+srv://acrawford0221:dHLYx4VtH10POVzh@cluster0.ct7ptth.mongodb.net/',
    () => console.log('Connected to the DB')
)

app.use('/api/main', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))

app.use('/api/auth', require('./routes/authRouter'))
app.use('/api/main/posts', require('./routes/postRouter'))
app.use('/api/main/comments', require('./routes/commentRouter'))



app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(7550, () => {
    console.log('server is running on port 7550')
})




















