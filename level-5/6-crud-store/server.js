const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 7200

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

//ROUTES

app.listen(port, (()=> {
    console.log('The server is running on port 7200')
}))