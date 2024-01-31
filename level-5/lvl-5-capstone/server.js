const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = 7200

// MIDDLEWARE //
app.use(express.json())
app.use(morgan('dev'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:7200/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ROUTES //
app.use('/products', require('./routes/productRouter'))
app.use('/users', require('./routes/userRouter'))

// DB CONNECTION //
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://acrawford0221:kxXASPuH1Y7WCP6l@cluster0.7jxrbmh.mongodb.net/',
    (err)=> { console.log('Connected to the DB', err)}
)

// ERROR HANDLER //
app.use((err,req,res,next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, ()=> {
    console.log('The server is running on port 7200')
})

