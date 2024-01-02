const express = require('express')
const app = express()
const { v4:uuidv4 } = require('uuid')
const port = process.env.PORT || 7200
const middleware = require('./middleware')



app.get('/', (req,res)=> {
    res.send('req.body')
})

app.listen(port, ()=> {
    console.log('The server is running on port 7200')
})